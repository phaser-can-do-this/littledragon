'use strict';
var Level = function(game) {
};

Level.prototype = {
  init: function(config) {
    console.log('init ', config);
    this.level = config.level || 1;
    this.score = config.score || 0;
  },

  preload: function() {
    console.log('Preloader.js');
  },

  create: function() {
    this.add.image(0, 0, 'level' + this.level);

  },

  update: function() {}
};