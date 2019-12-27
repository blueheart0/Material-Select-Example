import { colors } from "@material-ui/core";
import { palette as common } from "../common";

const palette = {
  primary: {
    main: colors.yellow[900]
  },
  secondary: {
    main: "#0277BD"
  },
  error: {
    main: "#f50057"
  },
  select: {
    dark: "#0094cc",
    main: "#40c4ff"
  },
  text: {
    primary: common.white,
    secondary: common.white,
    link: colors.blue[600]
  },
  background: {
    default: common.black,
    paper: common.white
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
};
export default palette;
