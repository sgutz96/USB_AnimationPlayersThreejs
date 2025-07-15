var Dog = function()
{
	this.contenedor=new THREE.Object3D();

  //Materiales//Materiales//Materiales//Materiales//Materiales//Materiales//Materiales//Materiales//Materiales//Materiales//Materiales//Materiales
var Bone_material = new THREE.MeshBasicMaterial( { color: 0x5B5B5B } );

///HIT_1///HIT_1///HIT_1///HIT_1///HIT_1///HIT_1///HIT_1///HIT_1///HIT_1///HIT_1///HIT_1///HIT_1///HIT_1///HIT_1///HIT_1///HIT_1///HIT_1///HIT_1
var Hit_1_contenedor= new THREE.Object3D();
this.contenedor.add(Hit_1_contenedor);

var Hit_1_geometry = new THREE.BoxGeometry(4,3,3);
var Hit_1_Box = new THREE.Mesh( Hit_1_geometry, Bone_material );
Hit_1_contenedor.add( Hit_1_Box );

///Hit_2///Hit_2///Hit_2///Hit_2///Hit_2///Hit_2///Hit_2///Hit_2///Hit_2///Hit_2///Hit_2///Hit_2///Hit_2///Hit_2///Hit_2///Hit_2///Hit_2///Hit_2
var Hit_2_contenedor= new THREE.Object3D();
Hit_1_contenedor.add(Hit_2_contenedor);
Hit_2_contenedor.position.x=-3.5;
Hit_2_contenedor.position.y=0.5;


var Hit_2_geometry = new THREE.BoxGeometry(3,4,4);
var Hit_2_Box = new THREE.Mesh( Hit_2_geometry, Bone_material );
Hit_2_contenedor.add( Hit_2_Box );

//Face//Face//Face//Face//Face//Face//Face//Face//Face//Face//Face//Face//Face//Face//Face//Face//Face//Face//Face//Face//Face//Face//Face//Face
var Face_contenedor= new THREE.Object3D();
Hit_2_contenedor.add(Face_contenedor);
Face_contenedor.position.x=-(1.5+3)/2
Face_contenedor.position.y=-0.5

var Face_geometry = new THREE.BoxGeometry(1.5,3,3);
var Face_Box = new THREE.Mesh( Face_geometry, Bone_material );
Face_contenedor.add( Face_Box );

//Snout//Snout//Snout//Snout//Snout//Snout//Snout//Snout//Snout//Snout//Snout//Snout//Snout//Snout//Snout//Snout//Snout//Snout//Snout//Snout//Snout//Snout//Snout//Snout
var Snout_contenedor= new THREE.Object3D();
Face_contenedor.add(Snout_contenedor);
Snout_contenedor.position.x=-1.5
Snout_contenedor.position.y=-1.5/2

var Snout_geometry = new THREE.BoxGeometry(1.5,1.5,1.5);
var Snout_Box = new THREE.Mesh( Snout_geometry, Bone_material );
Snout_contenedor.add( Snout_Box );


//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//L_Leg_1//

var L_Leg_1_contenedor= new THREE.Object3D();
Hit_1_contenedor.add(L_Leg_1_contenedor);
L_Leg_1_contenedor.position.x=1.5;
L_Leg_1_contenedor.position.y=-1.5;
L_Leg_1_contenedor.position.z=-1;

var L_Leg_1_geometry = new THREE.BoxGeometry(1,1.5,1);
var L_Leg_1_Box = new THREE.Mesh( L_Leg_1_geometry, Bone_material );
L_Leg_1_Box.position.x=0;
L_Leg_1_Box.position.y=-1.5/2;
L_Leg_1_Box.position.z=0;
L_Leg_1_contenedor.add( L_Leg_1_Box );

//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2//L_LEG_2

var L_Leg_2_contenedor= new THREE.Object3D();
L_Leg_1_contenedor.add(L_Leg_2_contenedor);
L_Leg_2_contenedor.position.x=0;
L_Leg_2_contenedor.position.y=-1.5;
L_Leg_2_contenedor.position.z=0;


var L_Leg_2_geometry = new THREE.BoxGeometry(0.8,1.5,0.8);
var L_Leg_2_Box = new THREE.Mesh( L_Leg_2_geometry, Bone_material );
L_Leg_2_Box.position.x=0;
L_Leg_2_Box.position.y=-1.5/2;
L_Leg_2_Box.position.z=0;
L_Leg_2_contenedor.add( L_Leg_2_Box );

//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies//L_Pies
var L_Pies_contenedor= new THREE.Object3D();
L_Leg_2_contenedor.add(L_Pies_contenedor);
L_Pies_contenedor.position.x=0;
L_Pies_contenedor.position.y=-1.5;
L_Pies_contenedor.position.z=0;

var L_Pies_geometry = new THREE.BoxGeometry(1.5,0.3,1);
var L_Pies_Box = new THREE.Mesh( L_Pies_geometry, Bone_material );
L_Pies_Box.position.x=-0.5;
//L_Leg_2_Box.position.y=-2;
//L_Leg_2_Box.position.z=0;
L_Pies_contenedor.add( L_Pies_Box )

//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//R_Leg_1//

var R_Leg_1_contenedor= new THREE.Object3D();
Hit_1_contenedor.add(R_Leg_1_contenedor);
R_Leg_1_contenedor.position.x=1.5;
R_Leg_1_contenedor.position.y=-1.5;
R_Leg_1_contenedor.position.z=1;

var R_Leg_1_geometry = new THREE.BoxGeometry(1,1.5,1);
var R_Leg_1_Box = new THREE.Mesh( R_Leg_1_geometry, Bone_material );
R_Leg_1_Box.position.x=0;
R_Leg_1_Box.position.y=-1.5/2;
R_Leg_1_Box.position.z=0;
R_Leg_1_contenedor.add( R_Leg_1_Box );

//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2//R_LEG_2

var R_Leg_2_contenedor= new THREE.Object3D();
R_Leg_1_contenedor.add(R_Leg_2_contenedor);
R_Leg_2_contenedor.position.x=0;
R_Leg_2_contenedor.position.y=-1.5;
R_Leg_2_contenedor.position.z=0;


var R_Leg_2_geometry = new THREE.BoxGeometry(0.8,1.5,0.8);
var R_Leg_2_Box = new THREE.Mesh( R_Leg_2_geometry, Bone_material );
R_Leg_2_Box.position.x=0;
R_Leg_2_Box.position.y=-1.5/2;
R_Leg_2_Box.position.z=0;
R_Leg_2_contenedor.add( R_Leg_2_Box );

//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies//R_Pies
var R_Pies_contenedor= new THREE.Object3D();
R_Leg_2_contenedor.add(R_Pies_contenedor);
R_Pies_contenedor.position.x=0;
R_Pies_contenedor.position.y=-1.5;
R_Pies_contenedor.position.z=0;

var R_Pies_geometry = new THREE.BoxGeometry(1.5,0.3,1);
var R_Pies_Box = new THREE.Mesh( R_Pies_geometry, Bone_material );
R_Pies_Box.position.x=-0.5;
//R_Leg_2_Box.position.y=-2;
//R_Leg_2_Box.position.z=0;
R_Pies_contenedor.add( R_Pies_Box )









//L_Arm_1//L_Arm_1//L_Arm_1//L_Arm_1//L_Arm_1//L_Arm_1//L_Arm_1//L_Arm_1//L_Arm_1//L_Arm_1//L_Arm_1//L_Arm_1//L_Arm_1//L_Arm_1//L_Arm_1//L_Arm_1//

var L_Arm_1_contenedor= new THREE.Object3D();
Hit_2_contenedor.add(L_Arm_1_contenedor);
L_Arm_1_contenedor.position.x=0;
L_Arm_1_contenedor.position.y=-2;
L_Arm_1_contenedor.position.z=-1;

var L_Arm_1_geometry = new THREE.BoxGeometry(1,1.5,1);
var L_Arm_1_Box = new THREE.Mesh( L_Arm_1_geometry, Bone_material );
L_Arm_1_Box.position.x=0;
L_Arm_1_Box.position.y=-1.5/2;
L_Arm_1_Box.position.z=0;
L_Arm_1_contenedor.add( L_Arm_1_Box );

//L_Arm_2//L_Arm_2//L_Arm_2//L_Arm_2//L_Arm_2//L_Arm_2//L_Arm_2//L_Arm_2//L_Arm_2//L_Arm_2//L_Arm_2//L_Arm_2//L_Arm_2//L_Arm_2//L_Arm_2//L_Arm_2

var L_Arm_2_contenedor= new THREE.Object3D();
L_Arm_1_contenedor.add(L_Arm_2_contenedor);
L_Arm_2_contenedor.position.x=0;
L_Arm_2_contenedor.position.y=-1.5;
L_Arm_2_contenedor.position.z=0;


var L_Arm_2_geometry = new THREE.BoxGeometry(0.8,1.5,0.8);
var L_Arm_2_Box = new THREE.Mesh( L_Arm_2_geometry, Bone_material );
L_Arm_2_Box.position.x=0;
L_Arm_2_Box.position.y=-1.5/2;
L_Arm_2_Box.position.z=0;
L_Arm_2_contenedor.add( L_Arm_2_Box );

//L_Manos//L_Manos//L_Manos//L_Manos//L_Manos//L_Manos//L_Manos//L_Manos//L_Manos//L_Manos//L_Manos//L_Manos//L_Manos//L_Manos//L_Manos//L_Manos//L_Manos//L_Manos
var L_Manos_contenedor= new THREE.Object3D();
L_Arm_2_contenedor.add(L_Manos_contenedor);
L_Manos_contenedor.position.x=0;
L_Manos_contenedor.position.y=-1.5;
L_Manos_contenedor.position.z=0;

var L_Manos_geometry = new THREE.BoxGeometry(1.5,0.3,1);
var L_Manos_Box = new THREE.Mesh( L_Manos_geometry, Bone_material );
L_Manos_Box.position.x=-0.5;
//L_Arm_2_Box.position.y=-2;
//L_Arm_2_Box.position.z=0;
L_Manos_contenedor.add( L_Manos_Box )






//R_Arm_1//R_Arm_1//R_Arm_1//R_Arm_1//R_Arm_1//R_Arm_1//R_Arm_1//R_Arm_1//R_Arm_1//R_Arm_1//R_Arm_1//R_Arm_1//R_Arm_1//R_Arm_1//R_Arm_1//R_Arm_1//

var R_Arm_1_contenedor= new THREE.Object3D();
Hit_2_contenedor.add(R_Arm_1_contenedor);
R_Arm_1_contenedor.position.x=0;
R_Arm_1_contenedor.position.y=-2;
R_Arm_1_contenedor.position.z=1;

var R_Arm_1_geometry = new THREE.BoxGeometry(1,1.5,1);
var R_Arm_1_Box = new THREE.Mesh( R_Arm_1_geometry, Bone_material );
R_Arm_1_Box.position.x=0;
R_Arm_1_Box.position.y=-1.5/2;
R_Arm_1_Box.position.z=0;
R_Arm_1_contenedor.add( R_Arm_1_Box );

//R_Arm_2//R_Arm_2//R_Arm_2//R_Arm_2//R_Arm_2//R_Arm_2//R_Arm_2//R_Arm_2//R_Arm_2//R_Arm_2//R_Arm_2//R_Arm_2//R_Arm_2//R_Arm_2//R_Arm_2//R_Arm_2

var R_Arm_2_contenedor= new THREE.Object3D();
R_Arm_1_contenedor.add(R_Arm_2_contenedor);
R_Arm_2_contenedor.position.x=0;
R_Arm_2_contenedor.position.y=-1.5;
R_Arm_2_contenedor.position.z=0;


var R_Arm_2_geometry = new THREE.BoxGeometry(0.8,1.5,0.8);
var R_Arm_2_Box = new THREE.Mesh( R_Arm_2_geometry, Bone_material );
R_Arm_2_Box.position.x=0;
R_Arm_2_Box.position.y=-1.5/2;
R_Arm_2_Box.position.z=0;
R_Arm_2_contenedor.add( R_Arm_2_Box );

//R_Manos//R_Manos//R_Manos//R_Manos//R_Manos//R_Manos//R_Manos//R_Manos//R_Manos//R_Manos//R_Manos//R_Manos//R_Manos//R_Manos//R_Manos//R_Manos//R_Manos//R_Manos
var R_Manos_contenedor= new THREE.Object3D();
R_Arm_2_contenedor.add(R_Manos_contenedor);
R_Manos_contenedor.position.x=0;
R_Manos_contenedor.position.y=-1.5;
R_Manos_contenedor.position.z=0;

var R_Manos_geometry = new THREE.BoxGeometry(1.5,0.3,1);
var R_Manos_Box = new THREE.Mesh( R_Manos_geometry, Bone_material );
R_Manos_Box.position.x=-0.5;
//R_Arm_2_Box.position.y=-2;
//R_Arm_2_Box.position.z=0;
R_Manos_contenedor.add( R_Manos_Box )


//Tail_1//Tail_1//Tail_1//Tail_1//Tail_1//Tail_1//Tail_1//Tail_1//Tail_1//Tail_1//Tail_1//Tail_1//Tail_1//Tail_1//Tail_1//Tail_1//Tail_1//Tail_1//Tail_1//Tail_1//Tail_1

var Tail_1_contenedor= new THREE.Object3D();
Hit_1_contenedor.add(Tail_1_contenedor);
Tail_1_contenedor.position.x=2;
Tail_1_contenedor.position.y=0;
Tail_1_contenedor.position.z=0;

var Tail_1_geometry = new THREE.BoxGeometry(2,1,1);
var Tail_1_Box = new THREE.Mesh( Tail_1_geometry, Bone_material );
Tail_1_Box.position.x=1;
Tail_1_Box.position.y=0;
Tail_1_Box.position.z=0;
Tail_1_contenedor.add( Tail_1_Box );

//Tail_2//Tail_2//Tail_2//Tail_2//Tail_2//Tail_2//Tail_2//Tail_2//Tail_2//Tail_2//Tail_2//Tail_2//Tail_2//Tail_2//Tail_2//Tail_2//Tail_2//Tail_2//Tail_2//Tail_2//Tail_2

var Tail_2_contenedor= new THREE.Object3D();
Tail_1_contenedor.add(Tail_2_contenedor);
Tail_2_contenedor.position.x=2;
Tail_2_contenedor.position.y=0;
Tail_2_contenedor.position.z=0;

var Tail_2_geometry = new THREE.BoxGeometry(1.5,0.8,0.8);
var Tail_2_Box = new THREE.Mesh( Tail_2_geometry, Bone_material );
Tail_2_Box.position.x=1.5/2;
Tail_2_Box.position.y=0;
Tail_2_Box.position.z=0;
Tail_2_contenedor.add( Tail_2_Box );

//Tail_3//Tail_3//Tail_3//Tail_3//Tail_3//Tail_3//Tail_3//Tail_3//Tail_3//Tail_3//Tail_3//Tail_3//Tail_3//Tail_3//Tail_3//Tail_3//Tail_3//Tail_3//Tail_3//Tail_3//Tail_3

var Tail_3_contenedor= new THREE.Object3D();
Tail_2_contenedor.add(Tail_3_contenedor);
Tail_3_contenedor.position.x=1.5;
Tail_3_contenedor.position.y=0;
Tail_3_contenedor.position.z=0;

var Tail_3_geometry = new THREE.BoxGeometry(1,0.7,0.7);
var Tail_3_Box = new THREE.Mesh( Tail_3_geometry, Bone_material );
Tail_3_Box.position.x=1/2;
Tail_3_Box.position.y=0;
Tail_3_Box.position.z=0;
Tail_3_contenedor.add( Tail_3_Box );








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
    //Hit_contenedor.rotation.x = operaciones(-0.1,1,0,0);

				Hit_1_contenedor.position.y= -0.6*Math.cos(2*time);
				Hit_2_contenedor.position.y= -0.04*Math.cos(2*time-0.2);


				Hit_1_contenedor.rotation.x = operaciones(-0.1,1,0,0);
				Hit_1_contenedor.rotation.y = operaciones(0.1,1,0,0);
				//Hit_1_contenedor.rotation.z = operaciones(0.01,2,0,0);

				Hit_2_contenedor.rotation.z = operaciones(0.1,2,0,0);


				//Face_contenedor.rotation.z = operaciones(0.05,2,0.2,0);

				Snout_contenedor.rotation.z = operaciones(0.02,2,0.4,0);

				L_Leg_1_contenedor.rotation.z = operaciones(0.5,1,0,0);
				L_Leg_2_contenedor.rotation.z = operaciones(0.5,1,2,0);
				//L_Pies_contenedor.rotation.z = operaciones(1,1,-1.5,0.5);

				R_Leg_1_contenedor.rotation.z = operaciones(-0.5,1,0,0);
				R_Leg_2_contenedor.rotation.z = operaciones(-0.5,1,2,0);
				//R_Pies_contenedor.rotation.z = operaciones(0.5,1,0,0.5);

				L_Arm_1_contenedor.rotation.z = operaciones(-0.5,1,0,0);
				L_Arm_2_contenedor.rotation.z = operaciones(-0.5,1,2,0);
				//L_Manos_contenedor.rotation.z = operaciones(-0.5,1,0,0.5);

				R_Arm_1_contenedor.rotation.z = operaciones(0.5,1,0,0);
				R_Arm_2_contenedor.rotation.z = operaciones(0.5,1,2,0);

				Tail_1_contenedor.rotation.z = operaciones(0.5,0.5,2,0);
				Tail_2_contenedor.rotation.z = operaciones(0.7,0.5,2.2,0);
				Tail_3_contenedor.rotation.z = operaciones(0.7,0.5,2.4,0);









				time += 0.1;
	}
}
