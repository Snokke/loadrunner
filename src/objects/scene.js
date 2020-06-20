import LEVEL_MAP from './level_maps';
import createAnimation from './create-animation';
import ANIMATIONS from './animations';
import Level from './map';

export default class Scene extends Phaser.Group {
  constructor(game, parent) {
    super(game, parent);

    this._sprite = null;

    this._init();
  }

  _init() {
    this._initLevel();



    // const player = this.game.make.sprite(0, 0, 'assets', 'player/player_idle.png');
    // this.add(player);
    // player.x = this.game.width / 2;
    // player.y = this.game.height / 2;

    // createAnimation(player, ANIMATIONS.enemyRunLeft);
    // createAnimation(player, ANIMATIONS.enemyRunRight);
    // createAnimation(player, ANIMATIONS.enemyLadderClimb);
    // createAnimation(player, ANIMATIONS.enemyRopeClimbLeft);
    // createAnimation(player, ANIMATIONS.enemyRopeClimbRight);
    // createAnimation(player, ANIMATIONS.brickRecovery);

    // player.animations.play('brick_recovery');

    // this.game.time.events.add(1000, () => {
    //   player.animations.stop('player_run_right');
    // });
  }

  _initLevel() {
    const level = new Level(this.game, this);

    const map = LEVEL_MAP['level-002'];
    level.createLevel(map);
    const levelArray = level.getLevelArray();


    this.game.time.events.add(500, () => {
      levelArray[2][0].dig();
    });

    this.game.time.events.add(1000, () => {
      levelArray[2][0].recovery();
    });

    // this._rows = 23;
    // this._columns = 32;

    // let time = 0;
    // const delay = 5;

    // for (let row = 0; row < this._rows; row += 1) {
    //   for (let column = 0; column < this._columns; column += 1) {
    //     const block = levelArray[row][column];

    //     this.game.time.events.add(time, () => {
    //       block.visible = true;
    //     });

    //     time += delay;
    //   }
    // }


    level.x = 32 + 16;
    level.y = 32 + 32;
  }

}
