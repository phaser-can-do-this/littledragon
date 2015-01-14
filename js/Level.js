'use strict';
var Level = function(game) {
  this.dragon;

};

Level.prototype = {
  init: function(config) {
    console.log('init ', config);
    config = config ||{};
    this.level = config.level || 1;
    this.score = config.score || 0;
  },

  preload: function() {
  },

  create: function() {
    this.add.image(0, 0, 'level' + this.level);
    this.dragon = this.add.sprite(200, 145, 'dragon');
    this.dragon.animations.add('idle', [
        'dragon_06.gif',
        'dragon_07.gif',
    ], 8, true, false);
    this.dragon.animations.add('fire', [
            'dragon_06.gif',
            'dragon_07.gif',
            'dragon_08.gif',
            'dragon_17.gif',
            'dragon_18.gif',
            'dragon_19.gif',
        ], 8,true, false);

    this.dragon.animations.play('fire');

    this.bomb = this.add.sprite(100, 140, 'bomb');
    this.physics.enable(this.bomb, Phaser.Physics.ARCADE);
    this.bomb.body.velocity.y=200;
    this.bomb.scale.setTo(0.2);
    this.add.tween(this.bomb.scale).to( { x: 1, y: 1 }, 800, Phaser.Easing.Linear.None, true);




  },

  update: function() {}
};