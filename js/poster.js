var geometry = new THREE.PlaneBufferGeometry();
var material = new THREE.MeshStandardMaterial( { side: THREE.DoubleSide, color: 0x330000});

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

class PosterSection {
	constructor( width, height, depth, x, y, z, name){
		this.width = width;
		this.height = height;
		this.depth = depth;
		this.x = x;
		this.y = y;
		this.z = z;
		this.name = name;

	/*	var gp1 = new THREE.BoxGeometry(width, height, depth);
		var material = new THREE.MeshStandardMaterial();
		var cube = new THREE.Mesh( gp1, material );
		cube.position.set(x, y,z);
		scene.add(cube);
*/
	}
	hasInside(positionVector){
		return (positionVector.x >= (this.x - this.width/2) && positionVector.x <= (this.x + this.width/2)
			&& positionVector.z >= (this.z - this.depth/2) && positionVector.z <= (this.z + this.depth/2))
	}

}

class InfoPoster {
	constructor(width, height, x, y, z, name, side, file){
		this.name = name;

		var geometry = new THREE.PlaneGeometry(width, height);
    var	texture = new THREE.TextureLoader().load(file);
    var material = new THREE.MeshStandardMaterial({ map: texture});
    var info = new THREE.Mesh(geometry, material);
		if (side == "L") {
        info.rotation.y = Math.PI / 2;
    } else {
        info.rotation.y = - Math.PI / 2;
    }
		info.position.set(x,y,z);
		var group = new THREE.Group();
		group.add(info);
		group.visible = false;
		posterInfos.push(group);
		scene.add(group);
	}
}
