class PreloaderState extends Phaser.State {

  preload() {
    this.load.image('guard', 'assets/guard.png');
    this.load.image('brick', 'assets/brick.png');
  }

  create() {
    this.state.start('GameState');
  }
}

export default PreloaderState;
