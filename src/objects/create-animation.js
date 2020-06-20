export default (obj, anim) => {
  const arrFrames = Phaser.Animation.generateFrameNames(`${anim.path}/${anim.name}_`, 1, anim.end, '.png', 2);
  return obj.animations.add(`${anim.name}`, arrFrames, anim.frameRate, anim.loop);
};
