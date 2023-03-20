import { getDeviceType } from "@/lib/screenSize/deviceType";
import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(
    typeof window === "undefined" ? 0 : window.innerWidth
  );
  const { isPhone, isTablet } = getDeviceType(screenSize);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  });

  return { screenSize, isPhone, isTablet };
};
