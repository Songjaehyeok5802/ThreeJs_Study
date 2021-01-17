// console.log("hello");


let scene, camera, renderer, cloudParticles = [];
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,1,1000);
    camera.position.x ;
    camera.rotation.x = 1.16;
    camera.rotation.y = -0.12;
    
    let directionalLight = new THREE.DirectionalLight(0xc4c4c4);
    directionalLight.position.set(0,0,1);
    scene.add(directionalLight);
    
    let redLight = new THREE.PointLight(0xff0000,10,450);
    redLight.position.set(500, 500, 500);
    scene.add(redLight);
    
    let blueLight = new THREE.PointLight(0x0000ff,10,450);
    blueLight.position.set(100, 100, 100);
    scene.add(blueLight);
    
    let greenLight = new THREE.PointLight(0x00ff00,10,450);
    greenLight.position.set(300, 300, 300);
    scene.add(greenLight);
    
    

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.setClearColor( 0x000000, 0 );
    document.body.appendChild(renderer.domElement);
    
    let loader = new THREE.TextureLoader();
    loader.load("./img/smoke_4.png", function(texture){
        cloudGeo = new THREE.PlaneBufferGeometry(500,500);
        cloudMaterial = new THREE.MeshLambertMaterial({
          map:texture,
          transparent: true
        });
    for(let i=0; i<10; i++) {
        let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
        cloud.position.set(
        Math.random()*800 -400,
        500,
        Math.random()*500-500
        );
        cloud.rotation.x = 1.16;
        cloud.rotation.y = -0.12;
        cloud.rotation.z = Math.random()*2*Math.PI;
        cloud.material.opacity = 0.55;
        cloudParticles.push(cloud);
        scene.add(cloud);
    }


    });
    render();
}

function render() {
    cloudParticles.forEach(p => {
        p.rotation.z -=0.001;
     });
     
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}
init();

