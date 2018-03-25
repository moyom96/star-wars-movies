// texture
class Seat {
    constructor(x, y, z, door){

        var loader = new THREE.STLLoader();
        loader.load( 'assets/chairstl.stl', function ( geometry ) {

            var material = new THREE.MeshStandardMaterial( { color: 'red' } );

            var seat = new THREE.Mesh( geometry, material );
            
            seat.position.x = x;
            seat.position.y = y;
            seat.position.z = z;    
            seat.scale.x = .025;
            seat.scale.y = .025;
            seat.scale.z = .025;
            
            if (door == "F"){
                seat.rotation.y = Math.PI;
            }

            scene.add( seat );
            objects.push(seat);

        } );
    }
}