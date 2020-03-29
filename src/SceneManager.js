import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js'

export default canvas => {


  var scene, renderer, camera;
  var cube;
  let rot = true;
  let zoomLevel = 0;
  let zoomSpeed = 20;

//
  init();
  render();

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

      var cubeGeometry = new THREE.BoxGeometry (10,10,10);
      var cubeMaterial = new THREE.MeshBasicMaterial ({color: 0x1ec876});
      cube = new THREE.Mesh (cubeGeometry, cubeMaterial);

      cube.position.set (scene.position.x, scene.position.y, -200);
      scene.add (cube);

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
