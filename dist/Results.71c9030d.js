parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"EcQx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("react")),t=require("@reach/router");function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(n){function o(){return r(this,o),i(this,l(o).apply(this,arguments))}return f(o,e.default.Component),a(o,[{key:"render",value:function(){var n=this.props,o=n.name,r=n.animal,u=n.breed,a=n.media,i=n.location,c=n.id,l=[];a&&a.photos&&a.photos.photo&&(l=a.photos.photo.filter(function(e){return"pn"===e["@size"]}));var f=l[0]?l[0].value:"http://placecorgi.com/300/300";return e.default.createElement(t.Link,{to:"/details/".concat(c),className:"pet"},e.default.createElement("div",{className:"image-container"},e.default.createElement("img",{src:f,alt:o})),e.default.createElement("div",{className:"info"},e.default.createElement("h1",null,o),e.default.createElement("h2",null,r," - ",u," - ",i)))}}]),o}(),y=s;exports.default=y;
},{"react":"1n8/","@reach/router":"VJZj"}],"tKTj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("react")),t=a(require("petfinder-client")),r=a(require("./Pet")),n=a(require("./SearchBox")),o=require("react-redux");function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),e}function l(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=(0,t.default)({key:"99be234a728e8bdebb7ca46a2c558587",secret:"93c91dbb309b482ba6b6d9eec874ddbb"}),m=function(t){function o(e){var t;return c(this,o),(t=l(this,s(o).call(this,e))).search=function(){y.pet.find({output:"full",animal:t.props.animal,breed:t.props.breed,location:t.props.location}).then(function(e){var r;r=e.petfinder.pets&&e.petfinder.pets.pet?Array.isArray(e.petfinder.pets.pet)?e.petfinder.pets.pet:[e.petfinder.pets.pet]:[],t.setState({pets:r})})},t.state={pets:[]},t}return d(o,e.default.Component),f(o,[{key:"componentDidMount",value:function(){this.search()}},{key:"render",value:function(){return e.default.createElement("div",{className:"search"},e.default.createElement(n.default,{search:this.search}),this.state.pets.map(function(t){var n;return Array.isArray(t.breeds.breed)&&(n=t.breeds.breed.join(", ")),e.default.createElement(r.default,{key:t.id,id:t.id,animal:t.animal,name:t.name,breed:n,media:t.media,location:"".concat(t.contact.city,", ").concat(t.contact.state)})}))}}]),o}(),h=function(e){return{location:e.location,breed:e.breed,animal:e.animal}},v=(0,o.connect)(h)(m);exports.default=v;
},{"react":"1n8/","petfinder-client":"9HC7","./Pet":"EcQx","./SearchBox":"fxuQ","react-redux":"jYI/"}]},{},[], null)
//# sourceMappingURL=dist/Results.71c9030d.map