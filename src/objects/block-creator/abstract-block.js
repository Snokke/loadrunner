import { BLOCK_FRAME_NAME } from './block-data';

export default class AbstractBlock extends Phaser.Group {
  constructor(game, parent, data) {
    super(game, parent);

    this._type = data.type;
    this._row = data.row;
    this._column = data.column;

    this._view = null;

    this._init();
  }

  get type() {
    return this._type;
  }

  _init() {
    const frameName = BLOCK_FRAME_NAME[this._type];

    const view = this._view = this.game.make.sprite(0, 0, 'assets', frameName);
    view.anchor.set(0.5, 1);
    this.add(view);
  }
}
