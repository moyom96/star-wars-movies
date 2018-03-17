// creating a movie screen

class MovieScreen{
	constructor(path, x, y, z){
		// create the video element
		this.video = document.createElement( 'video' );
		// video.id = 'video';
		this.video.type = ' video/mp4; codecs="avc1.42E01E, mp4a.40.2" ';
		// this.video.type = ' video/ogg; codecs="theora, vorbis" ';
		this.video.src = path;
		this.video.load(); // must call after setting/changing source
		this.video.play();
		
		// alternative method -- 
		// create DIV in HTML:
		// <video id="myVideo" autoplay style="display:none">
		// 		<source src="videos/sintel.ogv" type='video/ogg; codecs="theora, vorbis"'>
		// </video>
		// and set JS variable:
		// video = document.getElementById( 'myVideo' );
		
		this.videoImage = document.createElement( 'canvas' );
		this.videoImage.width = 1280;
		this.videoImage.height = 720;
		this.videoImageContext = this.videoImage.getContext( '2d' );
		// background color if no video present
		this.videoImageContext.fillStyle = '#000000';
		this.videoImageContext.fillRect( 0, 0, this.videoImage.width, this.videoImage.height );
		this.videoTexture = new THREE.Texture( this.videoImage );
		this.videoTexture.minFilter = THREE.LinearFilter;
		this.videoTexture.magFilter = THREE.LinearFilter;
		//videoTexture.format = THREE.RGBFormat;
		
		this.movieMaterial = new THREE.MeshBasicMaterial( {
			map: this.videoTexture, overdraw: true, side:THREE.DoubleSide } );
		// the geometry on which the movie will be displayed;
		// 		movie image will be scaled to fit these dimensions.
		this.movieGeometry = new THREE.PlaneGeometry( 200, 84, 4, 4 );
		this.movieScreen = new THREE.Mesh( this.movieGeometry, this.movieMaterial );
		this.movieScreen.position.set(x,y,z);
		scene.add(this.movieScreen);
	}

	renderVideoScreen(){
		if ( this.video.readyState === this.video.HAVE_ENOUGH_DATA ) 
		{
			this.videoImageContext.drawImage( this.video, 0, 0 );
			if ( this.videoTexture ) 
				this.videoTexture.needsUpdate = true;
		}
	}
}