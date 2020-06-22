import AbstractCharacter from './abstract-character';

export default class Player extends AbstractCharacter {
  constructor(game, parent, type) {
    super(game, parent, type);

    this._upKey = null;
    this._downKey = null;
    this._leftKey = null;
    this._rightKey = null;

    this._initInput();
  }

  _initInput() {
    this._upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this._downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this._leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this._rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
  }

  update() {
    super.update();

    if (this._upKey.isDown) {
      this.climbLadderUp();
      return;
    }

    if (this._downKey.isDown) {
      this.climbLadderDown();
      return;
    }

    if (this._leftKey.isDown) {
      this.runLeft();
      return;
    }

    if (this._rightKey.isDown) {
      this.runRight();
      return;
    }

    this.stop();
  }
}
