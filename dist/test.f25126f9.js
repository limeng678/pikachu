// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/*\u4F60\u597D\uFF0C\u6211\u53EB\u674E\u840C*/\n/*\u4ECA\u5929\u60F3\u7528CSS\u7ED9\u4F60\u753B\u4E00\u53EA\u53EF\u7231\u7684\u76AE\u5361\u4E18*/\n/*\u9996\u5148\u5B83\u6709\u9EC4\u8272\u7684\u76AE\u80A4*/\n.skin *{box-sizing: border-box;margin:0;padding:0}\n.skin *::before,*::after{box-sizing:border-box}\n\n.skin{\n    position: relative;\n    background:#ffe600;\n    min-height:50vh;   \n    bottom:0; \n}\n\n/*\u5C0F\u5DE7\u73B2\u73D1\u7684\u9F3B\u5B50*/\n\n.nose{\n    border: 10px solid black;\n    border-color: black transparent transparent;\n    border-bottom: none;\n    width: 0px;\n    height: 0px;\n    position: relative;\n    left: 50%;\n    top: 20px;\n    margin-left: -105px;\n    z-index:10   \n}\n  .yuan{\n    position: absolute;\n    width:20px;\n    height:6px;\n    top:-16px;\n    left:-10px;\n    border-radius: 10px 10px 0 0;\n    background:black;\n}\n  \n  @keyframes wave{\n      0%{\n          transform: rotate(0deg);\n      }\n      33%{\n          transform: rotate(5deg);\n      }\n      66%{\n          transform: rotate(-5deg);\n      }\n      100%{\n          transform: rotate(0deg);\n      }\n  }\n  .nose:hover{\n      transform-origin: center bottom;\n      animation: wave 300ms infinite linear;\n  }\n\n\n/*\u4E24\u4E2A\u5927\u773C\u775B*/\n\n.eye{\n    border:2px solid #000;\n    width:64px;\n    height:64px;\n    position:absolute;\n    left:50%;\n    top:45px;\n    margin-left:-32px;\n    background: #2e2e2e;\n    border-radius: 50%;\n}\n\n.eye::before{\n    content: '';\n    display:block;\n    border:3px solid #000;\n    width:30px;\n    height: 30px;\n    background: #fff;\n    border-radius: 50%;\n    position:relative;\n    left:5px;\n    top:2px;\n}\n\n.eye.left{\n    transform: translateX(-100px);\n}\n.eye.right{\n    transform: translateX(100px);\n}\n\n/*\u8FD8\u6709\u5F00\u5FC3\u5927\u7B11\u7684\u5634\u5DF4*/\n\n.mouth{ \n    \n    width:200px;\n    height:200px;\n    position:absolute;\n    left:50%;\n    top:70px;\n    margin-left: -195px;\n}\n\n.mouth .up{\n    position: relative;\n    top:-20px;\n    z-index: 1;\n}\n.mouth .up .lip{\n    border:3px solid black;\n    height:30px;\n    width:100px;\n    background: #ffe600;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    position: relative;\n    position: absolute;\n    left:50%;\n    margin-left: -50px;\n\n}\n.mouth .up .lip.left{   \n    border-radius: 0 0 0 50px; \n    transform: rotate(-15deg)translateX(-53px);    \n}\n.mouth .up .lip.right{\n    \n    border-radius: 0 0 50px 0;\n    transform: rotate(15deg)translateX(53px);    \n}\n\n.mouth .up .lip::before{\n    content:'';\n    display:block;\n    width:7px;\n    height:30px;\n    position: absolute;\n    bottom: 0;\n    background: #ffe600;\n\n\n}\n.mouth .up .lip.left::before{    \n    right:-6px;        \n}\n\n.mouth .up .lip.right::before{    \n    left:-6px;    \n}\n.mouth .down{\n    \n    height:180px;\n    position: absolute;\n    top:0px;\n    width:100%;\n    overflow: hidden;    \n}\n\n.mouth .down .yuan1{\n    border:3px solid black;\n    width:150px;\n    height:1000px;\n    position:absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left:-75px;\n    border-radius: 75px/300px;\n    background: #9b000a;\n    overflow: hidden;    \n}\n.mouth .down .yuan1 .yuan2{\n    width:200px;\n    height:300px;\n    background:#ff485f;\n    position:absolute;\n    bottom:-155px;\n    left:50%;\n    margin-left:-100px;\n    border-radius: 100px;\n}\n\n/*\u7EA2\u7EA2\u7684\u8138\u988A*/\n\n.face{\n    position: absolute;\n    margin-left:-114px;\n    border:3px solid black;\n    width: 88px;\n    height: 88px;\n    top: 109px;\n    z-index: 3;\n}\n\n.face.left{\n    transform: translateX(-142px);\n    background: #ff0000;\n    border-radius: 50%;\n}\n\n.face.right{\n    transform: translateX(142px);\n    background: #ff0000;\n    border-radius: 50%;\n}\n\n/*\u6D3B\u52A8\u4E00\u4E0B\u773C\u775B*/\n\n@keyframes eyeMove{\n    0%,100%{\n      top:3px;\n      left:3px;\n    }\n    30%,60%,70%{\n      top: 0;\n      left: 23px;\n    }\n    40%{\n      top: 0;\n      left: 15px;\n    }\n    50%{\n      top: 0;\n      left: 5px;\n    }\n    80%,90%{\n      top: 30px;\n      left: 15px;\n    }\n  }\n\n  .eye::before{ \n    animation: eyeMove 3s infinite;\n  }\n\n/*\u52A8\u52A8\u5634\u5DF4*/\n\n@keyframes mouthMove {\n    0%,46%,54%,100%{\n        height: 180px;\n      }\n      50%{\n        height: 20px;\n      }\n  }\n.mouth .down{\n    animation: mouthMove 4s infinite;\n  }\n  \n  /*\u597D\u5566\uFF0C\u8FD9\u53EA\u53EF\u7231\u7684\u76AE\u5361\u4E18\u5C31\u9001\u7ED9\u4F60\u5566*/\n  /*\u6700\u540E\u53EF\u4EE5\u628A\u9F20\u6807\u653E\u5728\u5B83\u7684\u5634\u5DF4\u4E0A*/\n  /*\u8BA9\u5B83\u5531\u9996\u6B4C\u7ED9\u4F60\u542C*/\n  /*\u5E0C\u671B\u5B83\u80FD\u7ED9\u4F60\u5E26\u6765\u5FEB\u4E50*/\n";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 1;
demo.innerText = _css.default.substr(0, n);
demo2.innerHTML = _css.default.substr(0, n);
var time = 100;

var run = function run() {
  n += 1;

  if (n > _css.default.length) {
    window.clearInterval(id);
    return;
  }

  demo.innerText = _css.default.substr(0, n);
  demo2.innerHTML = _css.default.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};

var play = function play() {
  return setInterval(run, time);
};

var pause = function pause() {
  window.clearInterval(id);
};

var slow = function slow() {
  pause();
  time = 300;
  id = play();
};

var normal = function normal() {
  pause();
  time = 100;
  id = play();
};

var fast = function fast() {
  pause();
  time = 0;
  id = play();
};

var id = play();

btnPlay.onclick = function () {
  id = play();
};

btnPause.onclick = function () {
  pause();
};

btnSlow.onclick = slow;
btnFast.onclick = fast;
btnNormal.onclick = normal;
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.f25126f9.js.map