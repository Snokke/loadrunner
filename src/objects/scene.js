export default class Scene extends Phaser.Group {
  constructor(game, parent) {
    super(game, parent);

    this._sprite = null;

    this._init();
  }

  _init() {
    const width = 32;
    const height = 23;
    const offsetX = 20;
    const offsetY = 20;

    for (let i = 0; i < width; i += 1) {
      for (let j = 0; j < height; j += 1) {
        const sprite = this._sprite = this.game.make.sprite(offsetX + i * 20, offsetY + j * 22, 'brick');

        this.add(sprite);
      }
    }
  }
}
