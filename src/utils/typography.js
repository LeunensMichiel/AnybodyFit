import Typography from "typography"
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Open Sans", "sans-serif"],
  bodyFontFamily: ["Montserrat", "Inconsolata", "sans-serif"],
  headerColor: "#212121",
  bodyColor: "#212121",
  includeNormalize: false,
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["400", "300"],
    },
    {
      name: "Inconsolata",
      styles: ["400"],
    },
    {
      name: "Open Sans",
      styles: ["400", "300", "700"],
    },
  ],
})

typography.injectStyles()

export default typography
