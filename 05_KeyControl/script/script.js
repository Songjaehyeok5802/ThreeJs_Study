
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

    //CAMERA--------
    camera.position.set(0, 8, 8);
    camera.lookAt(0, 0, 0);  

    //LIGHT-------------
    // var ambientLight = new THREE.AmbientLight(0xd8d8d8);
    // scene.add(ambientLight);
    // const DirecLight = new THREE.DirectionalLight( 0xffffff, 0.5);
    // DirecLight.position.set(0, 10, 0);
    // scene.add(DirecLight);
    // DirecLight.castShadow = true;           
    // DirecLight.shadow.mapSize.width = 1000; 
    // DirecLight.shadow.mapSize.height = 1000;


    var light = new THREE.SpotLight( 0xffffff, 1, 100, 2, 1, 0);
    light.position.set( 0, 50, 0 ); 	
    camera.lookAt(0, 0, 0); 	
    light.castShadow = true;           
    light.shadow.mapSize.width = 4000; 
    light.shadow.mapSize.height = 4000;
    scene.add( light );



    const geometry = new THREE.BoxGeometry(1,0);
    const material = new THREE.MeshStandardMaterial({color: 0xdeb887});
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true; 
    cube.receiveShadow = true;
    scene.add(cube);

    const groundGeo = new THREE.PlaneGeometry(50, 50, 1, 1);
    const groundMat = new THREE.MeshStandardMaterial({color : 0xf0ffff});
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x += Math.PI / 2 * -1;
    ground.position.set(0, -2, 0);
    ground.castShadow = true; 
    ground.receiveShadow = true;
    scene.add(ground);


    let w, s, a, d;

    //RENDER-------------------------------------------------------------------------------
    var renderScene = new function renderScene() {
        requestAnimationFrame(renderScene);
        

        function keyEvent(){
            let speed = 0.05;
            document.addEventListener("keydown", onKeyDown);
            document.addEventListener("keyup", onKeyUp);
            function onKeyDown(event) {
                var keyCode = event.which;
                if (keyCode == 87) {
                    w = true;
                } else if (keyCode == 83) {
                    s = true;
                } else if (keyCode == 65) {
                    a = true;
                } else if (keyCode == 68) {
                    d = true;
                }
            };
            function onKeyUp(event) {
                var keyCode = event.which;
                if (keyCode == 87) {
                    w = false;
                } else if (keyCode == 83) {
                    s = false;
                } else if (keyCode == 65) {
                    a = false;
                } else if (keyCode == 68) {
                    d = false;
                }
            }; 
            if(w){
                cube.position.z -= speed;
                camera.position.z -=speed;
            }
            if(s){
                cube.position.z += speed;  
                camera.position.z +=speed; 
            }
            if(a){
                cube.position.x -= speed;  
                camera.position.x -=speed;
            }
            if(d){
                cube.position.x += speed;  
                camera.position.x +=speed;
            }
        };
        keyEvent();

        renderer.render(scene,camera);
    }   
}
window.onload = threejs();

