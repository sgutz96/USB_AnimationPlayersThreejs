var Skeleton = function()
{
	this.contenedor=new THREE.Object3D();

	//var loader = new THREE.TextureLoader();
	//var texture = loader.load("texturas/rock.jpg");


  //Materiales//Materiales//Materiales//Materiales//Materiales//Materiales//Materiales//Materiales//Materiales//Materiales//Materiales//Materiales
  			var Bone_material = new THREE.MeshBasicMaterial( { color: 0xf5f5DC } );

  			///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT///HIT
  			var Hit_contenedor= new THREE.Object3D();
  			this.contenedor.add(Hit_contenedor);

  			var Hit_geometry = new THREE.BoxGeometry(2,2,2);
  			var Hit_Box = new THREE.Mesh( Hit_geometry, Bone_material );
  			Hit_contenedor.add( Hit_Box );
  			//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//

  			var L_Leg_1_contenedor= new THREE.Object3D();
  			Hit_contenedor.add(L_Leg_1_contenedor);
  			L_Leg_1_contenedor.position.z=-1;

  			var L_Leg_1_geometry = new THREE.BoxGeometry(1,4,1);
  			var L_Leg_1_Box = new THREE.Mesh( L_Leg_1_geometry, Bone_material );
  			L_Leg_1_Box.position.x=0;
  			L_Leg_1_Box.position.y=-2;
  			L_Leg_1_Box.position.z=0;
  			L_Leg_1_contenedor.add( L_Leg_1_Box );

  			//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2

  			var L_Leg_2_contenedor= new THREE.Object3D();
  			L_Leg_1_contenedor.add(L_Leg_2_contenedor);
  			L_Leg_2_contenedor.position.x=0;
  			L_Leg_2_contenedor.position.y=-4;
  			L_Leg_2_contenedor.position.z=0;


  			var L_Leg_2_geometry = new THREE.BoxGeometry(1,4,1);
  			var L_Leg_2_Box = new THREE.Mesh( L_Leg_2_geometry, Bone_material );
  			L_Leg_2_Box.position.x=0;
  			L_Leg_2_Box.position.y=-2;
  			L_Leg_2_Box.position.z=0;
  			L_Leg_2_contenedor.add( L_Leg_2_Box );

  			//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies
  			var L_Pies_contenedor= new THREE.Object3D();
  			L_Leg_2_contenedor.add(L_Pies_contenedor);
  			L_Pies_contenedor.position.x=0;
  			L_Pies_contenedor.position.y=-4;
  			L_Pies_contenedor.position.z=0;

  			var L_Pies_geometry = new THREE.BoxGeometry(2,1,1);
  			var L_Pies_Box = new THREE.Mesh( L_Pies_geometry, Bone_material );
  			L_Pies_Box.position.x=-0.5;
  			//L_Leg_2_Box.position.y=-2;
  			//L_Leg_2_Box.position.z=0;
  			L_Pies_contenedor.add( L_Pies_Box )



  			//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//

  			var R_Leg_1_contenedor= new THREE.Object3D();
  			Hit_contenedor.add(R_Leg_1_contenedor);
  			R_Leg_1_contenedor.position.z=1;

  			var R_Leg_1_geometry = new THREE.BoxGeometry(1,4,1);
  			var R_Leg_1_Box = new THREE.Mesh( R_Leg_1_geometry, Bone_material );
  			R_Leg_1_Box.position.x=0;
  			R_Leg_1_Box.position.y=-2;
  			R_Leg_1_Box.position.z=0;
  			R_Leg_1_contenedor.add( R_Leg_1_Box );

  			//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2

  			var R_Leg_2_contenedor= new THREE.Object3D();
  			R_Leg_1_contenedor.add(R_Leg_2_contenedor);
  			R_Leg_2_contenedor.position.x=0;
  			R_Leg_2_contenedor.position.y=-4;
  			R_Leg_2_contenedor.position.z=0;


  			var R_Leg_2_geometry = new THREE.BoxGeometry(1,4,1);
  			var R_Leg_2_Box = new THREE.Mesh( R_Leg_2_geometry, Bone_material );
  			R_Leg_2_Box.position.x=0;
  			R_Leg_2_Box.position.y=-2;
  			R_Leg_2_Box.position.z=0;
  			R_Leg_2_contenedor.add( R_Leg_2_Box );

  			//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies
  			var R_Pies_contenedor= new THREE.Object3D();
  			R_Leg_2_contenedor.add(R_Pies_contenedor);
  			R_Pies_contenedor.position.x=0;
  			R_Pies_contenedor.position.y=-4;
  			R_Pies_contenedor.position.z=0;

  			var R_Pies_geometry = new THREE.BoxGeometry(2,1,1);
  			var R_Pies_Box = new THREE.Mesh( R_Pies_geometry, Bone_material );
  			R_Pies_Box.position.x=-0.5;
  			//L_Leg_2_Box.position.y=-2;
  			//L_Leg_2_Box.position.z=0;
  			R_Pies_contenedor.add( R_Pies_Box )



  			//BACK//BACK//BACK//BACK//BACK//BACK//BACK//BACK//BACK//BACK//BACK//BACK//BACK//BACK//BACK//BACK//BACK//BACK//BACK//BACK
  			var Back_contenedor= new THREE.Object3D();
  			Hit_contenedor.add(Back_contenedor);
  			Back_contenedor.position.x=0.5;



  			var Back_geometry = new THREE.BoxGeometry(0.5,4,0.5);
  			var Back_Box = new THREE.Mesh( Back_geometry, Bone_material );
  			Back_contenedor.add( Back_Box );
  			Back_Box.position.y=2;

  			//torax//torax//torax//torax//torax//torax//torax//torax//torax//torax//torax//torax//torax//torax//torax//torax//torax//torax//torax//torax
  			var torax_contenedor= new THREE.Object3D();
  			Back_contenedor.add(torax_contenedor);
  			torax_contenedor.position.x=-0.5;
  			torax_contenedor.position.y=4;

  			var torax_geometry = new THREE.BoxGeometry(2,2,4);
  			var torax_Box = new THREE.Mesh( torax_geometry, Bone_material );
  			torax_contenedor.add( torax_Box );


  			//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//L_ARM_1//

  			var L_ARM_1_contenedor= new THREE.Object3D();
  			torax_contenedor.add(L_ARM_1_contenedor);
  			L_ARM_1_contenedor.position.z=-2;

  			var L_ARM_1_geometry = new THREE.BoxGeometry(1,3,1);
  			var L_ARM_1_Box = new THREE.Mesh( L_ARM_1_geometry, Bone_material );
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


  			var L_ARM_2_geometry = new THREE.BoxGeometry(1,3,1);
  			var L_ARM_2_Box = new THREE.Mesh( L_ARM_2_geometry, Bone_material );
  			L_ARM_2_Box.position.x=0;
  			L_ARM_2_Box.position.y=-1.5;
  			L_ARM_2_Box.position.z=0;
  			L_ARM_2_contenedor.add( L_ARM_2_Box );

  			//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//R_ARM_1//

  			var R_ARM_1_contenedor= new THREE.Object3D();
  			torax_contenedor.add(R_ARM_1_contenedor);
  			R_ARM_1_contenedor.position.z= 2;

  			var R_ARM_1_geometry = new THREE.BoxGeometry(1,3,1);
  			var R_ARM_1_Box = new THREE.Mesh( R_ARM_1_geometry, Bone_material );
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


  			var R_ARM_2_geometry = new THREE.BoxGeometry(1,3,1);
  			var R_ARM_2_Box = new THREE.Mesh( R_ARM_2_geometry, Bone_material );
  			R_ARM_2_Box.position.x=0;
  			R_ARM_2_Box.position.y=-1.5;
  			R_ARM_2_Box.position.z=0;
  			R_ARM_2_contenedor.add( R_ARM_2_Box );



  			//Neck//Neck//Neck//Neck//Neck//Neck//Neck//Neck//Neck//Neck//Neck//Neck//Neck//Neck//Neck//Neck//Neck//Neck//Neck//Neck
  			var Neck_contenedor= new THREE.Object3D();
  			torax_contenedor.add(Neck_contenedor);
  			Neck_contenedor.position.x=0.5;



  			var Neck_geometry = new THREE.BoxGeometry(0.5,2,0.5);
  			var Neck_Box = new THREE.Mesh( Neck_geometry, Bone_material );
  			Neck_contenedor.add( Neck_Box );
  			Neck_Box.position.y=1;

  			//head//head//head//head//head//head//head//head//head//head//head//head//head//head//head//head//head//head//head//head
  			var head_contenedor= new THREE.Object3D();
  			Neck_contenedor.add(head_contenedor);
  			head_contenedor.position.x=-0.5;
  			head_contenedor.position.y=4;

  			var head_geometry = new THREE.BoxGeometry(4,4,4);
  			var head_Box = new THREE.Mesh( head_geometry, Bone_material );
  			head_contenedor.add( head_Box );

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
    Hit_contenedor.position.y= -Math.cos(2*time);

				Hit_contenedor.rotation.x = operaciones(-0.1,1,0,0);
				Hit_contenedor.rotation.y = operaciones(0.1,1,0,0);

				torax_contenedor.rotation.x = operaciones(0.1,1,0,0);
				torax_contenedor.rotation.y = operaciones(-0.1,1,0,0);

				L_Leg_1_contenedor.rotation.z = operaciones(1,1,0,0);
				L_Leg_2_contenedor.rotation.z = operaciones(1,1,5,1);
				L_Pies_contenedor.rotation.z = operaciones(0.5,1,0,0.5);

				R_Leg_1_contenedor.rotation.z = operaciones(-1,1,0,0);
				R_Leg_2_contenedor.rotation.z = operaciones(1,1,-5,1);
				R_Pies_contenedor.rotation.z = operaciones(-0.5,1,0,0.5);

				Back_contenedor.rotation.z = operaciones(0.1,2,0.3,0.1);

				L_ARM_1_contenedor.rotation.z = operaciones(-1,1,0,0);
				L_ARM_2_contenedor.rotation.z = operaciones(-1,1,-1,-1);

				R_ARM_1_contenedor.rotation.z = operaciones(1,1,0,0);
				R_ARM_2_contenedor.rotation.z = operaciones(1,1,-1,-1);

				Neck_contenedor.rotation.z = operaciones(0.01,2,0.35,0.01);


				time += 0.1;
	}
}
