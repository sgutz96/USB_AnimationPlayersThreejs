var Entorno = function()
{
	this.contenedor=new THREE.Object3D();

	//var loader = new THREE.TextureLoader();
	//var texture = loader.load("texturas/rock.jpg");
	var geometry = new THREE.BoxGeometry(400,0.4,400);
	//var material = new THREE.MeshToonMaterial({ color: 0xD1BE08 /*, map: texture, specularMap: texture*/});
	var material = new THREE.MeshBasicMaterial( { color: 0x085F08 } );
	var cube = new THREE.Mesh( geometry, material );
	this.contenedor.add( cube );
	scene.add(this.contenedor)

	this.actualizar=function()
	{
		//cube.rotation.x+=0.1
	}
}
