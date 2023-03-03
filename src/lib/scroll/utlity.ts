import { MutableRefObject } from "react";

export const getScrollingPct = (
  ContainerRef: MutableRefObject<HTMLDivElement>,
  i: number,
  n: number
) => {
  const containerArea = ContainerRef?.current?.getBoundingClientRect();

  const progress =
    ((-containerArea?.top + window.innerHeight / 1.1) / containerArea?.height) *
    100;
  const normalisedProgress = (progress - (100 / n) * i) * n;

  return normalisedProgress < 0 ? "0%" : `${normalisedProgress}%`;
};
