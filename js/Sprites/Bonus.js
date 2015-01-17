'use strict';

function Bonus(game, x, y, type) {
  var self = this;
  var frame = null;
  Phaser.Sprite.call(this, game, x, y, 'bonus');
  type = type || 'gold';
  switch (type) {
    case 'gold':
      frame = [0, 1];
      break;
    case 'diamond':
      frame = [2, 3];
      break;
    case 'ring':
      frame = [4, 5];
      break;
    default:
      frame = [0, 1];
  }
  self.animations.add('idle',
    frame, 8, true, true);

  this.game.physics.enable(self, Phaser.Physics.ARCADE);
  this.body.gravity.y = 200;
  this.body.velocity.y = 10;
  this.body.bounce.setTo(0.3);
  this.checkWorldBounds = true;
  this.outOfBoundsKill = true;

  this.animations.play('idle');
}

Bonus.prototype = Object.create(Phaser.Sprite.prototype);
Bonus.prototype.constructor = Bonus;

Bonus.prototype.restart = function() {
  var self = this;

  self.timeID = setTimeout(function() {
    self.kill();
  }, 3000);
};

Bonus.prototype.die = function() {
  this.kill();
  self.timeID&&clearTimeout(self.timeID);
};