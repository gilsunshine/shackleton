import * as THREE from 'three';
import React from 'react'

export default canvas => {


  var scene, renderer, camera;
  var cube;
  let theta = 0;
  let rot = true;
  let curPos = 0;
  let zoomLevel = 0;

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

      camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.01, 1000 );

      document.addEventListener("keydown", onDocumentKeyDown, false)
       function onDocumentKeyDown(event) {
         let keyCode = event.which
         if (keyCode === 87) {
           camera.translateZ(-10)
           zoomLevel += 1;
           if (zoomLevel === 0){
             rot = true;
           } else {
             rot = false;
           }
         } else if (keyCode === 83) {
           if (zoomLevel > 0){
             camera.translateZ(10)
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

  }

  function render()
  {
    requestAnimationFrame ( render );
    renderer.render (scene, camera);
  }

    return{render}

}
