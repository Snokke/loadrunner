import { BLOCK_TYPE } from './block-data';
import Brick from './block-types/brick';
import Ladder from './block-types/ladder';
import Ground from './block-types/ground';
import WinLadder from './block-types/win-ladder';
import SolidBrick from './block-types/solid-brick';
import Gold from './block-types/gold';
import Trap from './block-types/trap';
import Rope from './block-types/rope';

export default class BlockCreator {
  constructor(game, parent) {
    this._game = game;
    this._parent = parent;
  }

  getBlock(data) { // eslint-disable-line complexity
    switch (data.type) {
      case BLOCK_TYPE.brick:
        return new Brick(this._game, this._parent, data);

      case BLOCK_TYPE.solidBrick:
        return new SolidBrick(this._game, this._parent, data);

      case BLOCK_TYPE.trap:
        return new Trap(this._game, this._parent, data);

      case BLOCK_TYPE.ladder:
        return new Ladder(this._game, this._parent, data);

      case BLOCK_TYPE.winLadder:
        return new WinLadder(this._game, this._parent, data);

      case BLOCK_TYPE.rope:
        return new Rope(this._game, this._parent, data);

      case BLOCK_TYPE.gold:
        return new Gold(this._game, this._parent, data);

      case BLOCK_TYPE.ground:
        return new Ground(this._game, this._parent, data);

      default:
        return null;
    }
  }
}
