import { makeStyles } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import clsx from "clsx";
import React, { forwardRef } from "react";

const useStyle = makeStyles(
  theme => ({
    root: {
      color: props => {
        return props.color ? props.color : "";
      }
    }
  }),
  { name: "CCMenuItem" }
);

const CCMenuItem = forwardRef((props, ref) => {
  const classes = useStyle(props);
  return (
    <MenuItem
      {...props}
      ref={ref}
      className={clsx(props.className, classes.root)}
    />
  );
});

export default CCMenuItem;
