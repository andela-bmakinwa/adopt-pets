parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"a8+i":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("react"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?i(e):t}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(t){function n(){var e,t,o;r(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return u(t,(o=t=u(this,(e=c(n)).call.apply(e,[this].concat(i))),t.state={photos:[],active:0},t.handleIndexClick=function(e){t.setState({active:+e.target.dataset.index})},o))}return l(n,e.default.Component),a(n,[{key:"render",value:function(){var t=this,n=this.state,r=n.photos,o=n.active;return e.default.createElement("div",{className:"carousel"},e.default.createElement("img",{src:r[o].value,alt:"primary animal"}),e.default.createElement("div",{className:"carousel-smaller"},r.map(function(n,r){return e.default.createElement("img",{onClick:t.handleIndexClick,key:n.value,"data-index":r,src:n.value,className:r===o?"active":"",alt:"animal thumbnail"})})))}}],[{key:"getDerivedStateFromProps",value:function(e){var t=e.media,n=[];return t&&t.photos&&t.photos.photo&&(n=t.photos.photo.filter(function(e){return"pn"===e["@size"]})),{photos:n}}}]),n}(),p=s;exports.default=p;
},{"react":"1n8/"}],"XGSj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("react")),t=a(require("petfinder-client")),n=a(require("react-loadable")),r=require("@reach/router"),o=a(require("./Carousel"));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function d(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=(0,t.default)({key:"99be234a728e8bdebb7ca46a2c558587",secret:"93c91dbb309b482ba6b6d9eec874ddbb"}),y=(0,n.default)({loader:function(){return require("_bundle_loader")(require.resolve("./AdoptModalContent"))},modules:["./AdoptModalContent"],webpack:function(){return[require.resolveWeak("./AdoptModalContent")]},loading:function(){return e.default.createElement("p",null,"Loading Modal...")}}),h=function(t){function n(){var e,t,r;u(this,n);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return d(t,(r=t=d(this,(e=s(n)).call.apply(e,[this].concat(a))),t.state={loading:!0,showModal:!1},t.toggleModal=function(){return t.setState({showModal:!t.state.showModal})},r))}return p(n,e.default.Component),c(n,[{key:"componentDidMount",value:function(){var e=this;m.pet.get({output:"full",id:this.props.id}).then(function(t){var n,r=t.petfinder.pet;n=Array.isArray(t.petfinder.pet.breeds.breed)?r.breeds.breed.join(", "):r.breeds.breed,e.setState({name:r.name,breed:n,animal:r.animal,location:"".concat(r.contact.city,", ").concat(r.contact.state),description:r.description,media:r.media,loading:!1})}).catch(function(){(0,r.navigate)("/")})}},{key:"render",value:function(){if(this.state.loading)return e.default.createElement("h1",null,"Current loading...");var t=this.state,n=t.name,r=t.animal,a=t.breed,l=t.location,u=t.description,i=t.media,c=t.showModal;return e.default.createElement("div",{className:"details"},e.default.createElement(o.default,{media:i}),e.default.createElement("div",null,e.default.createElement("h1",null,n),e.default.createElement("h2",null,r," - ",a," - ",l),e.default.createElement("button",{onClick:this.toggleModal},"Adopt ",n),e.default.createElement("p",null,u),c?e.default.createElement(y,{toggleModal:this.toggleModal,name:n}):null))}}]),n}(),g=h;exports.default=g;
},{"react":"1n8/","petfinder-client":"9HC7","react-loadable":"NEjq","@reach/router":"VJZj","./Carousel":"a8+i","_bundle_loader":"21/1","./AdoptModalContent":[["AdoptModalContent.af511fb5.js","TNhG"],"AdoptModalContent.af511fb5.map","TNhG"]}],"3Fhe":[function(require,module,exports) {
var t=null;function r(){return t||(t=e()),t}function e(){try{throw new Error}catch(r){var t=(""+r.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return n(t[0])}return"/"}function n(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=r,exports.getBaseURL=n;
},{}],"21/1":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new u(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(s))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function s(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),s=n[i];return s?o[e]=s(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}):void 0}function u(r){this.executor=r,this.promise=null}u.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},u.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"3Fhe"}],"Yi9z":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("21/1");b.register("js",require("Yi9z"));b.load([]).then(function(){require("XGSj");});
},{}]},{},[0], null)
//# sourceMappingURL=dist/Details.7b7c8023.map