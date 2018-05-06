
class Hallway{

	constructor(width, height, depth, x, y, z, objects, posters){

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

		var	wallTexture = new THREE.TextureLoader().load("textures/wall2.jpg");

		var geometry = new THREE.PlaneGeometry( depth, height );
		var material = new THREE.MeshStandardMaterial( { side: THREE.DoubleSide, color: 0x000000} );
		var frontWall = new THREE.Mesh( geometry, material );
		frontWall.position.set(x, y + (height / 2), z - (width / 2));
		scene.add(frontWall);

		objects.push(frontWall);

 		// Geometry and material for walls
		var wallSize = (width - 40) / 3;
		var geometry = new THREE.PlaneGeometry( wallSize, height );
		var material = new THREE.MeshStandardMaterial( { side: THREE.DoubleSide, map: wallTexture} );

		var rightWall1 = new THREE.Mesh( geometry, material );
		rightWall1.position.set(x + (depth / 2), y + (height / 2), z + wallSize + 25); // First
		rightWall1.rotation.y = -Math.PI / 2;
		scene.add(rightWall1);
		objects.push(rightWall1);

		// Leaving an space for the door of 2

		var rightWall2 = new THREE.Mesh( geometry, material );
		rightWall2.position.set(x + (depth / 2), y + (height / 2), z ); // Middle
		rightWall2.rotation.y = -Math.PI / 2;
		scene.add(rightWall2);
		objects.push(rightWall2);

		var rightWall3 = new THREE.Mesh( geometry, material );
		rightWall3.position.set(x + (depth / 2), y + (height / 2), z - wallSize - 25 ); // Last
		rightWall3.rotation.y = -Math.PI / 2;
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

		// Posters. The poster will be located at 1.50 mts from the ground
		// Segundo derecha SW2
		var p1 = new Poster(6.6, 10, x + (depth / 2) - 0.1 , y + 15, ( z + wallSize + 25) - wallSize/4, objects, "textures/sw2.jpg", "R");
		var posterSection1 = new PosterSection(15,25,34,(depth / 2) - 5, y + 12, z + (wallSize + 25) - (wallSize/4), "p1");
		var pInfo1 = new InfoPoster(10, 15, x + (depth / 2) - 1, y + 15, ( z + wallSize + 25) - wallSize/4, "p1", "R", "textures/infoSW2.png");

		// Primero derecha SW1
		var p2 = new Poster(6.6, 10, x + (depth / 2) - 0.1 , y + 15, ( z + wallSize + 25) + wallSize/4, objects, "textures/sw1.jpg", "R");
		var posterSection2 = new PosterSection(15,25,34,(depth / 2) - 5, y + 12, ( z + wallSize + 25) + wallSize/4, "p2");
		var pInfo2 = new InfoPoster(10, 15, x + (depth / 2) - 1, y + 15, ( z + wallSize + 25) + wallSize/4, "p2", "R", "textures/infoSW1.png");

		// Tercero derecha
		var p3 = new Poster(6.6, 10, x + (depth / 2) - 0.1 , y + 15, z - wallSize/4, objects, "textures/sw5.jpg", "R");
		var posterSection3 = new PosterSection(15,25,34,(depth / 2) - 5 , y + 12, z - wallSize/4,"p3");
		var pInfo3 = new InfoPoster(10, 15, x + (depth / 2) - 1, y + 15, z - wallSize/4, "p2", "R", "textures/infoSW5.png");

		// Cuarto derecha
		var p4 = new Poster(6.6, 10, x + (depth / 2) - 0.1 , y + 15, z + wallSize/4, objects, "textures/sw6.jpg", "R");
		var posterSection4 = new PosterSection(15,25,34,x + (depth / 2) - 5 , y + 12, z + wallSize/4, "p4");
		var pInfo4 = new InfoPoster(10, 15, x + (depth / 2) - 1, y + 15, z + wallSize/4, "p2", "R", "textures/infoSW6.png");

		// Quinto derecha
		var p5 = new Poster(6.6, 10, x + (depth / 2) - 0.1 , y + 15, ( z - wallSize - 25) + wallSize/4, objects, "textures/ro.png", "R");
		var posterSection5 = new PosterSection(15,25,34,(depth / 2) - 5 , y + 12, ( z - wallSize - 25) + wallSize/4, "p5");
		var pInfo5 = new InfoPoster(10, 15, x + (depth / 2) - 1, y + 15,( z - wallSize - 25) + wallSize/4, "p2", "R", "textures/infoRO.png");

		// Quinto izquierda
		var p6 = new Poster(6.6, 10, x - (depth / 2) + 0.1 , y + 15, ( z - wallSize - 25) + wallSize/4, objects, "textures/solo.jpg", "L");
		var posterSection6 = new PosterSection(15,25,34,x - (depth / 2) + 5 , y + 12, ( z - wallSize - 25) + wallSize/4, "p6");
		var pInfo6 = new InfoPoster(10, 15,  x - (depth / 2) + 1, y + 15,( z - wallSize - 25) + wallSize/4, "p2", "L", "textures/infoSOLO.png");

		// Primero izquierda
		var p7 = new Poster(6.6, 10, x - (depth / 2) + 0.1 , y + 15, ( z + wallSize + 25) + wallSize/4, objects, "textures/sw3.jpg", "L");
		var posterSection7 = new PosterSection(15,25,34,x - (depth / 2) + 5 , y + 12, ( z + wallSize + 25) + wallSize/4, "p7");
		var pInfo7 = new InfoPoster(10, 15,  x - (depth / 2) + 1, y + 15,( z + wallSize + 25) + wallSize/4, "p2", "L", "textures/infoSW3.png");

		// Segundo izquierda
		var p8 = new Poster(6.6, 10, x - (depth / 2) + 0.1 , y + 15, ( z + wallSize + 25) - wallSize/4, objects, "textures/sw4.jpg", "L");
		var posterSection8 = new PosterSection(15,25,34,x - (depth / 2) + 5 , y + 12, ( z + wallSize + 25) - wallSize/4, "p8");
		var pInfo8 = new InfoPoster(10, 15,  x - (depth / 2) + 1, y + 15,( z + wallSize + 25) - wallSize/4, "p2", "L", "textures/infoSW4.png");

		// Tercer izquierda
		var p9 = new Poster(6.6, 10, x - (depth / 2) + 0.1 , y + 15, z + wallSize/4, objects, "textures/sw7.jpg", "L");
		var posterSection9 = new PosterSection(15,25,34,x - (depth / 2) + 5 , y + 12, z + wallSize/4, "p9");
		var pInfo9 = new InfoPoster(10, 15,  x - (depth / 2) + 1, y + 15, z + wallSize/4, "p2", "L", "textures/infoSW7.png");

		// Cuarto izquierda
		var p10 = new Poster(6.6, 10, x - (depth / 2) + 0.1 , y + 15, z - wallSize/4, objects, "textures/sw8.jpg", "L");
		var posterSection10 = new PosterSection(15,25,34,x - (depth / 2) + 5 , y + 12, z - wallSize/4, "p10");
		var pInfo10 = new InfoPoster(10, 15,  x - (depth / 2) + 1, y + 15, z - wallSize/4, "p2", "L", "textures/infoSW8.png");

		posters.push(posterSection1);
		posters.push(posterSection2);
		posters.push(posterSection3);
		posters.push(posterSection4);
		posters.push(posterSection5);
		posters.push(posterSection6);
		posters.push(posterSection7);
		posters.push(posterSection8);
		posters.push(posterSection9);
		posters.push(posterSection10);

	}

}
