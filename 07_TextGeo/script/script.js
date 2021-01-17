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

    //CAMERA--------
    camera.position.set(2, 0, 2);
    camera.lookAt(scene.position);  

    //LIGHT-------------
    var ambientLight = new THREE.DirectionalLight(0xffffff);
    scene.add(ambientLight);

    
    var loader = new THREE.FontLoader();

    loader.load( './Lato Hairline_Regular.json', function ( font ) {
        var geometry = new THREE.TextGeometry( 'Song Jae Hyeok', {
            font: font,
            size: 50,
            curveSegments: 1
        } );

        const mat = new THREE.MeshBasicMaterial({color : 0xf0f8ff});
        const txt = new THREE.Mesh(geometry, mat);
        scene.add(txt);
    } );



    //RENDER-------------------------------------------------------------------------------
    var renderScene = new function renderScene() {
        requestAnimationFrame(renderScene);

        renderer.render(scene,camera);
    }   
}
window.onload = threejs();

