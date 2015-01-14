'use strict';
var Preloader = function(game) {};

Preloader.prototype = {
  preload: function() {
    this.add.image(0, 0, 'splash');
    this.add.image(this.world.centerX,this.world.centerY,'preloaderBarBack')
            .anchor.setTo(0.5);
    var bar = this.add.image(this.world.centerX,this.world.centerY,'preloaderBarFront');

    bar.anchor.setTo(0.5);
      this.load.setPreloadSprite(bar);

    this.load.image('level1', 'res/gameback1.gif');
    this.load.image('level2', 'res/gameback2.gif');
    this.load.image('level3', 'res/gameback3.gif');
    this.load.image('bomb', 'res/bomb.gif');

    this.load.atlasJSONHash('dragon', 'res/dragon.png', 'res/dragon.json');
  },

  create: function() {
    this.state.start('Level') ;
  },

  update:function(){
  }
};
