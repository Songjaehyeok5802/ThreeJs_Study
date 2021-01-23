

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

    camera.position.set(-3, 5, 10);
    
    

    // const blueLight = new THREE.PointLight( 0xf63030, 1, 100 );
    // blueLight.position.set( 8, 1.5, 3 );
    // scene.add( blueLight );

    // const redLight = new THREE.PointLight( 0xf63030, 2.5, 100 );
    // redLight.position.set( -8, 1.5, 3 );
    // scene.add( redLight );
    
    // const light = new THREE.DirectionalLight( 0x791b1b, 0.5);
    // light.position.set(0, 10, 10);
    // scene.add( light );

    const blueLight = new THREE.PointLight( 0x6a6a6a, 1, 100 );
    blueLight.position.set( 8, 1.5, 3 );
    scene.add( blueLight );

    const redLight = new THREE.PointLight( 0x6a6a6a, 2.5, 100 );
    redLight.position.set( -8, 1.5, 3 );
    scene.add( redLight );
    
    const light = new THREE.DirectionalLight( 0x6a6a6a, 0.5);
    light.position.set(0, 10, 10);
    scene.add( light );



    let loader = new THREE.TextureLoader();
    loader.load("./img/smoke.png", function(texture){
        cloudGeo = new THREE.PlaneBufferGeometry(10,10);
        cloudMaterial = new THREE.MeshLambertMaterial({
        map:texture,
        transparent: true
        });
        for(let i=0; i<50; i++) {
            let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
            cloud.position.set(
                (Math.random()*15)-10,
                Math.random()*10,
                Math.random()*2
            );
            cloud.material.opacity = 0.3;
            cloudParticles.push(cloud);
            scene.add(cloud);
        }
    });

    let composer;
    composer = new POSTPROCESSING.EffectComposer(renderer);
    composer.addPass(new POSTPROCESSING.RenderPass(scene,camera));

    const effectPass = new POSTPROCESSING.EffectPass(
      camera,
      new POSTPROCESSING.BloomEffect()
    );
    effectPass.renderToScreen = true;
    composer.addPass(effectPass);

    function render() {
        cloudParticles.forEach(e => {
            e.rotation.z -=0.0005;
         });
        renderer.render(scene,camera);
        requestAnimationFrame(render);
    }

    render();
}

init();

