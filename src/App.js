import { createMuiTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";
import React, { useContext, useState } from "react";
import "./App.css";
import CCMultiSelect from "./Component/MultiSelectBox";
import CCSelect from "./Component/SelectBox";
import { AppContext } from "./Context/AppContext";

const App = props => {
  const [open, setOpen] = useState(false);
  const [openMulti, setOpenMulti] = useState(true);
  // console.log(props);
  const handleClose = () => {
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
      <Button onClick={handleOpen}>SINGLE SELECT</Button>
      <CCSelect
        labelId={"demo-simple-select-label"}
        hasNone={"TEST"}
        open={open}
        onChange={console.log}
        onClose={handleClose}
        onOpen={handleOpen}
        menuItem={[
          {
            value: "예약수정"
          },
          {
            value: "횐자선택",
            disable: true
          },
          {
            value: "바로접수"
          },
          {
            value: "예약내역",
            color: "#0097a7"
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
