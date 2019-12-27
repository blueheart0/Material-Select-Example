import { font, palette as commonPalette } from "../common";
import { default as bluePalette } from "./palette";
import typography from "./typography";

const palette = { ...bluePalette, ...commonPalette };
const theme = {
  themeName: "Blue Theme",
  spacing: 8,
  font,
  palette,
  typography
};

export default theme;
