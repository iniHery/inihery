import localFont from "next/font/local";

const Aeonik = localFont({
  src: [
    {
      path: "./Aeonik-Air.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Aeonik-AirItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./Aeonik-Thin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Aeonik-ThinItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./Aeonik-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Aeonik-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Aeonik-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Aeonik-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Aeonik-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Aeonik-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Aeonik-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Aeonik-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Aeonik-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./Aeonik-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-aeonik",
  adjustFontFallback: false,
  preload: true,
  display: "auto",
  declarations: [{ prop: "ascent-override", value: "100%" }],
});

export default Aeonik;
