function GameView(ctx){
  this.ctx = ctx;
  this.Game = new Game();
}

GameView.prototype.start = function start(){
  function cb(){
    this.game
  }
  setInterval(cb,20)
}

module.exports = GameView;