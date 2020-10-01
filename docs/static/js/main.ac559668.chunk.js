(this["webpackJsonp@luxdamore/adidas-interview"]=this["webpackJsonp@luxdamore/adidas-interview"]||[]).push([[0],{104:function(e,a,t){e.exports=t(286)},109:function(e,a,t){},283:function(e,a,t){},286:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(99),o=t.n(r),i=(t(109),t(103)),c=t(57),s=t(58),u=t(60),m=t(59),d=t(54),h=t(3),p=t(100),b=t(101),f=t.n(b),g=(t(283),l.a.lazy((function(){return t.e(8).then(t.bind(null,301))}))),v=l.a.lazy((function(){return t.e(7).then(t.bind(null,302))})),E=l.a.lazy((function(){return t.e(6).then(t.bind(null,303))})),y=l.a.lazy((function(){return t.e(10).then(t.bind(null,304))})),w=l.a.lazy((function(){return Promise.all([t.e(3),t.e(4)]).then(t.bind(null,308))})),k=l.a.lazy((function(){return t.e(9).then(t.bind(null,305))})),C=l.a.lazy((function(){return t.e(5).then(t.bind(null,306))})),N=l.a.lazy((function(){return t.e(11).then(t.bind(null,307))})),S=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={availableColors:["#f39c12","#2980b9","#10ac84","#bdc3c7","#34495e"],hue:165,luminosity:.8,saturation:.36,backgroundColor:"#10ac84"},e.handleShowSolution=function(){e.setState({played:!e.state.played})},e.handleChangeComplete=function(a){var t=a.rgb,n=t.r,l=t.g,r=t.b,o=a.hsl;e.setState({hue:o.h,luminosity:o.l,saturation:o.s,backgroundColor:"rgb(".concat(n,", ").concat(l,", ").concat(r,")")})},e.handleRandomColor=function(){var a={h:Math.floor(Math.random()*Math.floor(361)),l:Math.random(),s:Math.random()},t=f.a.rgb.hsl(a.h,a.l,a.s),n=Object(i.a)(t,3),l=n[0],r=n[1],o=n[2];e.handleChangeComplete({hsl:a,rgb:{r:l,g:r,b:o}})},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){window.console.info("%c Luca Iaconelli ","color: #fff; background-color: #333; padding: 4px 2px;","\ud83e\udd18 Ready to rock")}},{key:"render",value:function(){var e=this;return l.a.createElement(d.a,{basename:"".concat("/adidas-interview","/")},l.a.createElement("div",{className:"app container",style:{backgroundColor:this.state.backgroundColor}},l.a.createElement("header",{className:"header"},l.a.createElement("nav",null,l.a.createElement("ul",{className:"navigation"},l.a.createElement("li",{className:"navigation-item"},l.a.createElement("a",{href:"".concat("/adidas-interview","/requirements/REACT-Challenge-eCom.pdf"),rel:"noopener noreferrer",target:"_blank",title:"About",className:"btn btn--link"},"About")),l.a.createElement("li",{className:"navigation-item"},l.a.createElement(d.b,{exact:!0,to:"/",activeClassName:"active",title:"Go to homepage"},l.a.createElement("img",{src:"".concat("/adidas-interview","/imgs/logo.svg"),className:"header__logo image",alt:"Adidas Logo"}))),l.a.createElement("li",{className:"navigation-item"},l.a.createElement("a",{href:"https://github.com/LuXDAmore/adidas-interview",rel:"noopener noreferrer",target:"_blank",title:"Github",className:"btn btn--link"},"Github"))))),l.a.createElement("main",{className:"content"},l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/"},l.a.createElement(l.a.Suspense,{fallback:l.a.createElement("div",{className:"loading spinner"})},l.a.createElement(g,null))),l.a.createElement(h.a,{exact:!0,path:"/easy",render:function(a){return l.a.createElement(l.a.Suspense,{fallback:l.a.createElement("div",{className:"loading spinner"})},l.a.createElement(w,Object.assign({key:"easy"},a,{hue:e.state.hue,luminosity:e.state.luminosity,saturation:e.state.saturation,played:e.state.played,columns:"3",rows:"3",level:"0"})))}}),l.a.createElement(h.a,{exact:!0,path:"/medium",render:function(a){return l.a.createElement(l.a.Suspense,{fallback:l.a.createElement("div",{className:"loading spinner"})},l.a.createElement(w,Object.assign({key:"medium"},a,{hue:e.state.hue,luminosity:e.state.luminosity,saturation:e.state.saturation,played:e.state.played,columns:"4",rows:"4",level:"1"})))}}),l.a.createElement(h.a,{exact:!0,path:"/hard",render:function(a){return l.a.createElement(l.a.Suspense,{fallback:l.a.createElement("div",{className:"loading spinner"})},l.a.createElement(w,Object.assign({key:"hard"},a,{hue:e.state.hue,luminosity:e.state.luminosity,saturation:e.state.saturation,played:e.state.played,columns:"5",rows:"5",level:"2"})))}}),l.a.createElement(h.a,{path:"/game-over/:points",render:function(e){return l.a.createElement(l.a.Suspense,{fallback:l.a.createElement("div",{className:"loading spinner"})},l.a.createElement(v,null),l.a.createElement(C,e),l.a.createElement(N,null))}}),l.a.createElement(h.a,{path:"/you-win/:points",render:function(e){return l.a.createElement(l.a.Suspense,{fallback:l.a.createElement("div",{className:"loading spinner"})},l.a.createElement(y,null),l.a.createElement(C,e),l.a.createElement(N,null))}}),l.a.createElement(h.a,{path:"/scoreboard"},l.a.createElement(l.a.Suspense,{fallback:l.a.createElement("div",{className:"loading spinner"})},l.a.createElement(k,null),l.a.createElement(N,null))),l.a.createElement(h.a,{path:"*"},l.a.createElement(l.a.Suspense,{fallback:l.a.createElement("div",{className:"loading spinner"})},l.a.createElement(E,null),l.a.createElement(N,null))))),l.a.createElement("footer",{className:"footer"},l.a.createElement("button",{type:"button","aria-pressed":this.state.played,className:"btn btn--small btn--border text--white",onClick:this.handleShowSolution},"Show solutions"),l.a.createElement(p.CirclePicker,{circleSize:16,circleSpacing:8,colors:this.state.availableColors,color:this.state.background,onChangeComplete:this.handleChangeComplete,width:"112px"}),l.a.createElement("button",{type:"button",className:"btn btn--small btn--border text--white",onClick:this.handleRandomColor},"Randomize!"))))}}]),t}(l.a.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/adidas-interview",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/adidas-interview","/service-worker.js");x?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):A(a,e)}))}}()}},[[104,1,2]]]);
//# sourceMappingURL=main.ac559668.chunk.js.map