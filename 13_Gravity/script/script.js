
function threejs() {

    Physijs.scripts.worker = './vendor/physijs_worker.js';
    Physijs.scripts.ammo = '../vendor/ammo.js';

    var scene = new Physijs.Scene;
    scene.setGravity(new THREE.Vector3(0, -10, 0));

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
    renderer.toneMapping = THREE.LinearToneMapping;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    //CAMERA--------
    camera.position.set(0, 15, 8);
    camera.lookAt(0, 0, 0);  


    // Light --------
    let hemiLight = new THREE.HemisphereLight( 0xEBF7FD, 0xEBF7FD, 0.2 );
    hemiLight.position.set( 0, 20, 20 );
    scene.add( hemiLight );

    
    // box --------
    const boxGeo = new THREE.CubeGeometry(3, 3, 3);
    const boxMat = new THREE.MeshStandardMaterial({color: 0xffffff});
    const box = new Physijs.BoxMesh(boxGeo, boxMat);
    const box2 = new Physijs.BoxMesh(boxGeo, boxMat);
    box.castShadow = true;
    box.receiveShadow = true;
    box.position.set(0, 2, 0);
    box2.position.set(0, 10, 0);
    box2.rotation.set(6, 0, 6);
    scene.add(box);
    scene.add(box2);
 
    
    
    // Ground ---------
    let groundScale = 25;
    const groundGeo = new THREE.PlaneGeometry(groundScale, groundScale, 1, 1);
    const groundMat = new THREE.MeshStandardMaterial({color : 0xf0ffff});
    const ground = new Physijs.BoxMesh(groundGeo, groundMat);
    ground.rotation.x += Math.PI / 2 * -1;
    ground.position.set(0, -2, 0);
    ground.castShadow = true; 
    ground.receiveShadow = true;
    scene.add(ground);

    // Fog ---------
    const near = 0.1;
    const far = 40;
    const color = 0x000000;
    scene.fog = new THREE.Fog(color, near, far);
    scene.background = new THREE.Color(color);


    //RENDER-------------------------------------------------------------------------------
    const renderScene = new function renderScene() {
        requestAnimationFrame(renderScene);

        scene.simulate(); 

        renderer.render(scene,camera);
    }   
}
window.onload = threejs();

