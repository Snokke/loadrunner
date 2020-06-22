import { ANIMATIONS, ANIMATIONS_CONFIG } from '../animations';

const CHARACTER_TYPE = {
  player: 1,
  enemy: 2,
};

const CHARACTER_ANIMATION_TYPE = {
  runLeft: 1,
  runRight: 2,
  climbLadderUp: 3,
  climbLadderDown: 4,
  climbRopeLeft: 5,
  climbRopeRight: 6,
};

const CHARACTER_STATE = {
  idle: 1,
  runLeft: 2,
  runRight: 3,
  climbLadderUp: 4,
  climbLadderDown: 5,
  climbRopeLeft: 6,
  climbRopeRight: 7,
  fall: 8,
};

const CHARACTER_CONFIG = {
  [CHARACTER_TYPE.player]: {
    speed: 1,
    static: {
      idle: {
        frameName: 'player/player_idle.png',
      },
      fall: {
        frameName: 'player/player_idle.png',
      },
    },
    animations: {
      [CHARACTER_ANIMATION_TYPE.runLeft]: {
        type: ANIMATIONS.playerRunLeft,
        name: ANIMATIONS_CONFIG[ANIMATIONS.playerRunLeft].name,
      },
      [CHARACTER_ANIMATION_TYPE.runRight]: {
        type: ANIMATIONS.playerRunRight,
        name: ANIMATIONS_CONFIG[ANIMATIONS.playerRunRight].name,
      },
      [CHARACTER_ANIMATION_TYPE.climbLadderUp]: {
        type: ANIMATIONS.playerLadderClimbUp,
        name: ANIMATIONS_CONFIG[ANIMATIONS.playerLadderClimbUp].name,
      },
      [CHARACTER_ANIMATION_TYPE.climbLadderDown]: {
        type: ANIMATIONS.playerLadderClimbDown,
        name: ANIMATIONS_CONFIG[ANIMATIONS.playerLadderClimbDown].name,
      },
      [CHARACTER_ANIMATION_TYPE.climbRopeLeft]: {
        type: ANIMATIONS.playerRopeClimbLeft,
        name: ANIMATIONS_CONFIG[ANIMATIONS.playerRopeClimbLeft].name,
      },
      [CHARACTER_ANIMATION_TYPE.climbRopeRight]: {
        type: ANIMATIONS.playerRopeClimbRight,
        name: ANIMATIONS_CONFIG[ANIMATIONS.playerRopeClimbRight].name,
      },
    },
  },
  [CHARACTER_TYPE.enemy]: {
    speed: 0.5,
    static: {
      idle: {
        frameName: 'enemy/enemy_idle.png',
      },
      fall: {
        frameName: 'enemy/enemy_idle.png',
      },
    },
    animations: {
      [CHARACTER_ANIMATION_TYPE.runLeft]: {
        type: ANIMATIONS.enemyRunLeft,
        name: ANIMATIONS_CONFIG[ANIMATIONS.enemyRunLeft].name,
      },
      [CHARACTER_ANIMATION_TYPE.runRight]: {
        type: ANIMATIONS.enemyRunRight,
        name: ANIMATIONS_CONFIG[ANIMATIONS.enemyRunRight].name,
      },
      [CHARACTER_ANIMATION_TYPE.climbLadderUp]: {
        type: ANIMATIONS.enemyLadderClimbUp,
        name: ANIMATIONS_CONFIG[ANIMATIONS.enemyLadderClimbUp].name,
      },
      [CHARACTER_ANIMATION_TYPE.climbLadderDown]: {
        type: ANIMATIONS.enemyLadderClimbDown,
        name: ANIMATIONS_CONFIG[ANIMATIONS.enemyLadderClimbDown].name,
      },
      [CHARACTER_ANIMATION_TYPE.climbRopeLeft]: {
        type: ANIMATIONS.enemyRopeClimbLeft,
        name: ANIMATIONS_CONFIG[ANIMATIONS.enemyRopeClimbLeft].name,
      },
      [CHARACTER_ANIMATION_TYPE.climbRopeRight]: {
        type: ANIMATIONS.enemyRopeClimbRight,
        name: ANIMATIONS_CONFIG[ANIMATIONS.enemyRopeClimbRight].name,
      },
    },
  },
};

export {
  CHARACTER_TYPE, CHARACTER_CONFIG, CHARACTER_ANIMATION_TYPE, CHARACTER_STATE,
};
