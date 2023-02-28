export const moveBall = {
  from: { x: "0", rotate: 0 },
  to: { x: "-43vw", rotate: 360 },
  loop: { reverse: true },
  config: { tension: 80, friction: 70 },
};

export const moveInnerBall = {
  from: { x: "0", rotate: 0 },
  to: { x: "0", rotate: 360 },
  loop: { reverse: true },
  config: { tension: 75, friction: 65 },
};
