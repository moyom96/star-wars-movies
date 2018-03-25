// roof
class ProjectionRoom{

	constructor(width, height, depth, x, y, z, door, objects){
		
		//lights
		var room_light1;
		var room_light2;
		var pointLightHelper1;
		var pointLightHelper2;
		var lights_num = width / 20;
		this.lights_array = [];
		this.seats_array = [];

		//roof
		var geometry = new THREE.PlaneBufferGeometry( depth, width );
		var material = new THREE.MeshStandardMaterial( { side: THREE.DoubleSide} );
		var roof = new THREE.Mesh( geometry, material );
		roof.position.set(x, height + y, z);
		roof.rotation.x = Math.PI / 2;
		roof.castShadow = true;
		scene.add(roof);

		//wall material
		var material = new THREE.MeshStandardMaterial( { side: THREE.DoubleSide, shadowSide: THREE.DoubleSide} );

		//walls. Width: 1.5. Height: 2
		var geometry1 = new THREE.PlaneGeometry( (depth / 2) - 20, height );
		var geometry2 = new THREE.PlaneGeometry( 40, height - 40 );

		// Front wall
		if(door == "F"){
			this.frontWall1 = new THREE.Mesh( geometry1, material );
			this.frontWall2 = new THREE.Mesh( geometry1, material );
			this.frontWall3 = new THREE.Mesh( geometry2, material );
			this.frontWall1.position.set(x - (depth / 4) - 10, height / 2, z - (width / 2));
			this.frontWall2.position.set(x + (depth / 4) + 10, height / 2, z - (width / 2));
			this.frontWall3.position.set(x, (height / 2) + 20, z - (width / 2));
			scene.add(this.frontWall1);
			scene.add(this.frontWall2);
			scene.add(this.frontWall3);
			objects.push(this.frontWall1);
			objects.push(this.frontWall2);
			objects.push(this.frontWall3);

			// Seats
			for(var i = 80; i <= (width - 50); i += 50){
				for (var j = 50; j <= (depth - 40); j += 15){
					var seat = new Seat(x - (depth / 2) + j, y, z - (width / 2) + i, door);
					this.seats_array.push(seat);
				}
			}

		} else {
			var geometry = new THREE.PlaneGeometry( depth, height );
			this.frontWall = new THREE.Mesh( geometry, material );
			this.frontWall.position.set(x, height / 2, z - (width / 2));
			scene.add(this.frontWall);
			objects.push(this.frontWall);

		}

		// Back wall
		if(door == "B"){
			this.backWall1 = new THREE.Mesh( geometry1, material );
			this.backWall2 = new THREE.Mesh( geometry1, material );
			this.backWall3 = new THREE.Mesh( geometry2, material );
			this.backWall1.position.set(x - (depth / 4) - 10, height / 2, z + (width / 2));
			this.backWall2.position.set(x + (depth / 4) + 10, height / 2, z + (width / 2));
			this.backWall3.position.set(x, (height / 2) + 20, z + (width / 2));
			scene.add(this.backWall1);
			scene.add(this.backWall2);
			scene.add(this.backWall3);
			objects.push(this.backWall1);
			objects.push(this.backWall2);
			objects.push(this.backWall3);

			// Seats
			for(var i = 80; i <= (width - 50); i += 50){
				for (var j = 40; j <= (depth - 50); j += 15){
					var seat = new Seat(x - (depth / 2) + j, y, z - (width / 2) + i, door);
					this.seats_array.push(seat);
				}
			}

		} else {
			var geometry = new THREE.PlaneGeometry( depth, height );
			this.backWall = new THREE.Mesh( geometry, material );
			this.backWall.position.set(x, height / 2, z + (width / 2));
			scene.add(this.backWall);
			objects.push(this.backWall);
		}

		// Right wall
		var geometry = new THREE.BoxGeometry( width, height, 0 );
		this.rightWall = new THREE.Mesh( geometry, material );
		this.rightWall.position.set(x + (depth / 2), height / 2, z);
		this.rightWall.rotation.y = Math.PI / 2;
		this.rightWall.castShadow = true; //default is false
		this.rightWall.receiveShadow = true; //default
		scene.add(this.rightWall);
		objects.push(this.rightWall);

		// Left wall
		var geometry = new THREE.PlaneGeometry( width, height );
		this.leftWall = new THREE.Mesh( geometry, material );
		this.leftWall.position.set(x - (depth / 2), height / 2, z);
		this.leftWall.rotation.y = Math.PI / 2;
		this.leftWall.castShadow = true; //default is false
		this.leftWall.receiveShadow = true; //default
		scene.add(this.leftWall);
		objects.push(this.leftWall);


		// Lights
		room_light1 = new THREE.PointLight( 0xfff0db, 1, width);
		room_light1.position.set(x, height / 2, z + (width / 4));
		room_light1.castShadow = true;

		room_light2 = new THREE.PointLight( 0xfff0db, 1, width);
		room_light2.position.set(x, height / 2, z - (width / 4));
		room_light2.castShadow = true;


		pointLightHelper1 = new THREE.PointLightHelper( room_light1, 2 );
		scene.add( pointLightHelper1 );

		pointLightHelper2 = new THREE.PointLightHelper( room_light2, 2 );
		scene.add( pointLightHelper2 );

		scene.add( room_light1 );
		scene.add( room_light2 );

		/*
		for(var i = 10; i <= width; i += 90) {
			light1 = new THREE.PointLight( 0xfff0db, 1, width / 2);
			light1.position.set(x + (depth / 2) - 2, height / 2, i + z - (width /2));
			light1.castShadow = true;
			//light1.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera());

			light2 = new THREE.PointLight( 0xfff0db, 1, width / 2 );
			light2.position.set(x - (depth / 2) + 2 , height / 2, i + z- (width /2));
			light2.castShadow = true;
			//light2.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera());

			var sphereSize = 2;
			var pointLightHelper = new THREE.PointLightHelper( light1, sphereSize );
			scene.add( pointLightHelper );

			pointLightHelper = new THREE.PointLightHelper( light2, sphereSize );
			scene.add( pointLightHelper );

			scene.add( light1 );
			scene.add( light2 );

			this.lights_array.push(light1);
			this.lights_array.push(light2);
		}
		*/
	}

}