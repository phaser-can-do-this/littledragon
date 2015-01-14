'use strict';
var Boost = function(game) {};

Boost.prototype = {
  preload: function() {
    this.load.image('splash', 'res/splash.png');
    this.load.image('preloaderBarBack', 'res/ProgressBarBack.png');
    this.load.image('preloaderBarFront', 'res/ProgressBarFront.png');
  },

  create: function() {
    this.state.start('Preloader');
  }

};