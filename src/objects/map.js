import BlockCreator from './block-creator/block-creator';
import { BLOCK_CODE, BLOCK_TYPE } from './block-creator/block-data';

export default class Level extends Phaser.Group {
  constructor(game, parent) {
    super(game, parent);

    this._map = null;
    this._blockCreator = null;

    this._rows = 23;
    this._columns = 32;
    this._blockWidth = 32;
    this._blockHeight = 32;

    this._init();
  }

  showLevel() {
    for (let row = 0; row < this._rows - 1; row += 1) {
      for (let column = 0; column < this._columns; column += 1) {
        const block = this._map[row][column];
        block.visible = true;
      }
    }
  }

  hideLevel() {
    for (let row = 0; row < this._rows - 1; row += 1) {
      for (let column = 0; column < this._columns; column += 1) {
        const block = this._map[row][column];
        block.visible = false;
      }
    }
  }

  createLevel(map) {
    const arrayMap = this._convertMapToArray(map);

    for (let row = 0; row < this._rows - 1; row += 1) {
      for (let column = 0; column < this._columns; column += 1) {
        const type = BLOCK_CODE[arrayMap[row][column]];

        if (type === BLOCK_TYPE.blank) {
          this._map[row][column] = BLOCK_TYPE.blank;
        } else {
          this._createBlock(row, column, type);
        }
      }
    }

    this._createGround();
  }

  getLevelArray() {
    return this._map;
  }

  _createBlock(row, column, type) {
    const data = { row, column, type };

    const block = this._blockCreator.getBlock(data);

    block.x = column * this._blockWidth;
    block.y = row * this._blockHeight;

    this._map[row][column] = block;
  }

  _createGround() {
    for (let column = 0; column < this._columns; column += 1) {
      const type = BLOCK_TYPE.ground;
      const row = this._rows - 1;
      this._createBlock(row, column, type);
    }
  }

  _convertMapToArray(map) {
    const arrayMap = [];

    for (let i = 0; i < map.length; i += 1) {
      const line = map[i];
      arrayMap.push(line.split(''));
    }

    return arrayMap;
  }

  _init() {
    this._blockCreator = new BlockCreator(this.game, this);

    this._map = new Array(this._rows);

    for (let row = 0; row < this._rows; row += 1) {
      this._map[row] = new Array(this._columns);
    }
  }
}
