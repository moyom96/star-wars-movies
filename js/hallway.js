
class Hallway{

	constructor(width, height, depth, x, y, z, objects){

		var room_light1, room_light2, room_light3, pointLightHelper1, pointLightHelper2, pointLightHelper3;

		// floor

		var	floorTexture = new THREE.TextureLoader().load("textures/carpet.jpg", function( texture ){
        texture.wrapT = texture.wrapS = THREE.RepeatWrapping;
        texture.offset.set( 0, 0 );
        texture.repeat.set( depth/5, width/10);
    });

		var geometry = new THREE.PlaneGeometry( depth, width );
		var material = new THREE.MeshStandardMaterial( { side: THREE.DoubleSide, map: floorTexture} );
		var floor = new THREE.Mesh( geometry, material );
		floor.position.set(x, y, z);
		floor.rotation.x = Math.PI / 2;
		scene.add(floor);

		//roof
		var geometry = new THREE.PlaneGeometry( depth, width );
		var material = new THREE.MeshStandardMaterial( { side: THREE.DoubleSide, color: 0x000000} );
		var roof = new THREE.Mesh( geometry, material );
		roof.position.set(x, height + y, z);
		roof.rotation.x = Math.PI / 2;
		scene.add(roof);

		//walls

		var	wallTexture = new THREE.TextureLoader().load("textures/wall1.jpg");

		var geometry = new THREE.PlaneGeometry( depth, height );
		var material = new THREE.MeshStandardMaterial( { side: THREE.DoubleSide, color: 0x000000} );
		var frontWall = new THREE.Mesh( geometry, material );
		frontWall.position.set(x, y + (height / 2), z - (width / 2));
		scene.add(frontWall);

 		// Geometry and material for walls
		var wallSize = (width - 50) / 3;
		var geometry = new THREE.PlaneGeometry( wallSize, height );
		var material = new THREE.MeshStandardMaterial( { side: THREE.DoubleSide, map: wallTexture} );

		var rightWall1 = new THREE.Mesh( geometry, material );
		rightWall1.position.set(x + (depth / 2), y + (height / 2), z + wallSize + 25); // First
		rightWall1.rotation.y = Math.PI / 2;
		scene.add(rightWall1);
		objects.push(rightWall1);


		var rightWall2 = new THREE.Mesh( geometry, material );
		rightWall2.position.set(x + (depth / 2), y + (height / 2), z ); // Middle
		rightWall2.rotation.y = Math.PI / 2;
		scene.add(rightWall2);
		objects.push(rightWall2);

		var rightWall3 = new THREE.Mesh( geometry, material );
		rightWall3.position.set(x + (depth / 2), y + (height / 2), z - wallSize - 25 ); // Last
		rightWall3.rotation.y = Math.PI / 2;
		scene.add(rightWall3);
		objects.push(rightWall3);

		var geometry = new THREE.PlaneGeometry( wallSize, height );
		var material = new THREE.MeshStandardMaterial( { side: THREE.DoubleSide, map: wallTexture} );
		var leftWall1 = new THREE.Mesh( geometry, material );
		leftWall1.position.set(x - (depth / 2), y + (height / 2), z + wallSize + 25); // First
		leftWall1.rotation.y = Math.PI / 2;
		scene.add(leftWall1);
		objects.push(leftWall1);

		var leftWall2 = new THREE.Mesh( geometry, material );
		leftWall2.position.set(x - (depth / 2), y + (height / 2), z - wallSize - 25); // Last
		leftWall2.rotation.y = Math.PI / 2;
		scene.add(leftWall2);
		objects.push(leftWall2);

		var leftWall2 = new THREE.Mesh( geometry, material );
		leftWall2.position.set(x - (depth / 2), y + (height / 2), z); // Middle
		leftWall2.rotation.y = Math.PI / 2;
		scene.add(leftWall2);
		objects.push(leftWall2);

		// down walls 15 cm
		var geometry = new THREE.PlaneGeometry(wallSize, 1.5);
		var material = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, color: 0x611400});

		var downWallR1 = new THREE.Mesh(geometry, material);
		downWallR1.position.set(x + (depth / 2) - 0.1, y + (1.5/2), z + wallSize + 25); // First
		downWallR1.rotation.y = Math.PI / 2;
		scene.add(downWallR1);
		objects.push(downWallR1);

		var downWallR2 = new THREE.Mesh(geometry, material);
		downWallR2.position.set(x + (depth / 2) - 0.1, y + (1.5/2), z ); // Middle
		downWallR2.rotation.y = Math.PI / 2;
		scene.add(downWallR2);
		objects.push(downWallR2);

		var downWallR3 = new THREE.Mesh( geometry, material );
		downWallR3.position.set(x + (depth / 2) - 0.1, y + (1.5/2), z - wallSize - 25 ); // Last
		downWallR3.rotation.y = Math.PI / 2;
		scene.add(downWallR3);
		objects.push(downWallR3);

		var downWallL1 = new THREE.Mesh(geometry, material);
		downWallL1.position.set(x - (depth / 2) + 0.1, y + (1.5/2), z + wallSize + 25); // First
		downWallL1.rotation.y = Math.PI / 2;
		scene.add(downWallL1);
		objects.push(downWallL1);

		var downWallL2 = new THREE.Mesh(geometry, material);
		downWallL2.position.set(x - (depth / 2) + 0.1, y + (1.5/2) , z ); // Middle
		downWallL2.rotation.y = Math.PI / 2;
		scene.add(downWallL2);
		objects.push(downWallL2);

		var downWallL3 = new THREE.Mesh( geometry, material );
		downWallL3.position.set(x - (depth / 2) + 0.1, y + (1.5/2), z - wallSize - 25 ); // Last
		downWallL3.rotation.y = Math.PI / 2;
		scene.add(downWallL3);
		objects.push(downWallL3);

		// Lights
		room_light1 = new THREE.PointLight( 0xfff0db, 1, 100);
		room_light1.position.set(x, y + height, z + wallSize);
		room_light1.castShadow = true;

		room_light2 = new THREE.PointLight( 0xfff0db, 1, 100);
		room_light2.position.set(x, y + height, z - wallSize);
		room_light2.castShadow = true;

		room_light3= new THREE.PointLight( 0xfff0db, 1, 100);
		room_light3.position.set(x, y + height, z);
		room_light3.castShadow = true;

		pointLightHelper1 = new THREE.PointLightHelper( room_light1, 2 );
		scene.add( pointLightHelper1 );

		pointLightHelper2 = new THREE.PointLightHelper( room_light2, 2 );
		scene.add( pointLightHelper2 );

		pointLightHelper3 = new THREE.PointLightHelper( room_light3, 2 );
		scene.add( pointLightHelper3 );

		scene.add( room_light1 );
		scene.add( room_light2 );
		scene.add( room_light3 );

		// Posters
		var p1 = new Poster(6.6, 10, x + (depth / 2) - 0.1 , y + height / 2, ( z + wallSize + 25) - wallSize/4, objects, "textures/sw1.jpg", "R");
		var p2 = new Poster(6.6, 10, x + (depth / 2) - 0.1 , y + height / 2, ( z + wallSize + 25) + wallSize/4, objects, "textures/sw2.jpg", "R");


		var p3 = new Poster(6.6, 10, x + (depth / 2) - 0.1 , y + height / 2, z - wallSize/4, objects, "textures/sw5.jpg", "R");
		var p4 = new Poster(6.6, 10, x + (depth / 2) - 0.1 , y + height / 2, z + wallSize/4, objects, "textures/sw6.jpg", "R");


		var p5 = new Poster(6.6, 10, x + (depth / 2) - 0.1 , y + height / 2, ( z - wallSize - 25) + wallSize/4, objects, "textures/ro.png", "R");
		var p6 = new Poster(6.6, 10, x - (depth / 2) + 0.1 , y + height / 2, ( z - wallSize - 25) + wallSize/4, objects, "textures/cw.jpg", "L");


		var p7 = new Poster(6.6, 10, x - (depth / 2) + 0.1 , y + height / 2, ( z + wallSize + 25) + wallSize/4, objects, "textures/sw3.jpg", "L");
		var p8 = new Poster(6.6, 10, x - (depth / 2) + 0.1 , y + height / 2, ( z + wallSize + 25) - wallSize/4, objects, "textures/sw4.jpg", "L");


		var p9 = new Poster(6.6, 10, x - (depth / 2) + 0.1 , y + height / 2, z + wallSize/4, objects, "textures/sw7.jpg", "L");
		var p10 = new Poster(6.6, 10, x - (depth / 2) + 0.1 , y + height / 2, z - wallSize/4, objects, "textures/sw8.jpg", "L");


		objects.push(frontWall);
	}

}
