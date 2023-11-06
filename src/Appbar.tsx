import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { useResetRecoilState,useRecoilValue,atom, RecoilRoot, useRecoilState } from 'recoil'

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {tab} from './App'


export function ButtonAppBar() {
  const [alignment, setAlignment] = React.useState("genCode");
  const [select,setSelect]=useRecoilState(tab)

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,

    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"black"}}>
        <div style={{display:"flex", justifyContent:"center"}}>
        <ToggleButtonGroup
            color="info"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton defaultChecked  style={select==1?{color:"#0288d1"}:{color:"white"}} value="genCode" onClick={(e)=>{setSelect(1)}}>Generate Code</ToggleButton>
            <ToggleButton style={select==2?{color:"#0288d1"}:{color:"white"}}  value="getDetail" onClick={(e)=>{setSelect(2)}}>Retrieve User</ToggleButton>
          </ToggleButtonGroup>
        </div>
        {/* <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
        </Toolbar> */}
      </AppBar>
    </Box>
  );
}
