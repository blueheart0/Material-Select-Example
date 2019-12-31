import { makeStyles, MenuList, Popover } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import CCMultiMenuItem from "./Component";

const useStyle = makeStyles(
  theme => ({
    root: {
      "& .MuiPaper-elevation8": {
        boxShadow:
          "0 19px 38px 0 rgba(0, 0, 0, 0.3), 0 15px 12px 0 rgba(0, 0, 0, 0.22)"
      },
      "& .MuiPopover-paper": {
        minWidth: "146px"
      },
      "& .MuiPaper-rounded": {
        borderRadius: "8px"
      }
    },

    menu: {
      "&.MuiList-padding": {
        padding: "0"
      }
    }
  }),
  { name: "CCMultiMenu" }
);

const CCMultiMenu = forwardRef((props, ref) => {
  const {
    onClose,
    open,
    menuItem,
    onChange,
    anchorEl,
    value,
    MenuListProps
  } = props;

  const classes = useStyle();

  const _onChange = event => {
    let _value = [...value];
    let exist = _value.indexOf(event.value);
    if (exist > -1) {
      _value.splice(exist, 1);
    } else {
      _value.push(event.value);
    }
    // _value.sort((a, b) => {
    //   return (
    //     menuItem.findIndex(element => element.value === a) -
    //     menuItem.findIndex(element => element.value === b)
    //   );
    // });

    if (onChange) {
      onChange(_value);
    }
  };

  return (
    <Popover
      className={clsx(classes.root)}
      anchorEl={anchorEl.current}
      open={open}
      onClose={onClose}
    >
      <MenuList
        ref={ref}
        className={clsx(classes.menu)}
        variant={"selectedMenu"}
        {...MenuListProps}
      >
        {menuItem &&
          menuItem.length &&
          menuItem.map((item, index) => (
            <CCMultiMenuItem
              key={clsx(classes.root + item.value + index)}
              item={item}
              selected={value.indexOf(item.value) > -1}
              disabled={item.disabled}
              onClick={_onChange}
            />
          ))}
      </MenuList>
    </Popover>
  );
});

CCMultiMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  anchorEl: PropTypes.object.isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  MenuListProps: PropTypes.object,
  menuItem: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      color: PropTypes.string
    })
  )
};

export default CCMultiMenu;
