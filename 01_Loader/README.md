# 외부 파일 Load


## mtl 파일 없는 obj 파일 로드

    var main = new THREE.Object3D;
    var main_loader = new THREE.OBJLoader();
    main_loader.load(
        "./obj/test.obj",
        function(object){
            main = object;
            main.scale.set(1, 1, 1);
            scene.add(main);
        }
    );


## mtl 파일 있는 obj 파일 로드

    var testmtl =  new THREE.MTLLoader(),
        mtl = "./obj/test.mtl",
        // mtl = "./obj/qwe.mtl",
        main = new THREE.Object3D;
    testmtl.load(mtl, function (materials){
        materials.preload();
        var testobj = new THREE.OBJLoader();
            testobj.setMaterials(materials);
            testobj.load('./obj/test.obj', function (object) {
            object.scale.set(1, 1, 1);
            main = object;
            scene.add(main);
        })
    })


## fbx 파일 로드

    var imgCube = new THREE.Object3D;
    var cubeLoad = new THREE.FBXLoader();
    cubeLoad.load(
        "./fbx/img2.fbx",
        function(object){
            imgCube = object;
            scene.add(imgCube);
        }
    );


## vid 맵핑

    var vid = document.getElementById("vid");
    var vidTxt = new THREE.VideoTexture(vid);
    var cubeGeo = new THREE.BoxGeometry(1,1,1);
    var cubeMat = new THREE.MeshBasicMaterial({map : vidTxt});
    var cube = new THREE.Mesh(cubeGeo,cubeMat);
    scene.add(cube);
    
    vid.loop = true;
    vid.mute = true;
    vid.src = "./video/trailer.mp4";




 