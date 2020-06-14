import Scene from '../objects/scene';

class GameState extends Phaser.State {

  create() {
    this._view = this.game.add.group();

    this._scene = new Scene(this.game, this._view);
  }
}

export default GameState;
