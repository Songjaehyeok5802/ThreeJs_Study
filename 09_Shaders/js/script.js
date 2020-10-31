

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
    })
    renderer.setClearColor( 0x000000, 0);

    //CAMERA--------
    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);  
  
    //LIGHT-------------
    // var ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    // scene.add(ambientLight);
    // const DirecLight = new THREE.DirectionalLight( 0xffffff, 1);
    // scene.add(DirecLight);


    const geometry = new THREE.PlaneGeometry(4, 6, 30, 30);
    const material = new THREE.ShaderMaterial({
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent,
        uniforms: {
            uTime: { value: 0.0 }
          },
          wireframe: true,
    });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);


    const clock = new THREE.Clock;


    const renderScene = new function renderScene() {
        requestAnimationFrame(renderScene);
        material.uniforms.uTime.value = clock.getElapsedTime();
        renderer.render(scene,camera);
    }  
}
threejs();
