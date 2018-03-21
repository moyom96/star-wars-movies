// roof
class ProjectionRoom{

	constructor(width, height, depth, x, y, z, objects){
		
		//roof
		var geometry = new THREE.PlaneGeometry( depth, width );
		var material = new THREE.MeshStandardMaterial( { side: THREE.DoubleSide} );
		var roof = new THREE.Mesh( geometry, material );
		roof.position.set(x, height + y, z);
		roof.rotation.x = Math.PI / 2;
		scene.add(roof);

		//walls
		var geometry = new THREE.PlaneGeometry( depth, height );
		var material = new THREE.MeshStandardMaterial( { side: THREE.DoubleSide} );
		var frontWall = new THREE.Mesh( geometry, material );
		frontWall.position.set(x, height / 2, z - (width / 2));
		scene.add(frontWall);

		var geometry = new THREE.PlaneGeometry( depth, height );
		var material = new THREE.MeshStandardMaterial( { side: THREE.DoubleSide} );
		var backWall = new THREE.Mesh( geometry, material );
		backWall.position.set(x, height / 2, z + (width / 2));
		scene.add(backWall);

		var geometry = new THREE.PlaneGeometry( width, height );
		var material = new THREE.MeshStandardMaterial( { side: THREE.DoubleSide} );
		var rightWall = new THREE.Mesh( geometry, material );
		rightWall.position.set(x + (depth / 2), height / 2, z);
		rightWall.rotation.y = Math.PI / 2;
		scene.add(rightWall);

		var geometry = new THREE.PlaneGeometry( width, height );
		var material = new THREE.MeshStandardMaterial( { side: THREE.DoubleSide} );
		var leftWall = new THREE.Mesh( geometry, material );
		leftWall.position.set(x - (depth / 2), height / 2, z);
		leftWall.rotation.y = Math.PI / 2;
		scene.add(leftWall);

		objects.push(frontWall);
		objects.push(backWall);
		objects.push(rightWall);
		objects.push(leftWall);
	}

}