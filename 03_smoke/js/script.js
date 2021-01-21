

let scene, camera, renderer, cloudParticles = [];
function init() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    document.getElementById("smoke").appendChild(renderer.domElement);
    control = new THREE.OrbitControls(camera, renderer.domElement);

    renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", function(){
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width/height;
        camera.updateProjectionMatrix();
    })
    renderer.setClearColor( 0xffffff, 0 );

    camera.position.set(0, 0, 10);
    
    
    let directionalLight = new THREE.DirectionalLight(0xc4c4c4);
    directionalLight.position.set(0,0,1);
    scene.add(directionalLight);

    let redLight = new THREE.PointLight(0xff0000,10,100);
    // redLight.position.set(500, 500, 500);
    scene.add(redLight);
    
    let blueLight = new THREE.PointLight(0x0000ff,10,100);
    // blueLight.position.set(100, 100, 100);
    scene.add(blueLight);
    
    let greenLight = new THREE.PointLight(0x00ff00,10,100);
    // greenLight.position.set(300, 300, 300);
    scene.add(greenLight);
    

    let loader = new THREE.TextureLoader();
    loader.load("./img/smoke.png", function(texture){
        cloudGeo = new THREE.PlaneBufferGeometry(10,10);
        cloudMaterial = new THREE.MeshLambertMaterial({
        map:texture,
        transparent: true
        });
        for(let i=0; i<1; i++) {
            let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
            cloud.position.set(
                0,
                0,
                0
            );
            cloud.material.opacity = 1;
            cloudParticles.push(cloud);
            scene.add(cloud);
        }
    });
    
    function render() {
        cloudParticles.forEach(e => {
            e.rotation.z -=0.001;
         });

         console.log(camera.position.x);
         console.log(camera.position.y);
         console.log(camera.position.z);
        renderer.render(scene,camera);
        requestAnimationFrame(render);
    }

    render();
}

init();

