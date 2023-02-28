import localFont from "next/font/local";

export const bodoni = localFont({
  src: [
    {
      path: "../font/Bodoni-72-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/Bodoni-72-Book-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../font/Bodoni-72-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../font/Bodoni-72-Medium-Italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../font/Bodoni-72-Bold.otf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../font/Bodoni-72-Bold-Italic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../font/Bodoni-72-Fatface.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../font/Bodoni-72-Fatface-Italic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--bodoni",
});
