# 3D Text

text를 3D 형태로 가져옵니다.
json 파일이 있어야 가져올 수 있습니다.

    var loader = new THREE.FontLoader();
    loader.load( './Lato Hairline_Regular.json', function ( font ) {
        var geometry = new THREE.TextGeometry( 'Song Jae Hyeok', {
            font: font,
            size: 50,
            curveSegments: 12
        } );

        const mat = new THREE.MeshBasicMaterial({color : 0xf0f8ff});
        const txt = new THREE.Mesh(geometry, mat);
        scene.add(txt);
    } );
