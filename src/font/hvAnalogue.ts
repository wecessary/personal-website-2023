import localFont from "next/font/local";

export const hvAnalogue = localFont({
  src: [
    {
      path: "../font/hv-analogue-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/hv-analogue-italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../font/hv-analogue-bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../font/hv-analogue-bold-italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--hv-analogue",
});
