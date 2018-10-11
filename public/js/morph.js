"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}var lineEq=function t(e,n,i,a,o){var r=(e-n)/(i-a),s;return r*o+(n-r*a)},getMousePos=function t(e){var n=0,i=0;if(!e)var a=window.event;return e.pageX||e.pageY?(n=e.pageX,i=e.pageY):(e.clientX||e.clientY)&&(n=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,i=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:n,y:i}},debounce=function t(a,o,r){var s;return function(){var e=this,n=arguments,t=function t(){s=null,r||a.apply(e,n)},i=r&&!s;clearTimeout(s),s=setTimeout(t,o),i&&a.apply(e,n)}},MorphingBG=function(){function e(t){_classCallCheck(this,e),this.DOM={},this.DOM.el=t,this.DOM.el.style.opacity=0,this.DOM.el.style.transition="transform 2s ease-out",this.DOM.pathEl=this.DOM.el.querySelector("path"),this.paths=this.DOM.pathEl.getAttribute("pathdata:id").split(";"),this.paths.splice(this.paths.length,0,this.DOM.pathEl.getAttribute("d")),this.win={width:window.innerWidth,height:window.innerHeight},this.animate(),this.initEvents()}return _createClass(e,[{key:"animate",value:function t(){anime.remove(this.DOM.pathEl),anime({targets:this.DOM.pathEl,duration:1e4,easing:[.5,0,.5,1],d:this.paths,loop:!0})}},{key:"initEvents",value:function t(){var s=this,h=this.win.width/8,c=this.win.height/4,l=45,u=[.8,2],d=[.8,2],e=function t(r){requestAnimationFrame(function(){if(s.started){var t=getMousePos(r),e=2*l/s.win.height*t.y-l,n=t.x<s.win.width/2?lineEq(u[0],u[1],s.win.width/2,0,t.x):lineEq(u[1],u[0],s.win.width,s.win.width/2,t.x),i=t.y<s.win.height/2?lineEq(d[0],d[1],s.win.height/2,0,t.y):lineEq(d[1],d[0],s.win.height,s.win.height/2,t.y),a=2*h/s.win.width*t.x-h,o=2*c/s.win.height*t.y-c;s.DOM.el.style.transform="translate3d(".concat(a,"px, ").concat(o,"px,0) rotate3d(0,0,1,").concat(e,"deg) scale3d(").concat(n,",").concat(i,",1)")}else s.started=!0,anime({targets:s.DOM.el,duration:300,easing:"linear",opacity:[0,1]})})},n=debounce(function(){return s.win={width:window.innerWidth,height:window.innerHeight}},20);document.addEventListener("mousemove",e),document.addEventListener("touchstart",e),window.addEventListener("resize",function(t){return n()})}}]),e}();new MorphingBG(document.querySelector("svg.scene"));