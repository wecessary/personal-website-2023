import localFont from "next/font/local";

export const bodoni = localFont({
  src: [
    {
      path: "../font/Bodoni-24-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/Bodoni-24-Book-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../font/Bodoni-24-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../font/Bodoni-24-Medium-Italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../font/Bodoni-24-Bold.otf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../font/Bodoni-24-Bold-Italic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../font/Bodoni-24-Fatface.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../font/Bodoni-24-Fatface-Italic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--bodoni",
});
