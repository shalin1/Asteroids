/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(4);
const MovingObject = __webpack_require__(1);
const Asteroid = __webpack_require__(2);

const canvasEl = document.getElementById('canvas');
const ctx = canvasEl.getContext('2d');

//testing
window.Game = Game;
window.ctx = ctx;
window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
console.log('webpack is working!');

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function MovingObject(options){
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function draw(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  
  ctx.arc(
    this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false
  );
  ctx.fill();
};

MovingObject.prototype.move = function move(){
  this.pos = [this.pos[0]+this.vel[0],this.pos[1]+this.vel[1]];
};

module.exports = MovingObject;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(3);
const MovingObject = __webpack_require__(1);

const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
  SPEED: 4
};

function Asteroid(options){
  options = options || {};
  options.color = DEFAULTS.COLOR;
  options.pos = options.pos;
  options.radius = DEFAULTS.RADIUS;
  options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
  
  MovingObject.call(this,options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

const Util = {
  inherits(childClass,parentClass){
    childClass.prototype = Object.create(parentClass.prototype);
    childClass.prototype.constructor = childClass;
  },
  
  randomVec(length) {
  const deg = 2 * Math.PI * Math.random();
  return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
  return [vec[0] * m, vec[1] * m];
  }

};

module.exports = Util;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(2);
const Util = __webpack_require__(3);

function Game(){
  this.asteroids = [];
  this.addAsteroids();
}

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 4;

Game.prototype.addAsteroids = function addAsteroids(){
  for(let i=0;i<Game.NUM_ASTEROIDS;i++){
    this.asteroids.push(new Asteroid({pos:this.randomPos()}));
  }
};

Game.prototype.randomPos = function randomPos() {
  return [Game.DIM_X*Math.random(),Game.DIM_Y*Math.random()];
};

Game.prototype.draw = function draw(ctx){
  ctx.clearRect(0,0,this.DIM_X,this.DIM_Y);
  this.asteroids.forEach(function(asteroid){
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function moveObjects(){
  this.asteroids.forEach(function(asteroid){
    asteroid.move();
  });
};   

module.exports = Game;


/***/ })
/******/ ]);