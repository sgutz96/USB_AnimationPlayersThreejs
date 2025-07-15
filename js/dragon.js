var Dragon = function()
{
	this.contenedor=new THREE.Object3D();

	//var loader = new THREE.TextureLoader();
	//var texture = loader.load("texturas/rock.jpg");


  //Materiales//Materiales//Materiales//Materiales//Materiales//Materiales//Materiales//Materiales//Materiales//Materiales//Materiales//Materiales
			var Piel_material = new THREE.MeshBasicMaterial( { color: 0x323232 } );
			var escama_material = new THREE.MeshBasicMaterial( { color: 0x620D46 } );

			///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT
			var Hit_contenedor= new THREE.Object3D();
			this.contenedor.add(Hit_contenedor);

			var Hit_geometry = new THREE.BoxGeometry(7,3,3);
			var Hit_Box = new THREE.Mesh( Hit_geometry, Piel_material );
			Hit_contenedor.add( Hit_Box );


					var Cola_geometry = new THREE.BoxGeometry(1.5,1,0.3);
					var Cola_Box = new THREE.Mesh( Cola_geometry, escama_material );
					Cola_Box.position.y=1.7
					Hit_contenedor.add( Cola_Box );

					var Cola_geometry = new THREE.BoxGeometry(1.5,1,0.3);
					var Cola_Box = new THREE.Mesh( Cola_geometry, escama_material );
					Cola_Box.position.x=2
					Cola_Box.position.y=1.7
					Hit_contenedor.add( Cola_Box );

					var Cola_geometry = new THREE.BoxGeometry(1.5,1,0.3);
					var Cola_Box = new THREE.Mesh( Cola_geometry, escama_material );
					Cola_Box.position.x=-2
					Cola_Box.position.y=1.7
					Hit_contenedor.add( Cola_Box );





			///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


			var Cola = [];

			for(var i = 0 ; i<12 ;i++){
				if(i == 0){
					var Cola_contenedor= new THREE.Object3D();
					Hit_contenedor.add(Cola_contenedor);
					Cola_contenedor.position.x=4
					Cola.push(Cola_contenedor);

					var Cola_geometry = new THREE.BoxGeometry(1,1,1);
					var Cola_Box = new THREE.Mesh( Cola_geometry, Piel_material );
					Cola_contenedor.add( Cola_Box );

					var Cola_geometry = new THREE.BoxGeometry(0.7,0.5,0.3);
					var Cola_Box = new THREE.Mesh( Cola_geometry, escama_material );
					Cola_Box.position.y=0.7
					Cola_contenedor.add( Cola_Box );


				}else{
					var Cola_contenedor= new THREE.Object3D();
					Cola[i-1].add(Cola_contenedor);
					Cola_contenedor.position.x=1;
					Cola.push(Cola_contenedor);

					var Cola_geometry = new THREE.BoxGeometry(1,1,1);
					var Cola_Box = new THREE.Mesh( Cola_geometry, Piel_material );
					Cola_contenedor.add( Cola_Box );

					var Cola_geometry = new THREE.BoxGeometry(0.6,0.4,0.2);
					var Cola_Box = new THREE.Mesh( Cola_geometry, escama_material );
					Cola_Box.position.y=0.7
					Cola_contenedor.add( Cola_Box );
				}
			}


			var Cuello = [];

			for(var i = 0 ; i<6 ;i++){
				if(i == 0){
					var Cuello_contenedor= new THREE.Object3D();
					Hit_contenedor.add(Cuello_contenedor);
					Cuello_contenedor.position.x=-4
					Cuello.push(Cuello_contenedor);

					var Cuello_geometry = new THREE.BoxGeometry(1,1,1);
					var Cuello_Box = new THREE.Mesh( Cuello_geometry, Piel_material );
					Cuello_contenedor.add( Cuello_Box );

					var Cuello_geometry = new THREE.BoxGeometry(0.7,0.5,0.3);
					var Cuello_Box = new THREE.Mesh( Cuello_geometry, escama_material );
					Cuello_Box.position.y=0.7
					Cuello_contenedor.add( Cuello_Box );


				}else if(i<5){
					var Cuello_contenedor= new THREE.Object3D();
					Cuello[i-1].add(Cuello_contenedor);
					Cuello_contenedor.position.x=-1;
					Cuello.push(Cuello_contenedor);

					var Cuello_geometry = new THREE.BoxGeometry(1,1,1);
					var Cuello_Box = new THREE.Mesh( Cuello_geometry, Piel_material );
					Cuello_contenedor.add( Cuello_Box );

					var Cuello_geometry = new THREE.BoxGeometry(0.6,0.4,0.2);
					var Cuello_Box = new THREE.Mesh( Cuello_geometry, escama_material );
					Cuello_Box.position.y=0.7
					Cuello_contenedor.add( Cuello_Box );
				}else{
					var Cuello_contenedor= new THREE.Object3D();
					Cuello[i-1].add(Cuello_contenedor);
					Cuello_contenedor.position.x=-1.5;
					Cuello.push(Cuello_contenedor);

					var Cuello_geometry = new THREE.BoxGeometry(2,2,2);
					var Cuello_Box = new THREE.Mesh( Cuello_geometry, Piel_material );
					Cuello_contenedor.add( Cuello_Box );

					var Boca_contenedor= new THREE.Object3D();
					Cuello_contenedor.add(Boca_contenedor);
					Boca_contenedor.position.x=-1.5;

					var Boca_geometry = new THREE.BoxGeometry(2.5,0.5,2);
					var Boca_Box = new THREE.Mesh( Boca_geometry, Piel_material );
					Boca_Box.position.x=0;
					Boca_Box.position.y=-0.5;
					//Boca_Box.position.z=-0.5;
					Boca_contenedor.add( Boca_Box );


					var Boca_geometry = new THREE.BoxGeometry(0.5,0.4,0.5);
					var Boca_Box = new THREE.Mesh( Boca_geometry, escama_material );
					Boca_Box.position.x=-0.7;
					Boca_Box.position.y=-0.3;
					Boca_Box.position.z=-0.5;
					//Boca_Box.position.z=-0.5;
					Boca_contenedor.add( Boca_Box );


					var Boca_geometry = new THREE.BoxGeometry(0.5,0.4,0.5);
					var Boca_Box = new THREE.Mesh( Boca_geometry, escama_material );
					Boca_Box.position.x=-0.7;
					Boca_Box.position.y=-0.3;
					Boca_Box.position.z=0.5;
					//Boca_Box.position.z=-0.5;
					Boca_contenedor.add( Boca_Box );


					var Boca_geometry = new THREE.BoxGeometry(2.5,0.5,2);
					var Boca_Box = new THREE.Mesh( Boca_geometry, Piel_material );
					Boca_Box.position.x=0;
					Boca_Box.position.y=-1.3;
					Boca_Box.rotation.z=0.5;
					//Boca_Box.position.z=-0.5;
					Boca_contenedor.add( Boca_Box );




					var Cuello_geometry = new THREE.BoxGeometry(0.6,0.4,0.2);
					var Cuello_Box = new THREE.Mesh( Cuello_geometry, escama_material );
					Cuello_Box.position.y=0.7+0.5;
					Cuello_Box.position.z=0.5;
					Cuello_contenedor.add( Cuello_Box );

					var Cuello_geometry = new THREE.BoxGeometry(0.6,0.4,0.2);
					var Cuello_Box = new THREE.Mesh( Cuello_geometry, escama_material );
					Cuello_Box.position.y=0.7+0.5;
					Cuello_Box.position.z=-0.5;
					Cuello_contenedor.add( Cuello_Box );



				}
			}




			//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//

			var L_ARM_1_contenedor= new THREE.Object3D();
			Hit_contenedor.add(L_ARM_1_contenedor);
			L_ARM_1_contenedor.position.x=-2.5;
			L_ARM_1_contenedor.position.z=-1.5;

			var L_ARM_1_geometry = new THREE.BoxGeometry(1.5,3,1.5);
			var L_ARM_1_Box = new THREE.Mesh( L_ARM_1_geometry, Piel_material );
			L_ARM_1_Box.position.x=0;
			L_ARM_1_Box.position.y=-1.5;
			L_ARM_1_Box.position.z=0;
			L_ARM_1_contenedor.add( L_ARM_1_Box );

			//L_ARM_2//L_ARM_2//L_ARM_2//L_ARM_2//L_ARM_2//L_ARM_2//L_ARM_2//L_ARM_2//L_ARM_2//L_ARM_2//L_ARM_2//L_ARM_2//L_ARM_2//L_ARM_2//L_ARM_2//L_ARM_2

			var L_ARM_2_contenedor= new THREE.Object3D();
			L_ARM_1_contenedor.add(L_ARM_2_contenedor);
			L_ARM_2_contenedor.position.x=0;
			L_ARM_2_contenedor.position.y=-3;
			L_ARM_2_contenedor.position.z=0;


			var L_ARM_2_geometry = new THREE.BoxGeometry(1,2.5,1);
			var L_ARM_2_Box = new THREE.Mesh( L_ARM_2_geometry, Piel_material );
			L_ARM_2_Box.position.x=0;
			L_ARM_2_Box.position.y=-2.5/2;
			L_ARM_2_Box.position.z=0;
			L_ARM_2_contenedor.add( L_ARM_2_Box );

			//L_manos//L_manos//L_manos//L_manos//L_manos//L_manos//L_manos//L_manos//L_manos//L_manos//L_manos//L_manos//L_manos//L_manos//L_manos//L_manos//L_manos//L_manos
			var L_manos_contenedor= new THREE.Object3D();
			L_ARM_2_contenedor.add(L_manos_contenedor);
			L_manos_contenedor.position.x=0;
			L_manos_contenedor.position.y=-2.5;
			L_manos_contenedor.position.z=0;

			var L_manos_geometry = new THREE.BoxGeometry(1.5,0.7,1);
			var L_manos_Box = new THREE.Mesh( L_manos_geometry, Piel_material );
			L_manos_Box.position.x=-0.5;
			//L_ARM_2_Box.position.y=-2;
			//L_ARM_2_Box.position.z=0;
			L_manos_contenedor.add( L_manos_Box )


			//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//

			var R_ARM_1_contenedor= new THREE.Object3D();
			Hit_contenedor.add(R_ARM_1_contenedor);
			R_ARM_1_contenedor.position.x=-2.5;
			R_ARM_1_contenedor.position.z=1.5;

			var R_ARM_1_geometry = new THREE.BoxGeometry(1.5,3,1.5);
			var R_ARM_1_Box = new THREE.Mesh( R_ARM_1_geometry, Piel_material );
			R_ARM_1_Box.position.x=0;
			R_ARM_1_Box.position.y=-1.5;
			R_ARM_1_Box.position.z=0;
			R_ARM_1_contenedor.add( R_ARM_1_Box );

			//R_ARM_2//R_ARM_2//R_ARM_2//R_ARM_2//R_ARM_2//R_ARM_2//R_ARM_2//R_ARM_2//R_ARM_2//R_ARM_2//R_ARM_2//R_ARM_2//R_ARM_2//R_ARM_2//R_ARM_2//R_ARM_2

			var R_ARM_2_contenedor= new THREE.Object3D();
			R_ARM_1_contenedor.add(R_ARM_2_contenedor);
			R_ARM_2_contenedor.position.x=0;
			R_ARM_2_contenedor.position.y=-3;
			R_ARM_2_contenedor.position.z=0;


			var R_ARM_2_geometry = new THREE.BoxGeometry(1,2.5,1);
			var R_ARM_2_Box = new THREE.Mesh( R_ARM_2_geometry, Piel_material );
			R_ARM_2_Box.position.x=0;
			R_ARM_2_Box.position.y=-2.5/2;
			R_ARM_2_Box.position.z=0;
			R_ARM_2_contenedor.add( R_ARM_2_Box );

			//R_manos//R_manos//R_manos//R_manos//R_manos//R_manos//R_manos//R_manos//R_manos//R_manos//R_manos//R_manos//R_manos//R_manos//R_manos//R_manos//R_manos//R_manos
			var R_manos_contenedor= new THREE.Object3D();
			R_ARM_2_contenedor.add(R_manos_contenedor);
			R_manos_contenedor.position.x=0;
			R_manos_contenedor.position.y=-2.5;
			R_manos_contenedor.position.z=0;

			var R_manos_geometry = new THREE.BoxGeometry(1.5,0.7,1);
			var R_manos_Box = new THREE.Mesh( R_manos_geometry, Piel_material );
			R_manos_Box.position.x=-0.5;
			//R_ARM_2_Box.position.y=-2;
			//R_ARM_2_Box.position.z=0;
			R_manos_contenedor.add( R_manos_Box )





			//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//

			var L_Leg_1_contenedor= new THREE.Object3D();
			Hit_contenedor.add(L_Leg_1_contenedor);
			L_Leg_1_contenedor.position.x=2.5;
			L_Leg_1_contenedor.position.z=-3.5/2;

			var L_Leg_1_geometry = new THREE.BoxGeometry(2,3.5,2);
			var L_Leg_1_Box = new THREE.Mesh( L_Leg_1_geometry, Piel_material );
			L_Leg_1_Box.position.x=0;
			L_Leg_1_Box.position.y=-3.5/2;
			L_Leg_1_Box.position.z=0;
			L_Leg_1_contenedor.add( L_Leg_1_Box );

			//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2

			var L_Leg_2_contenedor= new THREE.Object3D();
			L_Leg_1_contenedor.add(L_Leg_2_contenedor);
			L_Leg_2_contenedor.position.x=0;
			L_Leg_2_contenedor.position.y=-3.5;
			L_Leg_2_contenedor.position.z=0;


			var L_Leg_2_geometry = new THREE.BoxGeometry(1.5,3,1.5);
			var L_Leg_2_Box = new THREE.Mesh( L_Leg_2_geometry, Piel_material );
			L_Leg_2_Box.position.x=0;
			L_Leg_2_Box.position.y=-3/2;
			L_Leg_2_Box.position.z=0;
			L_Leg_2_contenedor.add( L_Leg_2_Box );

			//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies
			var L_Pies_contenedor= new THREE.Object3D();
			L_Leg_2_contenedor.add(L_Pies_contenedor);
			L_Pies_contenedor.position.x=0;
			L_Pies_contenedor.position.y=-3;
			L_Pies_contenedor.position.z=0;

			var L_Pies_geometry = new THREE.BoxGeometry(2,0.7,1.5);
			var L_Pies_Box = new THREE.Mesh( L_Pies_geometry, Piel_material );
			L_Pies_Box.position.x=-0.5;
			//L_Leg_2_Box.position.y=-2;
			//L_Leg_2_Box.position.z=0;
			L_Pies_contenedor.add( L_Pies_Box )


			//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//

			var R_Leg_1_contenedor= new THREE.Object3D();
			Hit_contenedor.add(R_Leg_1_contenedor);
			R_Leg_1_contenedor.position.x=2.5;
			R_Leg_1_contenedor.position.z=3.5/2;

			var R_Leg_1_geometry = new THREE.BoxGeometry(2,3.5,2);
			var R_Leg_1_Box = new THREE.Mesh( R_Leg_1_geometry, Piel_material );
			R_Leg_1_Box.position.x=0;
			R_Leg_1_Box.position.y=-3.5/2;
			R_Leg_1_Box.position.z=0;
			R_Leg_1_contenedor.add( R_Leg_1_Box );

			//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2

			var R_Leg_2_contenedor= new THREE.Object3D();
			R_Leg_1_contenedor.add(R_Leg_2_contenedor);
			R_Leg_2_contenedor.position.x=0;
			R_Leg_2_contenedor.position.y=-3.5;
			R_Leg_2_contenedor.position.z=0;


			var R_Leg_2_geometry = new THREE.BoxGeometry(1.5,3,1.5);
			var R_Leg_2_Box = new THREE.Mesh( R_Leg_2_geometry, Piel_material );
			R_Leg_2_Box.position.x=0;
			R_Leg_2_Box.position.y=-3/2;
			R_Leg_2_Box.position.z=0;
			R_Leg_2_contenedor.add( R_Leg_2_Box );

			//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies
			var R_Pies_contenedor= new THREE.Object3D();
			R_Leg_2_contenedor.add(R_Pies_contenedor);
			R_Pies_contenedor.position.x=0;
			R_Pies_contenedor.position.y=-3;
			R_Pies_contenedor.position.z=0;

			var R_Pies_geometry = new THREE.BoxGeometry(2,0.7,1.5);
			var R_Pies_Box = new THREE.Mesh( R_Pies_geometry, Piel_material );
			R_Pies_Box.position.x=-0.5;
			//R_Leg_2_Box.position.y=-2;
			//R_Leg_2_Box.position.z=0;
			R_Pies_contenedor.add( R_Pies_Box )


			//L_ala_1//L_ala_1//L_ala_1//L_ala_1//L_ala_1//L_ala_1//L_ala_1//L_ala_1//L_ala_1//L_ala_1//L_ala_1//L_ala_1//L_ala_1//L_ala_1

			var L_ala_1_contenedor= new THREE.Object3D();
			Hit_contenedor.add(L_ala_1_contenedor);
			L_ala_1_contenedor.position.x=-2.5;
			L_ala_1_contenedor.position.y=1.5;
			L_ala_1_contenedor.position.z=1.5;

			var L_ala_1_geometry = new THREE.BoxGeometry(1,1,7);
			var L_ala_1_Box = new THREE.Mesh( L_ala_1_geometry, escama_material );
			L_ala_1_Box.position.x=0;
			L_ala_1_Box.position.y=-0.5;
			L_ala_1_Box.position.z=3.5;
			L_ala_1_contenedor.add( L_ala_1_Box );

			//L_ala_2//L_ala_2//L_ala_2//L_ala_2//L_ala_2//L_ala_2//L_ala_2//L_ala_2//L_ala_2//L_ala_2//L_ala_2//L_ala_2//L_ala_2//L_ala_2

			var L_ala_2_contenedor= new THREE.Object3D();
			L_ala_1_contenedor.add(L_ala_2_contenedor);
			L_ala_2_contenedor.position.x=0;
			L_ala_2_contenedor.position.y=0;
			L_ala_2_contenedor.position.z=7;

			var L_ala_2_geometry = new THREE.BoxGeometry(0.7,0.7,7);
			var L_ala_2_Box = new THREE.Mesh( L_ala_2_geometry, escama_material );
			L_ala_2_Box.position.x=0;
			L_ala_2_Box.position.y=-0.5;
			L_ala_2_Box.position.z=3.5;
			L_ala_2_contenedor.add( L_ala_2_Box );


			//R_ala_1//R_ala_1//R_ala_1//R_ala_1//R_ala_1//R_ala_1//R_ala_1//R_ala_1//R_ala_1//R_ala_1//R_ala_1//R_ala_1//R_ala_1//R_ala_1

			var R_ala_1_contenedor= new THREE.Object3D();
			Hit_contenedor.add(R_ala_1_contenedor);
			R_ala_1_contenedor.position.x=-2.5;
			R_ala_1_contenedor.position.y=1.5;
			R_ala_1_contenedor.position.z=-1.5;

			var R_ala_1_geometry = new THREE.BoxGeometry(1,1,7);
			var R_ala_1_Box = new THREE.Mesh( R_ala_1_geometry, escama_material );
			R_ala_1_Box.position.x=0;
			R_ala_1_Box.position.y=-0.5;
			R_ala_1_Box.position.z=-3.5;
			R_ala_1_contenedor.add( R_ala_1_Box );

			//R_ala_2//R_ala_2//R_ala_2//R_ala_2//R_ala_2//R_ala_2//R_ala_2//R_ala_2//R_ala_2//R_ala_2//R_ala_2//R_ala_2//R_ala_2//R_ala_2

			var R_ala_2_contenedor= new THREE.Object3D();
			R_ala_1_contenedor.add(R_ala_2_contenedor);
			R_ala_2_contenedor.position.x=0;
			R_ala_2_contenedor.position.y=0;
			R_ala_2_contenedor.position.z=-7;

			var R_ala_2_geometry = new THREE.BoxGeometry(0.7,0.7,7);
			var R_ala_2_Box = new THREE.Mesh( R_ala_2_geometry, escama_material );
			R_ala_2_Box.position.x=0;
			R_ala_2_Box.position.y=-0.5;
			R_ala_2_Box.position.z=-3.5;
			R_ala_2_contenedor.add( R_ala_2_Box );













			//variables//variables//variables//variables//variables//variables//variables//variables//variables//variables//variables//variables//variables//
			var time = 0;

			//var  A = 1; amplitud
			//var  Alfa = 1;  velosidad
			//var  Beta = 0;  desfase
			//var  B = 0;  desplasamiento
			//rotacion.z = A*Math.cos(Alfa * time + Beta)+B


		
			function operaciones (A,Alfa,Beta,B){

			rotacion = A*Math.cos(Alfa * time + Beta)+B;
			return rotacion;

			};











	scene.add(this.contenedor)

	this.actualizar=function()
	{
    //Hit_contenedor.position.x = -time * 5;
  				Hit_contenedor.position.y= operaciones(-1,0.1,0,0);

  				Hit_contenedor.rotation.x = operaciones(-0.1,0.1,0,0);

  				//Cola[0].position.y= operaciones(1,0.5,0,0);

  				for(var i = 0 ; i< 12 ;i++){
  					Cola[i].position.y= operaciones(0.06*i,0.1,0,0);
  				}

  				for(var i = 0 ; i< 6 ;i++){
  					Cuello[i].position.y= operaciones(0.06*i,0.1,10,0);
  					Cuello[i].position.z = 0.06*i*Math.sin(0.1 * time + 0)+0;
  					Cuello[i].rotation.y = operaciones(0.03*i,0.1,10,0);
  				}


  				L_ARM_1_contenedor.rotation.z = operaciones(0.02,0.1,0,0.2);
  				L_ARM_2_contenedor.rotation.z = operaciones(0.4,0.1,0,1);
  				L_manos_contenedor.rotation.z = operaciones(0.5,0.1,0,0.5);


  				R_ARM_1_contenedor.rotation.z = operaciones(0.02,0.1,0,0.2);
  				R_ARM_2_contenedor.rotation.z = operaciones(0.4,0.1,0,1);
  				R_manos_contenedor.rotation.z = operaciones(0.5,0.1,0,0.5);


  				L_Leg_1_contenedor.rotation.z = operaciones(0.02,0.1,-5,0.2);
  				L_Leg_2_contenedor.rotation.z = operaciones(0.4,0.1,-5,1);
  				L_Pies_contenedor.rotation.z = operaciones(0.5,0.1,-5,0.5);

  				R_Leg_1_contenedor.rotation.z = operaciones(0.02,0.1,-5,0.2);
  				R_Leg_2_contenedor.rotation.z = operaciones(0.4,0.1,-5,1);
  				R_Pies_contenedor.rotation.z = operaciones(0.5,0.1,-5,0.5);

  				L_ala_1_contenedor.position.y = operaciones(0.2,0.1,0,1.5);
  				L_ala_1_contenedor.rotation.x = operaciones(0.5,0.1,0,-0.2);
  				L_ala_2_contenedor.rotation.x = operaciones(0.7,0.1,0.2,-0.2);

  				R_ala_1_contenedor.position.y = operaciones(0.2,0.1,0,1.5);
  				R_ala_1_contenedor.rotation.x = operaciones(-0.5,0.1,0,0.2);
  				R_ala_2_contenedor.rotation.x = operaciones(-0.5,0.1,0,0.2);

  				time += 0.1;

	}
}
