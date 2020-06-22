import Player from './player';
import Enemy from './enemy';
import { BLOCK_TYPE } from '../blocks/block-data';
import { CHARACTER_TYPE } from './character-data';

export default class CharacterCreator {
  constructor(game, parent) {
    this._game = game;
    this._parent = parent;
  }

  getCharacter(type) { // eslint-disable-line complexity
    switch (type) {
      case BLOCK_TYPE.player:
        return this._createPlayer();

      case BLOCK_TYPE.enemy:
        return this._createEnemy();

      default:
        return null;
    }
  }

  _createPlayer() {
    const type = CHARACTER_TYPE.player;
    return new Player(this._game, this._parent, type);
  }

  _createEnemy() {
    const type = CHARACTER_TYPE.enemy;
    return new Enemy(this._game, this._parent, type);
  }
}
