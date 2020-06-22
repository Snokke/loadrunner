import createAnimation from '../create-animation';
import { CHARACTER_CONFIG, CHARACTER_ANIMATION_TYPE, CHARACTER_STATE } from './character-data';
import { ANIMATIONS_CONFIG } from '../animations';

export default class AbstractCharacter extends Phaser.Group {
  constructor(game, parent, type) {
    super(game, parent);

    this._type = type;

    this._view = null;
    this._runLeftAnimation = null;
    this._runRightAnimation = null;
    this._climbLadderUpAnimation = null;
    this._climbLadderDownAnimation = null;
    this._climbRopeLeftAnimation = null;
    this._climbRopeRightAnimation = null;

    this._currentState = CHARACTER_STATE.idle;
    this._previousState = this._currentState;

    this._speed = CHARACTER_CONFIG[this._type].speed;
    this._moveOffset = 3;

    this._init();
  }

  runLeft() {
    const state = CHARACTER_STATE.runLeft;
    const animationType = CHARACTER_ANIMATION_TYPE.runLeft;
    this._enableAnimation(state, animationType, this._runLeftAnimation);

    this.x -= this._moveOffset * this._speed;
  }

  runRight() {
    const state = CHARACTER_STATE.runRight;
    const animationType = CHARACTER_ANIMATION_TYPE.runRight;
    this._enableAnimation(state, animationType, this._runRightAnimation);

    this.x += this._moveOffset * this._speed;
  }

  climbLadderUp() {
    const state = CHARACTER_STATE.climbLadderUp;
    const animationType = CHARACTER_ANIMATION_TYPE.climbLadderUp;
    this._enableAnimation(state, animationType, this._climbLadderUpAnimation);

    this.y -= this._moveOffset * this._speed;
  }

  climbLadderDown() {
    const state = CHARACTER_STATE.climbLadderDown;
    const animationType = CHARACTER_ANIMATION_TYPE.climbLadderDown;
    this._enableAnimation(state, animationType, this._climbLadderDownAnimation);

    this.y += this._moveOffset * this._speed;
  }

  climbRopeLeft() {
    const state = CHARACTER_STATE.climbRopeLeft;
    const animationType = CHARACTER_ANIMATION_TYPE.climbRopeLeft;
    this._enableAnimation(state, animationType, this._climbRopeLeftAnimation);
  }

  climbRopeRight() {
    const state = CHARACTER_STATE.climbRopeRight;
    const animationType = CHARACTER_ANIMATION_TYPE.climbRopeRight;
    this._enableAnimation(state, animationType, this._climbRopeRightAnimation);
  }

  stop() { // eslint-disable-line complexity
    if (this._currentState === CHARACTER_STATE.idle) {
      return;
    }

    this._previousState = this._currentState;

    switch (this._currentState) {
      case CHARACTER_STATE.runLeft:
        this._runLeftAnimation.paused = true;
        break;

      case CHARACTER_STATE.runRight:
        this._runRightAnimation.paused = true;
        break;

      case CHARACTER_STATE.climbLadderUp:
        this._climbLadderUpAnimation.paused = true;
        break;

      case CHARACTER_STATE.climbLadderDown:
        this._climbLadderDownAnimation.paused = true;
        break;

      case CHARACTER_STATE.climbRopeLeft:
        this._climbRopeLeftAnimation.paused = true;
        break;

      case CHARACTER_STATE.climbRopeRight:
        this._climbRopeRightAnimation.paused = true;
        break;

      default:
        break;
    }

    this._currentState = CHARACTER_STATE.idle;
  }

  _init() {
    this._initView();
    this._initAnimations();
  }

  _initView() {
    const { frameName } = CHARACTER_CONFIG[this._type].static.idle;
    const view = this._view = this.game.make.sprite(0, 0, 'assets', frameName);
    view.anchor.set(0, 1);
    this.add(view);
  }

  _initAnimations() {
    this._runLeftAnimation = this._getAnimation(CHARACTER_ANIMATION_TYPE.runLeft);
    this._runRightAnimation = this._getAnimation(CHARACTER_ANIMATION_TYPE.runRight);
    this._climbLadderUpAnimation = this._getAnimation(CHARACTER_ANIMATION_TYPE.climbLadderUp);
    this._climbLadderDownAnimation = this._getAnimation(CHARACTER_ANIMATION_TYPE.climbLadderDown);
    this._climbRopeLeftAnimation = this._getAnimation(CHARACTER_ANIMATION_TYPE.climbRopeLeft);
    this._climbRopeRightAnimation = this._getAnimation(CHARACTER_ANIMATION_TYPE.climbRopeRight);
  }

  _getAnimation(animType) {
    const characterAnimations = CHARACTER_CONFIG[this._type].animations;
    const { type } = characterAnimations[animType];
    const animationConfig = ANIMATIONS_CONFIG[type];
    return createAnimation(this._view, animationConfig);
  }

  _playAnimation(animType) {
    const characterAnimations = CHARACTER_CONFIG[this._type].animations;
    const { name } = characterAnimations[animType];
    this._view.animations.play(name);
  }

  _enableAnimation(state, animationType, animation) {
    if (this._currentState === state) {
      return;
    }

    this.stop();
    animation.next();

    if (this._previousState === state) {
      animation.paused = false; // eslint-disable-line no-param-reassign
    } else {
      this._playAnimation(animationType);
    }

    this._previousState = this._currentState;
    this._currentState = state;
  }
}
