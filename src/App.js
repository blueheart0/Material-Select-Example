import { createMuiTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";
import React, { useContext, useRef, useState } from "react";
import "./App.css";
import CCMenu from "./Component/Menu";
import CCMultiMenu from "./Component/MultiMenu";
import { AppContext } from "./Context/AppContext";

const App = props => {
  const [open, setOpen] = useState(false);
  const [openMulti, setOpenMulti] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const singleMenuButtonRef = useRef();
  const multiMenuButtonRef = useRef();
  const onClose = event => {
    console.log(event);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseMulti = () => {
    setOpenMulti(false);
  };

  const handleOpenMulti = () => {
    setOpenMulti(!openMulti);
  };
  return (
    <div className="App">
      <Button ref={singleMenuButtonRef} onClick={handleOpen}>
        SINGLE SELECT
      </Button>
      <CCMenu
        open={Boolean(open)}
        anchorEl={singleMenuButtonRef}
        onClose={onClose}
        menuItem={[
          {
            value: "1",
            label: "새 예약",
            disabled: true,
            onClick: console.log
          },
          {
            value: "2",
            label: "예약수정",
            onClick: console.log
          },
          {
            value: "3",
            label: "예약이행",
            onClick: console.log
          },
          {
            value: "4",
            label: "바로접수",
            color: "#0097a7",
            onClick: console.log
          },
          {
            value: "5",
            label: "예약내역",
            onClick: console.log
          },
          {
            value: "6",
            label: "예약삭제",
            color: "#f63b7c",
            onClick: console.log
          }
        ]}
      />
      <Button ref={multiMenuButtonRef} onClick={handleOpenMulti}>
        MULTI SELECT
      </Button>
      <CCMultiMenu
        anchorEl={multiMenuButtonRef}
        open={openMulti}
        value={selectedItem}
        onChange={event => {
          setSelectedItem(event);
        }}
        onClose={handleCloseMulti}
        menuItem={[
          {
            value: "a",
            label: "의사01"
          },
          {
            value: "b",
            label: "의사02",
            disabled: true
          },
          {
            value: "c",
            label: "의사03"
          },
          {
            value: "d",
            label: "의사04"
          },
          {
            value: "e",
            label: "의사05"
          }
        ]}
      />
    </div>
  );
};

const WrapApp = props => {
  const { appContext } = useContext(AppContext);
  console.log(appContext);
  return (
    <ThemeProvider theme={createMuiTheme(appContext.theme)}>
      <App {...props} />
    </ThemeProvider>
  );
};

export default WrapApp;
