


function threeJs(){


const scene = new THREE.Scene();
//perspectivecamera(fov, aspect, near, far);
//(시야각, canvas가로 세로 비율, 카메라 범위)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 50);
const renderer = new THREE.WebGLRenderer({ alpha: true });
document.getElementById("three").appendChild(renderer.domElement);

//render size
renderer.setSize(window.innerWidth, window.innerHeight);
window.addEventListener("resize", function(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
})
renderer.setClearColor( 0xffffff, 0 );

//camera
camera.position.z = 2;

//light
const DirecLight = new THREE.DirectionalLight( 0xff0000, 2);
DirecLight.position.set(-1, 2, 4);
scene.add(DirecLight);


//Box
const geometry = new THREE.BoxGeometry(1, 1, 1); //width, height, depth
const material = new THREE.MeshPhongMaterial({color: 0x44aa88, opacity : 0.5, transparent : true, side : THREE.DoubleSide}); 
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


function render(){
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
requestAnimationFrame(render);


}


threeJs();