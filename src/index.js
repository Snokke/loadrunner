import GameState from './states/game-state';
import PreloaderState from './states/preloader-state';

class Game extends Phaser.Game {

  constructor() {
    const width = 1088;
    const height = 832;

    super(width, height, Phaser.CANVAS, 'content', null);
    this.state.add('PreloaderState', PreloaderState, false);
    this.state.add('GameState', GameState, false);
    this.state.start('PreloaderState');
  }
}

new Game(); // eslint-disable-line no-new
