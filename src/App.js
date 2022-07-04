import "./index.css"
import React from "react";
import { Grid } from "@mui/material";

import {Header, Places, Lists, PlacesInfo,Map } from "./components/index"  

function App() {
  return (
    <div className="w-full h-full block relative bg-slate-900">
    <Header />

     <Grid container spacing = {3}>
       <Grid item xs={12} sm={5}>
        <Lists />
       </Grid>

     <Grid item xs={12} sm={7}>
      <Grid container spacing = {3}>
         <Grid item xs={12} sm={12}>
          <Map />
         </Grid>

         <Grid item xs={12} sm={12}>
          <PlacesInfo />
         </Grid>
      </Grid>

     </Grid>
    </Grid>
    </div>
  );
}

export default App;
