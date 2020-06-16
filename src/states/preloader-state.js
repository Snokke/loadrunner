class PreloaderState extends Phaser.State {

  preload() {
    this.load.image('guard', 'assets/guard.png');
    this.load.image('brick', 'assets/brick.png');
    this.load.image('gold', 'assets/gold.png');
    this.load.image('ground', 'assets/ground.png');
    this.load.image('ladder', 'assets/ladder.png');
    this.load.image('rope', 'assets/rope.png');
    this.load.image('solid_brick', 'assets/solid_brick.png');
    this.load.image('character', 'assets/character_idle.png');
    this.load.image('enemy', 'assets/enemy_idle.png');
  }

  create() {
    this.state.start('GameState');
  }
}

export default PreloaderState;
