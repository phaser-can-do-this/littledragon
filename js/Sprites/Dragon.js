'use strict';

function Dragon(game, x, y, bombs) {
  var self = this;
  Phaser.Sprite.call(this, game, x, y, 'dragon');
  this.anchor.setTo(0.5, 0.5);

  this.animations.add('idle', [
    'dragon_06.gif',
    'dragon_07.gif',
  ], 8, true, false);
  this.fireAnimation = this.animations.add('fire', [
    'dragon_06.gif',
    'dragon_07.gif',
    'dragon_08.gif',
    'dragon_17.gif',
    'dragon_18.gif',
    'dragon_19.gif',
  ], 10, true, false);
  this.animations.play('fire');
  this.checkWorldBounds = true;
  this.game.physics.enable(this, Phaser.Physics.ARCADE);

  this.fireAnimation.onLoop.add(function() {
    var bomb = bombs.getFirstDead();
    bomb.reset(self.x, self.y, 1);
    bomb.body.velocity.y = 200;
    bomb.scale.setTo(0.2);
    self.game.add.tween(bomb.scale).to({
      x: 1,
      y: 1
    }, 1000, Phaser.Easing.Linear.None, true);
  }, this.game);
}

Dragon.prototype = Object.create(Phaser.Sprite.prototype);
Dragon.prototype.constructor = Dragon;