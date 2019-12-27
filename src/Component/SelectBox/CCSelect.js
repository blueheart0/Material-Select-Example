import { makeStyles, Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";
import CCMenuItem from "./Component";

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
    menu: {
      "& .MuiMenu-list": {
        padding: 0
      }
    },
    font__size: {
      fontSize: "14px"
    },
    gutters: {
      padding: "10px 30px"
    },
    input: {
      display: "none"
    }
  }),
  { name: "CCSelect" }
);

const CCSelect = props => {
  const { labelId, onChange, hasNone, menuItem, ...others } = props;
  const classes = useStyle();
  const [selectedItem, setSelectedItem] = useState(
    props.defaultValue ? props.defaultValue : ""
  );

  const _onChange = e => {
    const { value } = e.target;
    if (onChange) {
      onChange(e);
    }
    setSelectedItem(value);
  };
  console.log(props);
  return (
    <Select
      {...others}
      className={clsx(classes.root)}
      labelId={labelId}
      value={selectedItem}
      selected={true}
      onChange={_onChange}
      displayEmpty={true}
      labelWidth={0}
      inputProps={{
        className: clsx(classes.input)
      }}
      MenuProps={{
        className: clsx(classes.menu)
      }}
      SelectDisplayProps={{
        className: clsx({ root: classes.root })
      }}
    >
      {hasNone && (
        <MenuItem
          className={clsx(classes.font__size, classes.gutters)}
          key={labelId + "__none"}
          disableGutters={true}
          value={""}
        >
          <em>{hasNone}</em>
        </MenuItem>
      )}
      {menuItem &&
        menuItem.length &&
        menuItem.map(item => {
          return (
            <CCMenuItem
              className={clsx(classes.font__size, classes.gutters)}
              key={labelId + item.value}
              disableGutters={true}
              value={item.value}
              color={item.color ? item.color : ""}
              disabled={item.disable ? item.disable : false}
            >
              {item.text || item.value}
            </CCMenuItem>
          );
        })}
    </Select>
  );
};

CCSelect.propTypes = {
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

export default CCSelect;
