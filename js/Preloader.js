'use strict';
var Preloader = function(game) {};

Preloader.prototype = {
  preload: function() {
    this.add.image(0, 0, 'splash');
    this.add.image(this.world.centerX - 128,
      this.world.centerY, 'preloaderBarBack');
    var bar = this.add.image(this.world.centerX - 128,
      this.world.centerY, 'preloaderBarFront');

    this.load.setPreloadSprite(bar);

    this.load.image('level1', 'res/gameback1.gif');
    this.load.image('level2', 'res/gameback2.gif');
    this.load.image('level3', 'res/gameback3.gif');
    this.load.image('bomb', 'res/bomb.gif');
    this.load.spritesheet('monsters','res/monstersheet.gif', 32, 32);
    this.load.spritesheet('bonus',' res/bonussheet.gif', 16, 16);
    this.load.atlasJSONHash('dragon', 'res/dragon.png', 'res/dragon.json');
  },

  create: function() {
    this.state.start('Level');
  },

  update: function() {}
};