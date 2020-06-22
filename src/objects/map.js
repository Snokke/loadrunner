import BlockCreator from './blocks/block-creator';
import CharacterCreator from './characters/character-creator';
import { BLOCK_CODE, BLOCK_TYPE } from './blocks/block-data';

export default class Level extends Phaser.Group {
  constructor(game, parent) {
    super(game, parent);

    this._map = null;
    this._player = null;
    this._enemies = [];
    this._blockCreator = null;
    this._characterCreator = null;

    this._rows = 23;
    this._columns = 32;
    this._blockWidth = 32;
    this._blockHeight = 32;

    this._init();
  }

  get player() {
    return this._player;
  }

  get enemies() {
    return this._enemies;
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

        switch (type) {
          case BLOCK_TYPE.blank:
            this._map[row][column] = BLOCK_TYPE.blank;
            break;

          case BLOCK_TYPE.player:
            this._createPlayer(row, column);
            break;

          case BLOCK_TYPE.enemy:
            this._createEnemy(row, column);
            break;

          default:
            this._createBlock(row, column, type);
            break;
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

  _createPlayer(row, column) {
    const player = this._characterCreator.getCharacter(BLOCK_TYPE.player);

    player.x = column * this._blockWidth;
    player.y = row * this._blockHeight;

    this._player = player;
    this._map[row][column] = BLOCK_TYPE.blank;
  }

  _createEnemy(row, column) {
    const enemy = this._characterCreator.getCharacter(BLOCK_TYPE.enemy);

    enemy.x = column * this._blockWidth;
    enemy.y = row * this._blockHeight;

    this._enemies.push(enemy);
    this._map[row][column] = BLOCK_TYPE.blank;
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
    this._characterCreator = new CharacterCreator(this.game, this);

    this._map = new Array(this._rows);

    for (let row = 0; row < this._rows; row += 1) {
      this._map[row] = new Array(this._columns);
    }
  }
}
