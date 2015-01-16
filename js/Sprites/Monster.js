'use strict';

function Monster(game, x, y, type) {
  var climb, run, burn;
  Phaser.Sprite.call(this, game, x, y, 'monsters');

  type = type || 'red';
  if (type === 'red') {
    climb = [0, 1];
    burn = [2];
    run = [3, 4];
  } else {
    climb = [5, 6];
    burn = [7];
    run = [8, 9];
  }

  this.animations.add('climb', climb, 8, true, true);
  this.animations.add('run', run, 8, true, true);
  this.animations.add('burn', burn, 1, true, true);
  this.animations.play('run');
  this.game.physics.enable(this, Phaser.Physics.ARCADE);
  this.checkWorldBounds = true;
  this.outOfBoundsKill = true;
  this.anchor.setTo(0.5);
  this.getGold = false;

}

Monster.prototype = Object.create(Phaser.Sprite.prototype);
Monster.prototype.constructor = Monster;
Monster.prototype.startClimb = function() {
  var index = this.game.rnd.integerInRange(0, 2);
  var x = 60 + index * 100;


  this.getGold = false;
  this.hitAble = true;
  this.body.gravity.y = 0;
  this.reset(x, 470, 1);
  this.body.velocity.y = -100;
  this.animations.play('climb');
};
Monster.prototype.runAway = function() {
  this.hitAble = false;
  this.animations.play('run');
  this.body.velocity.y = -200;
  this.body.velocity.x = this.game.rnd.integerInRange(-70, 70);
  this.body.gravity.y = 500;
};

Monster.prototype.die = function() {
  this.hitAble = false;
  this.animations.play('burn');
  this.body.velocity.y = -200;
  this.body.velocity.x = this.game.rnd.integerInRange(-70, 70);
  this.body.gravity.y = 500;
};

Monster.prototype.update = function() {
  if (!this.getGold && this.y > 0 && this.y < 175) {
    this.hitAble = false;
    this.getGold = true;
    this.body.velocity.y = -200;
    this.body.velocity.x = this.game.rnd.integerInRange(-70, 70);
    this.body.gravity.y = 500;
    this.animations.play('run');
  }
};