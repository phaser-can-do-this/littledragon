'use strict';
var Level = function(game) {
  this.dragon;

};

var bonus;
Level.prototype = {
  init: function(config) {
    console.log('init ', config);
    config = config || {};
    this.level = config.level || 1;
    this.score = config.score || 0;
  },

  preload: function() {},

  create: function() {
    var self = this;
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.add.image(0, 0, 'level' + this.level);


    this.bar = this.add.sprite(0, 175);
    this.physics.enable(this.bar, Phaser.Physics.ARCADE);
    this.bar.width = this.world.width;
    this.bar.height = 2;
    this.bar.body.immovable = true;


    this.monsters = this.add.group();
    for (var i = 0; i < 20; i++) {
      var m = new Monster(this.game, 500, 500, i % 2 ? 'green' : 'red');
      m.kill();
      this.monsters.add(m);
    }

    this.bonus = this.add.group();
    var styles = ['gold', 'diamond', 'ring'];
    for (i = 0; i < 30; i++) {
      var index = this.rnd.integerInRange(0, 2);
      var b = new Bonus(this.game, this.rnd.integerInRange(0, 480), 0,
        styles[index]);
      this.bonus.add(b);
    }

    this.bombs = this.add.group();
    for (i = 0; i < 20; i++) {
      var bomb = this.add.sprite(self.x,
        self.y, 'bomb');
      bomb.kill();
      this.physics.enable(bomb, Phaser.Physics.ARCADE);
      bomb.anchor.setTo(0.5);
      bomb.body.velocity.y = 200;
      bomb.scale.setTo(0.2);

      bomb.checkWorldBounds = true;
      bomb.outOfBoundsKill = true;

      this.bombs.add(bomb);
    }

    this.dragon = new Dragon(this.game, this.world.centerX, 160, this.bombs);
    this.add.existing(this.dragon);

    self.monsters.getFirstDead().startClimb();
    this.time.events.loop(
      Phaser.Timer.SECOND * 1,
      function() {
        var monster = self.monsters.getFirstDead();
        monster.startClimb();
      }, this);


  },

  update: function() {

    this.physics.arcade.collide(this.bonus, this.bar);
    this.physics.arcade.overlap(this.bombs, this.monsters,
      function(bomb, monster) {
        if (monster.hitAble) {
          bomb.kill();
          monster.die();
        }
      }, null, this);

    var pointer = this.input.activePointer;
    if (pointer.x < 0) {
      return;
    }
    pointer.y = 160;
    this.physics.arcade.moveToPointer(this.dragon, 60,
      this.input.activePointer, 500);

  }

};