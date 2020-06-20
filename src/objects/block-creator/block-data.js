/* eslint-disable quote-props */

const BLOCK_TYPE = {
  player: 1,
  enemy: 2,
  brick: 3,
  ladder: 4,
  winLadder: 5,
  solidBrick: 6,
  ground: 7,
  gold: 8,
  trap: 9,
  rope: 10,
  blank: 11,
};

const BLOCK_FRAME_NAME = {
  [BLOCK_TYPE.player]: 'player/player_idle.png',
  [BLOCK_TYPE.enemy]: 'enemy/enemy_idle.png',
  [BLOCK_TYPE.ladder]: 'ladder.png',
  [BLOCK_TYPE.winLadder]: 'ladder.png',
  [BLOCK_TYPE.brick]: 'brick.png',
  [BLOCK_TYPE.solidBrick]: 'solid_brick.png',
  [BLOCK_TYPE.ground]: 'ground.png',
  [BLOCK_TYPE.gold]: 'gold.png',
  [BLOCK_TYPE.trap]: 'brick.png',
  [BLOCK_TYPE.rope]: 'rope.png',
  [BLOCK_TYPE.blank]: 'blank.png',
};

const BLOCK_CODE = {
  'Y': BLOCK_TYPE.player,
  'E': BLOCK_TYPE.enemy,
  'H': BLOCK_TYPE.ladder,
  'W': BLOCK_TYPE.winLadder,
  '#': BLOCK_TYPE.brick,
  '%': BLOCK_TYPE.solidBrick,
  '$': BLOCK_TYPE.gold,
  '?': BLOCK_TYPE.trap,
  '-': BLOCK_TYPE.rope,
  ' ': BLOCK_TYPE.blank,
};

export { BLOCK_FRAME_NAME, BLOCK_CODE, BLOCK_TYPE };
