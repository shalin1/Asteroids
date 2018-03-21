const Game = require('./game.js');
const MovingObject = require("./moving_object.js");
const Asteroid = require('./asteroid.js');

const canvasEl = document.getElementById('canvas');
const ctx = canvasEl.getContext('2d');

//testing
window.Game = Game;
window.ctx = ctx;
window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
console.log('webpack is working!');