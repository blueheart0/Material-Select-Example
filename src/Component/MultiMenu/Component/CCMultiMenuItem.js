import { Checkbox, ListItemText, makeStyles } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

const useStyle = makeStyles(
  theme => ({
    gutters: {
      padding: "0px 10px 0px 0px",
      width: "100%"
    },
    checkbox: {
      // marginLeft: "10px",
      padding: "9px 10px 9px 10px",
      "&.MuiIconButton-colorSecondary:hover": {
        backgroundColor: "rgba(0,0,0,0)"
      },
      "&.MuiIconButton-root:hover": {
        backgroundColor: "rgba(0,0,0,0)"
      }
    }
  }),
  { name: "CCMultiMenuItem" }
);

const CCMultiMenuItem = props => {
  const { item, selected, onClick } = props;
  const classes = useStyle(props);
  return (
    <MenuItem
      disableGutters={true}
      value={item.value}
      className={clsx(classes.gutters)}
      disabled={item.disabled ? item.disabled : false}
      selected={selected}
      onClick={() => {
        onClick({ value: item.value });
      }}
    >
      <Checkbox
        disabled={item.disabled ? item.disabled : false}
        disableRipple
        className={clsx(classes.checkbox)}
        size="small"
        checked={selected}
      />
      <ListItemText primary={item.label || item.value} />
    </MenuItem>
  );
};

CCMultiMenuItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    color: PropTypes.string
  })
};

export default CCMultiMenuItem;
