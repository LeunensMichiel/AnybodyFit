import Typography from "typography"
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.6,
  headerFontFamily: ["Playfair Display", "serif"],
  bodyFontFamily: ["Raleway", "sans-serif"],
  headerColor: "#262626",
  bodyColor: "#262626",
  includeNormalize: false,
  googleFonts: [
    {
      name: "Raleway",
      styles: ["400", "400i", "600"],
    },
    {
      name: "Playfair Display",
      styles: ["700"],
    },
  ],
})

typography.injectStyles()

export default typography
