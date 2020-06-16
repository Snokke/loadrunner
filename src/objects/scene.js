import MAPS from './map';
import MAP_CONFIG from './map-config';

export default class Scene extends Phaser.Group {
  constructor(game, parent) {
    super(game, parent);

    this._sprite = null;
    this._map = [];

    this._rows = 23;
    this._columns = 32;
    this._blockWidth = 32;
    this._blockHeight = 32;

    this._init();
  }

  _init() {
    const map = MAPS['level-001'];
    this._drawLevel(map);
  }

  _drawLevel(map) {
    const arrayMap = this._convertMapToArray(map);
    const mapGroup = this._mapGroup = this.game.make.group();

    for (let row = 0; row < this._rows - 1; row += 1) {
      for (let column = 0; column < this._columns; column += 1) {
        if (MAP_CONFIG[arrayMap[row][column]] === ' ') {
          return;
        }

        const fileName = MAP_CONFIG[arrayMap[row][column]];
        this._addBlock(row, column, fileName);
      }
    }

    for (let column = 0; column < this._columns; column += 1) {
      const fileName = 'ground';
      this._addBlock(this._rows - 1, column, fileName);
    }

    this.add(mapGroup);

    mapGroup.pivot.x = mapGroup.width / 2;
    mapGroup.x = this.game.width / 2;
    mapGroup.y = 32;
  }

  _addBlock(row, column, fileName) {
    const block = this.game.make.sprite(column * this._blockWidth, row * this._blockHeight, fileName);

    this._map.push(block);
    this._mapGroup.addChild(block);
  }

  _convertMapToArray(map) {
    const arrayMap = [];

    for (let i = 0; i < map.length; i += 1) {
      const line = map[i];
      arrayMap.push(line.split(''));
    }

    return arrayMap;
  }
}
