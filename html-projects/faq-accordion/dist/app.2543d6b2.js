parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"G5Xn":[function(require,module,exports) {

},{}],"P4gr":[function(require,module,exports) {
var r=function(){document.addEventListener("click",function(r){if("question"===r.target.id){var a=r.target.parentElement.parentElement.children[1].classList,t=r.target.classList,e=r.target.nextElementSibling.classList;e.contains("fq-card__rotate--arrow-up")||e.contains("fq-card__rotate--arrow-down")?e.contains("fq-card__rotate--arrow-up")&&!e.contains("fq-card__rotate--arrow-down")?(e.remove("fq-card__rotate--arrow-up"),e.add("fq-card__rotate--arrow-down"),a.toggle("fq-card__answer--hide"),t.toggle("fq-card__header--bold")):e.contains("fq-card__rotate--arrow-down")&&(e.add("fq-card__rotate--arrow-up"),e.remove("fq-card__rotate--arrow-down"),a.toggle("fq-card__answer--hide"),t.toggle("fq-card__header--bold")):(e.add("fq-card__rotate--arrow-up"),a.toggle("fq-card__answer--hide"),t.toggle("fq-card__header--bold"))}})};r();
},{}],"ffN9":[function(require,module,exports) {
"use strict";require("./scss/app.scss"),require("./scripts/functions.js");
},{"./scss/app.scss":"G5Xn","./scripts/functions.js":"P4gr"}]},{},["ffN9"], null)
//# sourceMappingURL=app.2543d6b2.js.map