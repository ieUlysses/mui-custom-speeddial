import { useContext, React } from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import GitHubIcon from "@mui/icons-material/GitHub";
import SegmentIcon from "@mui/icons-material/Segment";

import { DarkMode, LightMode } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import Context from "../Context/Context";

//Notes:
// Basic nav bar componant for porfolio including theme toggleButton.
// Origional comp was mui's speeddial but i've tweaked it a little
// neccrcary to add external "SpeedDialAction outside of map as you would have 4 toggle buttons. Action can be replaced with text at afuture time "

//TODO:
//  Add Dynamic icon for theme toggle and add theme to toggle button along with all text + surfaces for navbar
//  Add Dynamic text for theme toggle button tooltip
//  remove background color for nav actions + button
//  Look into adding active color for ripple effect. mighht be a nice homage to the dark green....

const actions = [
  { icon: <InfoIcon />, name: "About", to: "/about" },
  { icon: <HomeIcon />, name: "Home", to: "/" },
  { icon: <PermContactCalendarIcon />, name: "Contact", to: "/contact" },
  { icon: <GitHubIcon />, name: "Portfolio", to: "/portfolio" }
];

const CustomSpeedDial = () => {
  const context = useContext(Context);
  const { Mode, setMode } = context;

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  //import context

  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        direction="left"
        ariaLabel="SpeedDial basic example"
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          ".MuiSpeedDial-fab:hover": {
            color: "text.primary",
            bgcolor: "surfaces.primary"
          },
          ".MuiSpeedDial-fab": {
            color: "text.primary",
            bgcolor: "surfaces.primary"
          }
        }}
        icon={<SegmentIcon />}
      >
        <SpeedDialAction
          onClick={toggleColorMode}
          icon={Mode === "light" ? <LightMode /> : <DarkMode />}
          tooltipTitle={Mode === "light" ? "Dark Mode" : "Light Mode"}
          tooltipPlacement="bottom"
          sx={{
            color: "text.primary",
            backgroundColor: "surfaces.primary",

            "&:hover": {
              color: "text.primary",
              backgroundColor: "surfaces.primary"
            }
          }}
        />
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipPlacement="bottom"
            to={action.to}
            component={NavLink}
            sx={{
              color: "text.primary",
              backgroundColor: "surfaces.primary",
              "&:hover": {
                color: "text.primary",
                backgroundColor: "surfaces.primary"
              }
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default CustomSpeedDial;
