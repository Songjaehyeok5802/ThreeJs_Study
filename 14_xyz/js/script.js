
function threejs() {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    document.getElementById("threejs").appendChild(renderer.domElement);
    control = new THREE.OrbitControls(camera, renderer.domElement);

    //SIZE ---------
    renderer.setSize(window.innerWidth, window.innerHeight);

    window.addEventListener("resize", function(){
        var width = window.innerWidth;
        var height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width/height;
        camera.updateProjectionMatrix();
    })
    renderer.setClearColor( 0x000000, 0 );
    renderer.shadowMap.enabled = true;
    scene.fog = new THREE.Fog(0xffffff, 200, 500);


    //CAMERA--------
    camera.position.set(-90, 90, 90);
    camera.lookAt(0, 0, 0);  

    //LIGHT-------------
    // const light = new THREE.AmbientLight( 0xd7d7d7 ); // soft white light
    // scene.add( light );
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    scene.add( directionalLight );



    const geometry = new THREE.PlaneGeometry(200, 120, 2, 2);
    const material = new THREE.MeshStandardMaterial({color : 0x9f9f9f, wireframe : true});
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x += Math.PI / 2 * -1;
    plane.position.set(0, 0, 0);
    plane.scale.set(0, 0, 0);
    scene.add(plane);

    const plane_2 = new THREE.Mesh(geometry, material);
    plane_2.position.set(0, 0, 0);
    plane_2.scale.set(0, 0, 0);
    scene.add(plane_2);

    const plane_3 = new THREE.Mesh(geometry, material);
    plane_3.position.set(0, 0, 0);
    plane_3.scale.set(0, 0, 0);
    scene.add(plane_3);

    function intro(){
        if(plane.scale.y < 0.8){
            plane.scale.y += 0.004;
        }

        setInterval(()=>{
            if(plane_2.scale.y < 0.8){ 
                plane_2.scale.y += 0.004;
            }
        }, 1500)

        setInterval(()=>{
            if(plane_3.scale.x < 0.4){ 
                plane_3.scale.x += 0.004;
            }
        }, 4000)
    }


    //RENDER-------------------------------------------------------------------------------
    var renderScene = new function renderScene() {
        requestAnimationFrame(renderScene);

        intro();

        // plane.scale.y += 0.012;
        // plane_2.scale.y += 0.008;
        // plane_3.scale.x += 0.008;


        // console.log(camera.position.x);
        // console.log(camera.position.y);
        // console.log(camera.position.z);

        renderer.render(scene,camera);



    }   
}

threejs();
