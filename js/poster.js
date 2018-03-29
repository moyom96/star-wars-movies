class Poster{

	constructor( width, height, x, y, z, objects, file, side){

    var rectLight = new THREE.RectAreaLight( 0xffffff, 10, width+0.5, height+0.5 );
		rectLight.position.set( x,y,z );
		scene.add( rectLight );
    if (side == "R") {
        rectLight.rotation.y = Math.PI / 2;
    } else {
        rectLight.rotation.y = - Math.PI / 2;
    }


    var geometry = new THREE.PlaneBufferGeometry();
    var material = new THREE.MeshStandardMaterial( { side: THREE.DoubleSide, color: 0x330000});
    var poster = new THREE.Mesh(geometry, material);

		poster.scale.x = rectLight.width - 0.1;
	  poster.scale.y = rectLight.height - 0.1;
		rectLight.add(poster);

    objects.push(poster);

    var imageGeometry = new THREE.PlaneGeometry(width, height);
    var	texture = new THREE.TextureLoader().load(file);
    var material = new THREE.MeshBasicMaterial( { map: texture});
    var image = new THREE.Mesh(imageGeometry, material);
    if(side == "R") {
      image.rotation.y = -Math.PI / 2;
      image.position.set(x-0.1,y,z);
    } else {
      image.rotation.y = Math.PI / 2;
      image.position.set(x+0.1,y,z);
    }

    scene.add(image);

    objects.push(image);
  }
}
