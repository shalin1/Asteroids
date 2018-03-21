const Asteroid = require('./asteroid.js');
const Util = require('./util.js');

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
