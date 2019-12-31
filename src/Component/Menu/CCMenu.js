import { makeStyles, MenuList, Popover } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { forwardRef } from "react";
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

const CCMenu = forwardRef((props, ref) => {
  const { onClose, open, menuItem, anchorEl, MenuListProps } = props;
  const classes = useStyle();

  return (
    <Popover open={open} anchorEl={anchorEl.current} onClose={onClose}>
      <MenuList ref={ref} className={clsx(classes.menu)} {...MenuListProps}>
        {menuItem &&
          menuItem.length &&
          menuItem.map(item => {
            return (
              <CCMenuItem
                onClick={event => {
                  item.onClick(event);
                  onClose(event);
                }}
                key={item.value}
                className={clsx(classes.font__size, classes.gutters)}
                disableGutters={true}
                value={item.value}
                color={item.color ? item.color : ""}
                disabled={item.disabled ? item.disabled : false}
              >
                {item.label || item.value}
              </CCMenuItem>
            );
          })}
      </MenuList>
    </Popover>
  );
});

CCMenu.propTypes = {
  anchorEl: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  menuItem: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string,
      color: PropTypes.string,
      onClick: PropTypes.func.isRequired
    })
  )
};

export default CCMenu;
