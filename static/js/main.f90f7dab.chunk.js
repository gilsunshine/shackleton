(this.webpackJsonpshackleton=this.webpackJsonpshackleton||[]).push([[0],{10:function(e,n,t){e.exports=t(19)},15:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),a=t(8),r=t.n(a),c=(t(15),t(1)),s=t(5),l=t(2),d=t(3),u=t(4),h=t(9),w=t.n(h),f=(t(16),function(e){(function(e){var n,t,o,i,a,r=0,c=0;function s(){o.position.x=15*Math.cos(r),o.position.z=15*Math.sin(r)+c,requestAnimationFrame(s),a.update(),t.render(n,o)}return function(){(t=new u.WebGLRenderer({canvas:e,antialias:!0})).setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",(function(){t.setSize(window.innerWidth,window.innerHeight),o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix()})),document.body.appendChild(t.domElement),n=new u.Scene;var s=new u.BoxGeometry(10,10,10),l=new u.MeshBasicMaterial({color:2017398});(i=new u.Mesh(s,l)).position.set(n.position.x,n.position.y,-200),n.add(i),(o=new u.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.01,1e3)).position.z=1e3,(a=new w.a(o,t.domElement)).enableDamping=!0,a.dampingFactor=.2,a.minPolarAngle=Math.PI/2,a.maxPolarAngle=Math.PI/2,a.enablePan=!1,a.zoomSpeed=4,a.enableRotate=!1,document.addEventListener("keydown",(function(e){var n=e.which;38===n?c+=100:40===n?c-=100:39===n?r+=Math.PI/8:37===n&&(r-=Math.PI/8)}),!1);var d=new u.PolarGridHelper(1e3,16,20,64);d.position.set(0,-10,0),n.add(d)}(),s(),{render:s}})(function(e,n){var t=e.createElement("canvas");return n.appendChild(t),t}(document,e)).render()}),m=function(e){Object(d.a)(t,e);var n=Object(l.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){f(this.threeRootElement)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{ref:function(n){return e.threeRootElement=n}})}}]),t}(o.Component),p=function(e){Object(d.a)(t,e);var n=Object(l.a)(t);function t(){var e;return Object(c.a)(this,t),(e=n.call(this)).hideInstructions=function(){e.setState({show:!e.state.show})},e.state={show:!0},e}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{onClick:this.hideInstructions},this.state.show?i.a.createElement("div",{style:g}," ",i.a.createElement("strong",{style:v},"Welcome to Shackleton's Hut"),i.a.createElement("p",{style:v},"Click and drag to rotate your view. Click on the instructions to hide them.")," "):i.a.createElement("div",{style:k},i.a.createElement("strong",{style:b},"Instructions")))}}]),t}(i.a.Component),v={color:"#555",fontFamily:"'Roboto Mono', monospace",fontSize:"0.8em"},g={display:"flex",flexDirection:"column",position:"absolute",margin:"2%",padding:"1%",backgroundColor:"#eee",zIndex:10,width:"15%"},b={color:"#000",fontFamily:"'Roboto Mono', monospace",fontSize:"0.8em"},k={display:"inline-block",position:"absolute",margin:"2%",padding:"1%",backgroundColor:"#555",zIndex:10},y=function(e){Object(d.a)(t,e);var n=Object(l.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null),i.a.createElement(m,null))}}]),t}(o.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/shackleton",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/shackleton","/service-worker.js");E?(!function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):j(e)}))}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.f90f7dab.chunk.js.map