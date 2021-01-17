# Smoke

먹구름 형태의 그래픽을 제작했습니다.   

연기 png 파일을 가져와 plane에 맵핑 시킨 후 반복문을 이용하여   
무작위로 배치하였습니다. rotation 값을 조절하여 회전시켰습니다.   

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
    .
    .
    .
    cloudParticles.forEach(p => {
        p.rotation.z -=0.001;
     });


이 그래픽은 https://www.youtube.com/watch?v=5f5wwQb22tE 에서 참조하였습니다.