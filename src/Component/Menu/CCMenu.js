import { makeStyles, Menu } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import CCMenuItem from "./Component";

const useStyle = makeStyles(
  theme => ({
    root: {
      "& .MuiPaper-rounded": {
        borderRadius: 8
      }
    },
    menu: {
      padding: 0
    },
    font__size: {
      fontSize: "14px"
    },
    gutters: {
      padding: "10px 16px",
      textAlign: "center",
      justifyContent: "center"
    }
  }),
  { name: "CCMenu" }
);

const CCMenu = props => {
  const { onClose, menuItem, value, ...others } = props;
  const classes = useStyle();

  return (
    <Menu
      {...others}
      selected={true}
      className={clsx(classes.root)}
      MenuListProps={{
        className: clsx(classes.menu)
      }}
    >
      {menuItem &&
        menuItem.length &&
        menuItem.map(item => {
          return (
            <CCMenuItem
              onClick={onClose}
              key={item.value}
              className={clsx(classes.font__size, classes.gutters)}
              disableGutters={true}
              value={item.value}
              color={item.color ? item.color : ""}
              disabled={item.disable ? item.disable : false}
              selected={item.value === value}
            >
              {item.text || item.value}
            </CCMenuItem>
          );
        })}
    </Menu>
  );
};

CCMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  value: PropTypes.string,
  menuItem: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      text: PropTypes.string
    })
  )
};

export default CCMenu;
