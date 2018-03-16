
function init_movement(){
	controls = new THREE.PointerLockControls( camera );
	scene.add( controls.getObject() );

	var onKeyDown = function ( event ) {
		switch ( event.keyCode ) {

			case 38: // up
			case 87: // w
				moveForward = true;
				break;

			case 37: // left
			case 65: // a
				moveLeft = true; 
				break;

			case 40: // down
			case 83: // s
				moveBackward = true;
				break;

			case 39: // right
			case 68: // d
				moveRight = true;
				break;

			case 32: // space
				if ( canJump === true ) velocity.y += 350;
				canJump = false;
				break;

		}

	};

	var onKeyUp = function ( event ) {

		switch( event.keyCode ) {

			case 38: // up
			case 87: // w
				moveForward = false;
				break;

			case 37: // left
			case 65: // a
				moveLeft = false;
				break;

			case 40: // down
			case 83: // s
				moveBackward = false;
				break;

			case 39: // right
			case 68: // d
				moveRight = false;
				break;
		}

	};

	document.addEventListener( 'keydown', onKeyDown, false );
	document.addEventListener( 'keyup', onKeyUp, false );
}

function collisions(velocity, direction){

	raycaster_north = new THREE.Raycaster( new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z), new THREE.Vector3( 0, 0, 1 ), 0, 10 );

	raycaster_north.ray.origin.copy( controls.getObject().position );
	raycaster_north.ray.origin.x += 10;

	raycaster_south = new THREE.Raycaster( new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z), new THREE.Vector3( 0, 0, -1 ), 0, 10 );

	raycaster_south.ray.origin.copy( controls.getObject().position );
	raycaster_south.ray.origin.x -= 10;

	raycaster_east = new THREE.Raycaster( new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z), new THREE.Vector3( 1, 0, 0 ), 0, 10 );

	raycaster_east.ray.origin.copy( controls.getObject().position );
	raycaster_east.ray.origin.z += 10;

	raycaster_west = new THREE.Raycaster( new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z), new THREE.Vector3( -1, 0, 0 ), 0, 10 );

	raycaster_west.ray.origin.copy( controls.getObject().position );
	raycaster_west.ray.origin.z -= 10;

	raycaster_y = new THREE.Raycaster( new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z), new THREE.Vector3( 0, - 1, 0 ), 0, 10 );

	raycaster_y.ray.origin.copy( controls.getObject().position );
	raycaster_y.ray.origin.y -= 10;


	var intersections_y = raycaster_y.intersectObjects( objects );
	var intersections_north = raycaster_north.intersectObjects( objects );
	var intersections_south = raycaster_south.intersectObjects( objects );
	var intersections_east = raycaster_east.intersectObjects( objects );
	var intersections_west = raycaster_west.intersectObjects( objects );

	onObject = intersections_y.length > 0;
	collision_north = intersections_north.length > 0;
	collision_south = intersections_south.length > 0;
	collision_east = intersections_east.length > 0;
	collision_west = intersections_west.length > 0;

	var time = performance.now();
	var delta = ( time - prevTime ) / 1000;

	velocity.x -= velocity.x * 10.0 * delta;
	velocity.z -= velocity.z * 10.0 * delta;

	velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

	direction.z = Number( moveForward ) - Number( moveBackward );
	direction.x = Number( moveLeft ) - Number( moveRight );
	direction.normalize(); // this ensures consistent movements in all directions

	if ( moveForward || moveBackward ) velocity.z -= direction.z * 400.0 * delta;
	if ( moveLeft || moveRight ) velocity.x -= direction.x * 400.0 * delta;

	if ( onObject === true ) {
		velocity.y = Math.max( 0, velocity.y );
		canJump = true;
	}

	if ( collision_north === true ) {
		if (camera.getWorldDirection(worldDirection).x >= 0){
			if(direction.x == -1){
				velocity.x = 0;
			}
			
		} 

		if (camera.getWorldDirection(worldDirection).x < 0){
			if(direction.x == 1){
				velocity.x = 0;
			}
		}
			
		if (camera.getWorldDirection(worldDirection).z >= 0){
			if(direction.z == 1){
				velocity.z = 0;
			}
			
		}

		if (camera.getWorldDirection(worldDirection).z < 0){
			if(direction.z == -1){
				velocity.z = 0;
			}
			
		}
	}

	if ( collision_south === true ) {
		if (camera.getWorldDirection(worldDirection).x >= 0){
			if(direction.x == 1){
				velocity.x = 0;
			}
			
		} 

		if (camera.getWorldDirection(worldDirection).x < 0){
			if(direction.x == -1){
				velocity.x = 0;
			}
		}
			
		if (camera.getWorldDirection(worldDirection).z >= 0){
			if(direction.z == -1){
				velocity.z = 0;
			}
			
		}

		if (camera.getWorldDirection(worldDirection).z < 0){
			if(direction.z == 1){
				velocity.z = 0;
			}
			
		}
	}

	if ( collision_east === true ) {
		if (camera.getWorldDirection(worldDirection).x >= 0){
			if(direction.z == 1){
				velocity.z = 0;
			}
			
		} 

		if (camera.getWorldDirection(worldDirection).x < 0){
			if(direction.z == -1){
				velocity.z = 0;
			}
		}
			
		if (camera.getWorldDirection(worldDirection).z >= 0){
			if(direction.x == 1){
				velocity.x = 0;
			}
			
		}

		if (camera.getWorldDirection(worldDirection).z < 0){
			if(direction.x == -1){
				velocity.x = 0;
			}
			
		}
	}

	if ( collision_west === true ) {
		if (camera.getWorldDirection(worldDirection).x >= 0){
			if(direction.z == -1){
				velocity.z = 0;
			}
			
		} 

		if (camera.getWorldDirection(worldDirection).x < 0){
			if(direction.z == 1){
				velocity.z = 0;
			}
		}
			
		if (camera.getWorldDirection(worldDirection).z >= 0) {
			if(direction.x == -1){
				velocity.x = 0;
			}
			
		}

		if (camera.getWorldDirection(worldDirection).z < 0){
			if(direction.x == 1){
				velocity.x = 0;
			}
			
		}
	}

	controls.getObject().translateX( velocity.x * delta );
	controls.getObject().translateY( velocity.y * delta );
	controls.getObject().translateZ( velocity.z * delta );

	if ( controls.getObject().position.y < 10 ) {
		velocity.y = 0;
		controls.getObject().position.y = 10;
		canJump = true;
	}

	if ( controlsEnabled === true ) {
		prevTime = time;
	}
}