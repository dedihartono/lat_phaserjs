(function() {

  var game = new Phaser.Game(640, 360, Phaser.AUTO);

  var GameState = {
    preload: function() {
      this.load.image('background', 'assets/images/sky.png');
      this.load.image('dude', 'assets/images/dude.png');
    },
    create: function() {
      //background
      this.background = game.add.sprite(0,0, 'background');

      //character dude
      this.dude = game.add.sprite(game.world.centerX, game.world.centerY, 'dude');


    },
    update: function() {

    },
  };


  game.state.add('GameState', GameState);
  game.state.start('GameState');

})();
