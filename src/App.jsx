import React from "react";
import Card from "./components/card/Card.jsx";
import Navbar from "./components/navbar/navbar";
import "./App.css";
import { Grid } from "@mui/material";
import data from "./data/data.js";

const App = () => {
  return (
    <div>
      <div><Navbar button="Login" title="Food Adda" /></div>
      {<Grid
        sx={{
          margin: 5,
          marginTop: 10,     
        }}
        container
      >
        {data.map(({name, desc, image }) => (
          <Grid item xs={12} xl={3} md={4}>
            <Card
              name={name}
              desc={desc}
              image={image}
            />
          </Grid>
        ))}
      </Grid> 
      }
    </div>
  );
};

export default App;