import AbstractBlock from '../abstract-block';
import { ANIMATIONS_CONFIG, ANIMATIONS } from '../../animations';
import createAnimation from '../../create-animation';
import { BLOCK_FRAME_NAME, BLOCK_TYPE } from '../block-data';

export default class Brick extends AbstractBlock {
  constructor(game, parent, data) {
    super(game, parent, data);

    this._digAnimation = null;
    this._recoveryAnimation = null;

    this._addAnimations();
  }

  dig() {
    this._view.animations.play('brick_dig');
    this._digAnimation.onComplete.add(() => {
      this.visible = false;
    });
  }

  recovery() {
    this.visible = true;
    this._view.animations.play('brick_recovery');
    this._recoveryAnimation.onComplete.add(() => {
      this._view.frameName = BLOCK_FRAME_NAME[BLOCK_TYPE.brick];
    });
  }

  _addAnimations() {
    this._digAnimation = createAnimation(this._view, ANIMATIONS_CONFIG[ANIMATIONS.brickDig]);
    this._recoveryAnimation = createAnimation(this._view, ANIMATIONS_CONFIG[ANIMATIONS.brickRecovery]);
  }
}

Brick.STATE = {
  NORMAL: 1,
  DIGGED: 2,
};
