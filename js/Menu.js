'use strict';
var Menu = function(game) {};

Menu.prototype = {
  preload: function() {

  },

  create: function() {
    this.add.image(0, 0, 'splash');

    this.startLable = this.add.text(
      this.world.centerX, this.world.centerY, 'Tab Me to Start', {
        fill: '#fff',
        font: 'bold 30px "Irish Grover"'
      });
    this.startLable.anchor.setTo(0.5);

    this.startLable.inputEnabled = true;
    console.log(this.startLable.events.OnInputDown);
    this.startLable.events.onInputDown.add(function() {
      console.log('test');
      this.state.start('Level', true, false, {
        level: 2
      });
    }, this);

  },

  update: function() {}
};