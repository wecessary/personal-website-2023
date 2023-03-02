export const moveBall = {
  from: { x: "0", rotate: 0 },
  to: { x: "-43vw", rotate: 360 },
  loop: { reverse: true },
  config: { tension: 75, friction: 70 },
};

export const moveInnerBall = {
  from: { x: "0", rotate: 0 },
  to: { x: "0", rotate: 360 },
  loop: { reverse: true },
  config: { tension: 75, friction: 65 },
};

export const appearBottomUp = {
  from: { opacity: 0, y: 300 },
  to: { opacity: 1, y: 0 },
  config: { mass: 5, tension: 2000, friction: 200 },
};

export const gridLineConfig = {
  tension: 140,
  friction: 36,
};

export const ballGridLineConfig = { tension: 95, friction: 36 }