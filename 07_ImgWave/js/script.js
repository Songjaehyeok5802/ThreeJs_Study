
function threejs() {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    document.getElementById("threejs").appendChild(renderer.domElement);
    // control = new THREE.OrbitControls(camera, renderer.domElement);

    //SIZE ---------
    renderer.setSize(window.innerWidth, window.innerHeight);
    // console.log(renderer.setSiz);

    window.addEventListener("resize", function(){
        var width = window.innerWidth;
        var height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width/height;
        camera.updateProjectionMatrix();
    })
    renderer.setClearColor( 0x000000, 0 );

    //CAMERA--------
    camera.position.set(0, 0, 80);
    camera.lookAt(0, 0, 0);  

    //LIGHT-------------
    var ambientLight = new THREE.AmbientLight(0xd8d8d8);
    scene.add(ambientLight);
    const DirecLight = new THREE.DirectionalLight( 0xffffff, 0.5);
    const DirecLight2 = new THREE.DirectionalLight( 0xffffff, 0.5);
    DirecLight.position.set(-1, 2, 4);
    DirecLight2.position.set(2, 1, 0);
    scene.add(DirecLight);
    scene.add(DirecLight2);


    const texture = new THREE.TextureLoader().load( './img/test3.png' );
    const geometry = new THREE.PlaneGeometry(120, 70, 10, 10);
    const material = new THREE.MeshBasicMaterial({map : texture});
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);


    var speed = 0;
    function testAni(){
        for (var i = 0; i < geometry.vertices.length; i++) {
            var z = geometry.vertices[i].z;
            geometry.vertices[i].z = Math.sin(( i + speed));
            plane.geometry.verticesNeedUpdate = true;
            speed += 0.0005;
          }
    }
    
    var effect = new THREE.AnaglyphEffect(renderer);
    effect.setSize(window.innerWidth, window.innerHeight);
    
    //RENDER-------------------------------------------------------------------------------
    var renderScene = new function renderScene() {
      requestAnimationFrame(renderScene);
      

        testAni();

        renderer.render(scene,camera);
        // effect.render(scene,camera);



    }   
}
threejs();
