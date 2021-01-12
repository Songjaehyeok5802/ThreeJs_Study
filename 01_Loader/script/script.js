
function threejs() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    document.getElementById("three").appendChild(renderer.domElement);
    control = new THREE.OrbitControls(camera, renderer.domElement);

    //SIZE ---------
    renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", function(){
        var width = window.innerWidth;
        var height = window.innerHeight;
        renderer.setSize(width, height);
    })
    renderer.setClearColor( 0x000000, 0 );

    //CAMERA--------
    camera.position.set(2, 0, -2);

    //LIGHT-------------
    var ambientLight = new THREE.AmbientLight(0xf0f8ff );
    scene.add(ambientLight);
    var lights = [];
    lights[0] = new THREE.DirectionalLight( 0xf0f8ff, 0.1 );
    lights[0].position.set( 1, 0, 0 );
    lights[1] = new THREE.DirectionalLight( 0xf0f8ff, 0.5 );
    lights[1].position.set( 0, 1, 0 );
    lights[2] = new THREE.DirectionalLight( 0xf0f8ff, 0.1 );
    lights[2].position.set( 0, 0, 1 );
    scene.add( lights[0] );
    scene.add( lights[1] );
    scene.add( lights[2] );

    // video----------------------------------------------------
    // var vid = document.getElementById("vid");
    // var vidTxt = new THREE.VideoTexture(vid);
    // var cubeGeo = new THREE.BoxGeometry(1,1,1);
    // var cubeMat = new THREE.MeshBasicMaterial({map : vidTxt});
    // var cube = new THREE.Mesh(cubeGeo,cubeMat);
    // scene.add(cube);
    
    // vid.loop = true;
    // vid.mute = true;
    // vid.src = "./video/trailer.mp4";

    // var pauseBtn = document.getElementById("pause");
    // var playBtn = document.getElementById("play");
    // pauseBtn.addEventListener("click", function(){
    //     vid.pause();
    // });
    // playBtn.addEventListener("click", function(){
    //     vid.play();
    // });


    //일반 obj----------------------------------------------------
    // var main = new THREE.Object3D;
    // var main_loader = new THREE.OBJLoader();
    // main_loader.load(
    //     "./obj/test.obj",
    //     function(object){
    //         main = object;
    //         main.scale.set(1, 1, 1);
    //         scene.add(main);
    //     }
    // );


    // mtl 포함 obj----------------------------------------------------
    // var testmtl =  new THREE.MTLLoader(),
    //     mtl = "./obj/test.mtl",
    //     // mtl = "./obj/qwe.mtl",
    //     main = new THREE.Object3D;
    // testmtl.load(mtl, function (materials){
    //     materials.preload();
    //     var testobj = new THREE.OBJLoader();
    //         testobj.setMaterials(materials);
    //         testobj.load('./obj/test.obj', function (object) {
    //         object.scale.set(1, 1, 1);
    //         main = object;
    //         scene.add(main);
    //     })
    // })

    // fbx----------------------------------------------------
    // var imgCube = new THREE.Object3D;
    // var cubeLoad = new THREE.FBXLoader();
    // cubeLoad.load(
    //     "./fbx/img2.fbx",
    //     function(object){
    //         imgCube = object;
    //         scene.add(imgCube);
    //     }
    // );

    
    


    //RENDER---------------------------------------------------------------
    var renderScene = new function renderScene() {
        requestAnimationFrame(renderScene);
        camera.lookAt(0, 0, 0);  
        if(camera.position.x < 2 && window.scrollY < 500){
            camera.position.x += 0.04;
        }
        if(camera.position.y > 0 && window.scrollY < 500 ){
            camera.position.y -= 0.04;
        }
        if(camera.position.x > -3 && window.scrollY > 500){
            camera.position.x -= 0.04;
        }
        if(camera.position.y < 2 && window.scrollY > 500){
            camera.position.y += 0.04;
        }
        renderer.render(scene,camera);
    }   
}
threejs();
