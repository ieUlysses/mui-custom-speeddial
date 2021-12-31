import { createTheme } from "@mui/material";
import { React, useState } from "react";

import Context from "./Context";

import { amber, deepOrange, grey, purple } from "@mui/material/colors";

//READING : https://uxplanet.org/8-tips-for-dark-theme-design-8dfc2f8f7ab6 desaturate colors for darkmode theme

//TODO : Add custom colours to theme pallete + rename ... rememver to desaturate all colours for darkmode... Including emphasis

/* Pallettes */
/* 
-Surfaces                     (Card bodys / navBar)
-Accents                      (Primaraly cta text / current page)
-Backgrounds Self Explanatory ( page backgrounds)
-Text                         (BodyText)
*/

//Notes:
/* When working with shades in mui.. you cannot use half values such as [ 250] or [470]... */

function Provider(props) {
  const [Mode, setMode] = useState("light");

  const getDesignTokens = (Mode) => ({
    palette: {
      Mode,

      text: {
        ...(Mode === "light"
          ? {
              primary: "#343a40",
              secondary: grey[800]
            }
          : {
              primary: "#ced4da",
              secondary: grey[500]
            })
      },

      surfaces: {
        ...(Mode === "light"
          ? {
              primary: "#ced4da",
              secondary: grey[800]
            }
          : {
              primary: "#343a40",
              secondary: grey[500]
            })
      }
    }
  });

  const darkModeTheme = createTheme(getDesignTokens(Mode));

  return (
    <>
      <Context.Provider value={{ Mode, setMode, darkModeTheme }}>
        {props.children}
      </Context.Provider>
    </>
  );
}

export default Provider;
