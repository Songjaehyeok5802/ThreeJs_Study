





function three(){
    const scene = new THREE.Scene();
    let url = [
        '../img/bg/blizzard_ft.jpg',
        '../img/bg/blizzard_bk.jpg', 
        '../img/bg/blizzard_up.jpg',
        '../img/bg/blizzard_dn.jpg',
        '../img/bg/blizzard_rt.jpg',
        '../img/bg/blizzard_lf.jpg',
    ]
    let loader = new THREE.CubeTextureLoader();
    scene.background = loader.load(url);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    document.getElementById("christmas").appendChild(renderer.domElement);
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

    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);


    const ambient = new THREE.AmbientLight( 0xffffff );
    scene.add( ambient );

   
    const textureCube = new THREE.CubeTextureLoader().load( url);
    textureCube.mapping = THREE.CubeRefractionMapping;

        const geometry = new THREE.SphereGeometry( 4.5, 32, 32 );
        const material = new THREE.MeshPhongMaterial( {color: 0xffffff , envMap: textureCube, refractionRatio: 0.98, reflectivity: 0.9} );
        const sphere = new THREE.Mesh( geometry, material );
        scene.add( sphere );
    




    function prosecution(){
        var pro_mtl =  new THREE.MTLLoader(),
        mtl_Src = "./obj/Tree.mtl";
        pro_3D = new THREE.Object3D;

        pro_mtl.load(mtl_Src, function (materials){
        materials.preload();

        var testobj = new THREE.OBJLoader();

        testobj.setMaterials(materials);
        
        testobj.load('./obj/Tree.obj', 
            function (object) {
                pro_3D = object;
                pro_3D.castShadow = true;
                pro_3D.receiveShadow = true;
                pro_3D.scale.set(2, 2, 2);
                pro_3D.position.set(16, -2, 0);
                pro_3D.rotation.set(0, Math.PI / 2 * -1, 0);
                // scene.add(pro_3D);
            })
        });
    }
    prosecution();


    let composer;
    composer = new POSTPROCESSING.EffectComposer(renderer);
    composer.addPass(new POSTPROCESSING.RenderPass(scene,camera));

    const effectPass = new POSTPROCESSING.EffectPass(
      camera,
      new POSTPROCESSING.BloomEffect()
    );
    effectPass.renderToScreen = true;
    composer.addPass(effectPass);
                

 
    var t = 0;
    const renderScene = new function renderScene() {
        requestAnimationFrame(renderScene);
        t += 0.0025;  
        camera.position.x = 20*Math.cos(t) + 0;
        camera.position.z = 20*Math.sin(t) + 0;
        camera.lookAt(0, 0, 0);

        composer.render();
        // renderer.render(scene,camera);
    }  
    
}
three();