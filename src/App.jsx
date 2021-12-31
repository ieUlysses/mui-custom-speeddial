import { Routes, Route } from "react-router-dom";

import Context from "./Context/Context";

import { ThemeProvider } from "@mui/material/styles";
import { React, useContext } from "react";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import CustomSpeedDial from "./Componants/CustomSpeedDial";
import Portfolio from "./Pages/Portfolio";

function App() {
  const context = useContext(Context);
  const { darkModeTheme } = context;

  return (
    <>
      <ThemeProvider theme={darkModeTheme}>
        <CustomSpeedDial />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />3
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

/* 
Following tutorial from:
https://reactrouter.com/docs/en/v6/getting-started/tutorial
Not using all points. Keeping it easy breezy */

export default App;
