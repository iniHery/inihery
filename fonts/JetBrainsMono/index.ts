import localFont from "next/font/local";

const JetBrainsMono = localFont({
  src: [
    {
      path: "./JetBrainsMono-Thin.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./JetBrainsMono-ThinItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "./JetBrainsMono-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./JetBrainsMono-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./JetBrainsMono-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./JetBrainsMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./JetBrainsMono-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./JetBrainsMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./JetBrainsMono-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-jetBrainsMono",
  adjustFontFallback: false,
  preload: true,
  display: "auto",
});

export default JetBrainsMono;
