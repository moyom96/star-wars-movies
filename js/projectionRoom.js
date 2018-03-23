// roof
class ProjectionRoom{

	constructor(width, height, depth, x, y, z, door, objects){
		
		var light1;
		var light2;

		//roof
		var geometry = new THREE.PlaneGeometry( depth, width );
		var material = new THREE.MeshStandardMaterial( { side: THREE.DoubleSide} );
		var roof = new THREE.Mesh( geometry, material );
		roof.position.set(x, height + y, z);
		roof.rotation.x = Math.PI / 2;
		scene.add(roof);

		//wall material
		var material = new THREE.MeshStandardMaterial( { side: THREE.DoubleSide} );

		//walls. Width: 1.5. Height: 2
		var geometry1 = new THREE.PlaneGeometry( (depth / 2) - 20, height );
		var geometry2 = new THREE.PlaneGeometry( 40, height - 40 );

		// Front wall
		if(door == "F"){
			var frontWall1 = new THREE.Mesh( geometry1, material );
			var frontWall2 = new THREE.Mesh( geometry1, material );
			var frontWall3 = new THREE.Mesh( geometry2, material );
			frontWall1.position.set(x - (depth / 4) - 10, height / 2, z - (width / 2));
			frontWall2.position.set(x + (depth / 4) + 10, height / 2, z - (width / 2));
			frontWall3.position.set(x, (height / 2) + 20, z - (width / 2));
			scene.add(frontWall1);
			scene.add(frontWall2);
			scene.add(frontWall3);
			objects.push(frontWall1);
			objects.push(frontWall2);
			objects.push(frontWall3);
		} else {
			var geometry = new THREE.PlaneGeometry( depth, height );
			var frontWall = new THREE.Mesh( geometry, material );
			frontWall.position.set(x, height / 2, z - (width / 2));
			scene.add(frontWall);
			objects.push(frontWall);
		}

		if(door == "B"){
			var backWall1 = new THREE.Mesh( geometry1, material );
			var backWall2 = new THREE.Mesh( geometry1, material );
			var backWall3 = new THREE.Mesh( geometry2, material );
			backWall1.position.set(x - (depth / 4) - 10, height / 2, z + (width / 2));
			backWall2.position.set(x + (depth / 4) + 10, height / 2, z + (width / 2));
			backWall3.position.set(x, (height / 2) + 20, z + (width / 2));
			scene.add(backWall1);
			scene.add(backWall2);
			scene.add(backWall3);
			objects.push(backWall1);
			objects.push(backWall2);
			objects.push(backWall3);
		} else {
			var geometry = new THREE.PlaneGeometry( depth, height );
			var backWall = new THREE.Mesh( geometry, material );
			backWall.position.set(x, height / 2, z + (width / 2));
			scene.add(backWall);
			objects.push(backWall);
		}

		var geometry = new THREE.PlaneGeometry( width, height );
		var rightWall = new THREE.Mesh( geometry, material );
		rightWall.position.set(x + (depth / 2), height / 2, z);
		rightWall.rotation.y = Math.PI / 2;
		scene.add(rightWall);
		objects.push(rightWall);

		var geometry = new THREE.PlaneGeometry( width, height );
		var leftWall = new THREE.Mesh( geometry, material );
		leftWall.position.set(x - (depth / 2), height / 2, z);
		leftWall.rotation.y = Math.PI / 2;
		scene.add(leftWall);
		objects.push(leftWall);

		//lights
		var lights_num = width / 20;
		var lights_right_array = [];
		var lights_left_array = [];


		for(var i = 10; i <= width; i += 90){
			light1 = new THREE.PointLight( 0xfff0db, 1.5, width / 2);
			light1.position.set(x + (depth / 2) - 2, height / 2, i + z - (width /2));
			lights_right_array.push(light1);

			light2 = new THREE.PointLight( 0xfff0db, 1.5, width / 2 );
			light2.position.set(x - (depth / 2) + 2 , height / 2, i + z- (width /2));
			lights_left_array.push(light2);

			scene.add( light1 );
			scene.add( light2 );
		}
	}

}