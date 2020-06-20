import { BLOCK_TYPE, BLOCK_FRAME_NAME } from './block-data';
import Brick from './blocks/brick';
import Ladder from './blocks/ladder';
import Ground from './blocks/ground';
import WinLadder from './blocks/win-ladder';
import SolidBrick from './blocks/solid-brick';
import Gold from './blocks/gold';
import Trap from './blocks/trap';
import Rope from './blocks/rope';

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
