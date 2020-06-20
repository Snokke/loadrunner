class PreloaderState extends Phaser.State {

  preload() {
    this.load.atlas('assets', 'texture_sheets/texture_sheets.png', 'texture_sheets/assets.json');
  }

  create() {
    this.state.start('GameState');
  }
}

export default PreloaderState;
