import { makeStyles, Select } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";

const useStyle = makeStyles(
  theme => ({
    root: {
      "& .MuiSvgIcon-root": {
        display: "none"
      },
      "& .root": {
        width: 0,
        overflow: "hidden",
        display: "inline-block"
      }
    },
    input: {
      width: 0,
      minWidth: 0,
      overflow: "hidden",
      display: "inline-block",
      padding: 0,
      "&.MuiSelect-select.MuiSelect-select": {
        paddingRight: 0
      }
    },
    gutters: {
      padding: "0px 10px 0px 0px",
      width: "100%"
    },
    menu: {
      "& .MuiMenu-list": {
        padding: "0"
      },
      "& .MuiPaper-elevation8": {
        boxShadow:
          "0 19px 38px 0 rgba(0, 0, 0, 0.3), 0 15px 12px 0 rgba(0, 0, 0, 0.22)"
      },
      "& .MuiPaper-rounded": {
        borderRadius: "8px"
      },
      "& .MuiPopover-paper": {
        minWidth: "146px"
      }
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
  { name: "CCMultiSelect" }
);

const CCMultiSelect = props => {
  const { labelId, onChange, menuItem, ...others } = props;
  const [selectedItem, setSelectedItem] = useState(
    props.defaultValue ? props.defaultValue : []
  );
  const classes = useStyle();
  const _onChange = e => {
    const { value } = e.target;
    if (onChange) {
      onChange(e);
    }
    setSelectedItem(value);
  };
  return (
    <Select
      {...others}
      className={clsx(classes.root)}
      labelId={labelId}
      autoWidth
      multiple
      value={selectedItem}
      onChange={_onChange}
      renderValue={selected => selected}
      inputProps={{
        className: clsx(classes.input)
      }}
      MenuProps={{
        className: clsx(classes.menu)
      }}
    >
      {menuItem &&
        menuItem.length &&
        menuItem.map(item => {
          return (
            <MenuItem
              key={labelId + item.value}
              disableGutters={true}
              value={item.value}
              className={clsx(classes.gutters)}
              disabled={item.disable ? item.disable : false}
            >
              <Checkbox
                disabled={item.disable ? item.disable : false}
                disableRipple
                className={clsx(classes.checkbox)}
                size="small"
                checked={selectedItem.indexOf(item.value) > -1}
              />
              <ListItemText primary={item.text || item.value} />
            </MenuItem>
          );
        })}
    </Select>
  );
};

CCMultiSelect.propTypes = {
  labelId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  menuItem: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      text: PropTypes.string
    })
  )
};

export default CCMultiSelect;
