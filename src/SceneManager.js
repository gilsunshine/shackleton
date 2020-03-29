import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js'

export default canvas => {


  var scene, renderer, camera;
  let rot = true;
  let zoomLevel = 0;
  let zoomSpeed = 20;
  let materials = [[],[],[],[]];

//
  init();
  render();

  function rotateAboutPoint(obj, point, axis, theta, pointIsWorld){
    pointIsWorld = (pointIsWorld === undefined)? false : pointIsWorld;

    if(pointIsWorld){
        obj.parent.localToWorld(obj.position); // compensate for world coordinate
    }

    obj.position.sub(point); // remove the offset
    obj.position.applyAxisAngle(axis, theta); // rotate the POSITION
    obj.position.add(point); // re-add the offset

    if(pointIsWorld){
        obj.parent.worldToLocal(obj.position); // undo world coordinates compensation
    }

    obj.rotateOnAxis(axis, theta); // rotate the OBJECT
}

  function init()
  {
      renderer = new THREE.WebGLRenderer( {canvas:canvas, antialias:true} );

      renderer.setSize( window.innerWidth, window.innerHeight );
      window.addEventListener('resize', ()=>{
        renderer.setSize( window.innerWidth, window.innerHeight );
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
      })

      document.body.appendChild (renderer.domElement);

      scene = new THREE.Scene();

      let origin = new THREE.Vector3(0,0,0);
      let originAxis = new THREE.Vector3(0,1,0);

      for (let i = 0; i < materials.length; i++){
        var texture = new THREE.TextureLoader().load( 'materials/00/00_00.jpg' );
        let material = new THREE.MeshBasicMaterial( { map: texture } );
        var geometry = new THREE.PlaneGeometry( 30, 5, 32 );
        var plane = new THREE.Mesh( geometry, material );
        plane.position.set (scene.position.x, scene.position.y, -220);
        scene.add( plane );
        rotateAboutPoint(plane, origin, originAxis, (i+1) * Math.PI / 8, true);
      }


      camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 0.01, 1000 );

      document.addEventListener("keydown", onDocumentKeyDown, false)
       function onDocumentKeyDown(event) {
         let keyCode = event.which
         if (keyCode === 87) {
           camera.translateZ(-zoomSpeed)
           zoomLevel += 1;
           if (zoomLevel === 0){
             rot = true;
           } else {
             rot = false;
           }
         } else if (keyCode === 83) {
           if (zoomLevel > 0){
             camera.translateZ(zoomSpeed)
             zoomLevel -=  1;
           }
           if (zoomLevel === 0){
             rot = true;
           } else {
             rot = false;
           }
         }

         else if (keyCode === 65 && rot) {
           camera.rotation.y += Math.PI / 8
         }
         else if (keyCode === 68 && rot) {
           camera.rotation.y -= Math.PI / 8
         }
       }

      var radius = 1000;
      var radials = 16;
      var circles = 20;
      var divisions = 64;

      var polarGrid = new THREE.PolarGridHelper( radius, radials, circles, divisions);
      polarGrid.position.set(0, -10, 0);
      scene.add( polarGrid );

      document.addEventListener("click", returnOrigin);

      function returnOrigin() {
        camera.translateZ(zoomLevel * zoomSpeed)
        zoomLevel = 0;
        rot = true;
      }

      //TWEEN

      // let posX;
      // let posY;
      // let posZ;
      //
      // var from = {
      //   x : camera.position.x,
      //   y : camera.position.y,
      //   z : camera.position.z
      // };
      //
      // var to = {
      //   x : posX,
      //   y : posY,
      //   z : posZ
      // };
      // var tween = new TWEEN.Tween(from)
      // .to(to,600)
      // .easing(TWEEN.Easing.Linear.None)
      // .onUpdate(function () {
      //   camera.position.set(this.x, this.y, this.z);
      //   // camera.lookAt(new THREE.Vector3(0,0,0));
      // })
      // // .onComplete(function () {
      // //   camera.lookAt(new THREE.Vector3(0,0,0));
      // // })
      // .start();

  }

  function render()
  {
    TWEEN.update();
    requestAnimationFrame ( render );
    renderer.render (scene, camera);
  }

    return{render}

}
