'use strict';
var Level = function(game) {
  this.dragon;

};

Level.prototype = {
  init: function(config) {
    console.log('init ', config);
    config = config || {};
    this.level = config.level || 1;
    this.score = config.score || 0;
  },

  preload: function() {},

  create: function() {
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.add.image(0, 0, 'level' + this.level);


    this.dragon = new Dragon(this.game,this.world.centerX,160);

    this.add.existing(this.dragon);

    var monster= this.add.sprite(100, 100, 'monsters');
    monster.animations.add('climb', [
            0,1
        ], 5, true, true);
    monster.animations.add('run', [
            3,4
        ], 8, true, true);

    monster.animations.play('run');
    var bonus = this.add.sprite(200, 200, 'bonus');
    bonus.animations.add('idle', [
            0,1
        ], 8, true, true);
    bonus.animations.play('idle');


  },

  update: function() {
    var pointer =  this.input.activePointer;
    if(pointer.x<0){
      return ;
    }
    pointer.y = 160;
    this.physics.arcade.moveToPointer(this.dragon, 60, this.input.activePointer, 500);

  }
};