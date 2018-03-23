// texture

var manager = new THREE.LoadingManager();
manager.onProgress = function ( item, loaded, total ) {

    console.log( item, loaded, total );

};

// texture

var manager = new THREE.LoadingManager();
manager.onProgress = function ( item, loaded, total ) {

    console.log( item, loaded, total );

};

var textureLoader = new THREE.TextureLoader();
var map = textureLoader.load('../assets/red.png');
var material = new THREE.MeshPhongMaterial({map: map});


// model
var loader = new THREE.OBJLoader();
loader.load( '../assets/chairstlobj.obj', function ( object ) {
    
     object.traverse( function ( node ) {

        if ( node.isMesh ) node.material = material;

  } );
         

        object.traverse( function ( child ) {

        /*if ( child instanceof THREE.Mesh ) {

            //child.material.map = texture;

        }*/

    } );
    object.position.x = 0;
    object.position.y = 0;
    object.position.z = 0;    
    object.scale.x = .01;
    object.scale.y = .01;
    object.scale.z = .01;
    scene.add( object );
    objects.push(object);

} );  



var loader = new THREE.STLLoader();
loader.load( 'assets/chairstl.stl', function ( geometry ) {

    var material = new THREE.MeshStandardMaterial( { color: 'red' } );

    var mesh = new THREE.Mesh( geometry, material );
    
    var seat = mesh;
    
    seat.position.x = -10;
    seat.position.y = 0;
    seat.position.z = -50;    
    seat.scale.x = .025;
    seat.scale.y = .025;
    seat.scale.z = .025;
    
    console.log( mesh);

    scene.add( seat );
    objects.push(seat);

} );

/*
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath('../assets');
mtlLoader.load('male02_dds.mtl', function(materials) {
  materials.preload();
  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  loader.load( '../assets/chairstlobj.obj', function ( object )
    object.position.x = -10;
    object.position.y = 0;
    object.position.z = 0;    
    object.scale.x = .01;
    object.scale.y = .01;
    object.scale.z = .01;
    scene.add(object);
  }, onProgress, onError);
});*/