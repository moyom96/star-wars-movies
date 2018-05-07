// texture
var material = new THREE.MeshStandardMaterial( { color: 'red' } );

class Seat {
    constructor(x, y, z, door){

        var loader = new THREE.STLLoader();
        loader.load( 'assets/chairstl.stl', function ( geometry ) {


            var seat = new THREE.Mesh( geometry, material );

            seat.position.x = x;
            seat.position.y = y;
            seat.position.z = z;
            seat.scale.x = .017;
            seat.scale.y = .017;
            seat.scale.z = .017;

            if (door == "F"){
                seat.rotation.y = Math.PI/2;
            } else {
              seat.rotation.y = -Math.PI/2;
            }

            scene.add( seat );
            objects.push(seat);

        } );
    }
}
