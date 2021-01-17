# Key Control

키보드로 3D 오브젝트를 컨트롤하고자 제작하였습니다.   

W, A, S, D 로 상하좌우 움직일 수 있게 하였습니다.

keydown과 keyup으로 키보드를 인식하고 해당 이벤트가 실행될 때마다
변수의 true와 false 값을 조절합니다.
true일 경우 카메라와 오브젝트의 position 값을 변경하여 움직입니다.   

    function keyEvent(){
        let speed = 0.05;
        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("keyup", onKeyUp);
        function onKeyDown(event) {
            var keyCode = event.which;
            if (keyCode == 87) {
                w = true;
            } else if (keyCode == 83) {
                s = true;
            } else if (keyCode == 65) {
                a = true;
            } else if (keyCode == 68) {
                d = true;
            }
        };
        function onKeyUp(event) {
            var keyCode = event.which;
            if (keyCode == 87) {
                w = false;
            } else if (keyCode == 83) {
                s = false;
            } else if (keyCode == 65) {
                a = false;
            } else if (keyCode == 68) {
                d = false;
            }
        }; 
        if(w){
            cube.position.z -= speed;
            camera.position.z -=speed;
        }
        if(s){
            cube.position.z += speed;  
            camera.position.z +=speed; 
        }
        if(a){
            cube.position.x -= speed;  
            camera.position.x -=speed;
        }
        if(d){
            cube.position.x += speed;  
            camera.position.x +=speed;
        }
    };


## physi.js를 활용하면 중력, 충돌을 구현할 수 있습니다.