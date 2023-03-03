import { useScroll } from "@react-spring/web";
import { useRef, MutableRefObject } from "react";

export const TextFillOnScroll = () => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const { scrollY } = useScroll({});
  return <>
    
  </>;
};
