

function threejs(){
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    $("#threejs").append(renderer.domElement);
    control = new THREE.OrbitControls(camera, renderer.domElement);

    renderer.setSize(window.innerWidth, window.innerHeight);

    window.addEventListener("resize", function(){
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width/height;
        camera.updateProjectionMatrix();
        // uniforms.u_resolution.value.x = renderer.domElement.width;
        // uniforms.u_resolution.value.y = renderer.domElement.height;
    })
    renderer.setClearColor( 0xffffff,1);

    //CAMERA--------
    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);  


    const geometry = new THREE.PlaneGeometry(10, 5, 30, 30);
    const texture = new THREE.TextureLoader().load( './img/test3.png' );
    const material = new THREE.MeshBasicMaterial({
        map : texture,
        wireframe: false,
        side : THREE.DoubleSide
    });
    // const material = new THREE.ShaderMaterial({
    //     vertexShader: document.getElementById('vertexShader').textContent,
    //     fragmentShader: document.getElementById('fragmentShader').textContent,
    //     uniforms: {
    //         uTime: {
    //             value: 0
    //           },
    //           uTexture: {
    //             value: null
    //           },
    //           uOffset: {
    //             value: new THREE.Vector2(0.0, 0.0)
    //           },
    //           uAlpha: {
    //             value: 0
    //           }
    //       },
    //     wireframe: false,
    //     side : THREE.DoubleSide
    // });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
    const clock = new THREE.Clock;

    const renderScene = new function renderScene() {
        requestAnimationFrame(renderScene);
        // material.uniforms.uTexture.value = texture;
        
        renderer.render(scene,camera);
    }  
}
threejs();
