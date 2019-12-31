import { createMuiTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";
import React, { useContext, useRef, useState } from "react";
import "./App.css";
import CCMenu from "./Component/Menu";
import CCMultiSelect from "./Component/MultiSelectBox";
import { AppContext } from "./Context/AppContext";

const App = props => {
  const [open, setOpen] = useState(false);
  const [openMulti, setOpenMulti] = useState(false);
  const singleMenuButtonRef = useRef();
  const handleClose = event => {
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
    setOpenMulti(true);
  };
  return (
    <div className="App">
      <Button ref={singleMenuButtonRef} onClick={handleOpen}>
        SINGLE SELECT
      </Button>
      <CCMenu
        open={Boolean(open)}
        anchorEl={singleMenuButtonRef}
        onClose={handleClose}
        value={"예약수정"}
        menuItem={[
          {
            value: "새 예약",
            disable: true
          },
          {
            value: "예약수정"
          },
          {
            value: "예약이행"
          },
          {
            value: "바로접수",
            color: "#0097a7"
          },
          {
            value: "예약내역"
          },
          {
            value: "예약삭제",
            color: "#f63b7c"
          }
        ]}
      />
      <Button onClick={handleOpenMulti}>MULTI SELECT</Button>
      <CCMultiSelect
        labelId={"demo-multi-select-label"}
        open={openMulti}
        onChange={console.log}
        onClose={handleCloseMulti}
        onOpen={handleOpenMulti}
        menuItem={[
          {
            value: "의사01"
          },
          {
            value: "의사02",
            disable: true
          },
          {
            value: "의사03"
          },
          {
            value: "의사04"
          },
          {
            value: "의사05"
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
