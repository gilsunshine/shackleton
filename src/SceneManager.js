import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols'
import uuidv4 from 'uuid/v4'


export default canvas => {

  var scene, renderer, camera;
  var cube;
  var controls;
  let last_known_scroll_position = 0;
  let prev_scroll = 0;
  let ticking = false;
  let theta = 0;
  let camZ = 0;
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
			camera.position.z = 1000;

			controls = new OrbitControls( camera, renderer.domElement );
			controls.enableDamping = true;
			controls.dampingFactor = 0.2;
      controls.minPolarAngle = Math.PI/2; // radians
	    controls.maxPolarAngle = Math.PI/2; // radians
      controls.enablePan = false;
      controls.zoomSpeed = 4;
      // controls.enableZoom = false;
      controls.enableRotate = false;
      // controls.enableKeys = true;

      // function doSomething(scroll_pos) {
      //   console.log("scroll pos: " + scroll_pos);
      //     console.log("last known scroll pos: " + prev_scroll);
      //   if (scroll_pos > prev_scroll){
      //     camera.position.z += 100;
      //     console.log("greater");
      //   } else if (scroll_pos < prev_scroll){
      //     camera.position.z -= 100;
      //     console.log("les");
      //   }
      //   prev_scroll = scroll_pos;
      // }
      //
      // window.addEventListener('scroll', function(e) {
      //   last_known_scroll_position = window.scrollY;
      //
      //   if (!ticking) {
      //     window.requestAnimationFrame(function() {
      //       doSomething(last_known_scroll_position);
      //       ticking = false;
      //     });
      //
      //     ticking = true;
      //   }
      // });

      document.addEventListener("keydown", onDocumentKeyDown, false)
     function onDocumentKeyDown(event) {
       let keyCode = event.which
       if (keyCode === 38 ) {
         camZ += 100;
       } else if (keyCode === 40) {
         camZ -=100;
       }
       else if (keyCode === 39) {
         theta += Math.PI / 8;
       }
       else if (keyCode === 37) {
         theta -= Math.PI / 8;
       }
     }

      var radius = 1000;
      var radials = 16;
      var circles = 20;
      var divisions = 64;

      var polarGrid = new THREE.PolarGridHelper( radius, radials, circles, divisions );
      polarGrid.position.set(0, -10, 0);
      scene.add( polarGrid );

  }


  function render()
  {
    camera.position.x = 15 * Math.cos( theta );
    camera.position.z = 15 * Math.sin( theta ) + camZ;
    requestAnimationFrame ( render );
    controls.update();
    renderer.render (scene, camera);
  }

    return{render}

}
