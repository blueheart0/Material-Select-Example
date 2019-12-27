import { font, palette as commonPalette } from "../common";
import { default as basicPalette } from "./palette";
import typography from "./typography";

const palette = { ...basicPalette, ...commonPalette };
const theme = {
  themeName: "Basic Theme",
  spacing: 8,
  font,
  palette,
  typography
};

export default theme;
