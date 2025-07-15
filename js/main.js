			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			 renderer.setClearColor(0x51D1F6);
			document.body.appendChild( renderer.domElement );
		/*
		////Skybox
                scene.background = new THREE.CubeTextureLoader()
                .setPath( 'texturas/skybox/' )
                .load( [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ] );*/


		//////////////////////////////////////////
	//	var jugador1=new Jugador();
		var entorno1=new Entorno();
		entorno1.contenedor.position.y=-8;

		var Skeleton1=new Skeleton();
		var Dragon1=new Dragon();
		Dragon1.contenedor.position.x=-20;
		Dragon1.contenedor.position.y=20;
		Dragon1.contenedor.position.z=-20;
		var Dog1=new Dog();
		Dog1.contenedor.position.x=20;
		Dog1.contenedor.position.y=-3;

		//Controls
		//controls = new THREE.DeviceOrientationControls( camera );
		controls = new THREE.OrbitControls( camera );

		//jugador1.contenedor.position.y=-20
		//var enemigos=[];




		//////////////////////////////////////////////////


		//var reglas1=new Reglas()
		//var cont=new Controles();
	///////////////////////////////////

	camera.position.z = 40;

		var render = function ()
		{
			requestAnimationFrame( render );



			Skeleton1.actualizar();
			Dragon1.actualizar();
			Dog1.actualizar();


			//reglas1.actualizar();
			//jugador1.actualizar()
			//cont.actualizar();
			//effect.render( scene, camera );
			renderer.render( scene, camera );
		};

		render();
