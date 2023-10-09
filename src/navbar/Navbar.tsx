import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import theme from "../theme/theme";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

type Anchor = "top";

function Navbar() {
  const matches = useMediaQuery("(max-width:1000px)");

  const navMenus = [
    { name: "Home", linkurl: "" },
    { name: "OurServices", linkurl: "" },
    { name: "Country", linkurl: "" },
    { name: "How it works", linkurl: "" },
    { name: "ClientFeedback", linkurl: "" },
    { name: "About Us", linkurl: "" },
    { name: "Contact Us", linkurl: "" },
  ];

  const [state, setState] = useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#fff",
          position:"static"
        }}
      >
        <Toolbar>
          <img
            src="/public/assets/Logo.jpg"
            alt="srisairamconsultancy"
            className="logo-img"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "black",
              textDecoration: "none",
            }}
          >
            SriSaiRam Consultancy
          </Typography>
          <Box sx={{ display: "flex", position: "absolute", right: "20px" }}>
            {navMenus.map((menu, index) => (
              <Typography
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: matches ? "none" : "flex",
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                  cursor: "pointer",
                  padding: "5px",
                  "&:hover": {
                    background: "#d3eff5",
                    borderRadius: "10px",
                  },
                }}
                key={index}
              >
                {menu.name}
              </Typography>
            ))}

            <IconButton onClick={toggleDrawer("top", true)}>
              <MenuIcon
                sx={{
                  display: matches ? "flex" : "none",
                  color: theme.palette.primary.main,
                  fontSize: "35px",
                }}
              />
            </IconButton>
            <Drawer
              anchor={"top"}
              open={state["top"]}
              onClose={toggleDrawer("top", false)}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <img
                  src="/public/assets/Logo.jpg"
                  alt="srisairamconsultancy"
                  className="logo-img"
                  style={{ margin: "10px" }}
                />
                <IconButton onClick={toggleDrawer("top", false)}>
                  <CloseIcon
                    sx={{
                      fontSize: "35px",
                    }}
                  />
                </IconButton>
              </Box>

              {navMenus.map((menu, index) => (
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    "&:hover": {
                      background: "#dadfe0",
                    },
                  }}
                  key={index}
                >
                  {menu.name}
                </Typography>
              ))}
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
