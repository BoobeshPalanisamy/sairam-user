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
import { useLocation, useNavigate } from "react-router";
import { paths } from "../routes/paths";

type Anchor = "top";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const matches = useMediaQuery("(max-width:1000px)");

  const navMenus = [
    { name: "Home", linkURL: paths.HOME },
    { name: "OurServices", linkURL: "" },
    { name: "Country", linkURL: paths.COUNTRY },
    { name: "How it works", linkURL: "" },
    { name: "ClientFeedback", linkURL: "" },
    { name: "About Us", linkURL: paths.ABOUTUS },
    { name: "Contact Us", linkURL: paths.CONTACT },
  ];

  const [state, setState] = useState<{ top: boolean }>({
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

  const handleNavigate = (linkURL: string) => {
    navigate(linkURL);
    setState({ top: false });
  };

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#fff",
          position: "sticky",
        }}
      >
        <Toolbar>
          <img
            src="assets/Logo.jpg"
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
                  textDecoration: "none",
                  cursor: "pointer",
                  padding: "5px",
                  color:
                    location.pathname === menu.linkURL
                      ? "#fff"
                      : theme.palette.secondary.main,
                  backgroundColor:
                    location.pathname === menu.linkURL
                      ? theme.palette.secondary.main
                      : "transparent",
                  borderRadius: "50px",
                  "&:hover": {
                    background: theme.palette.primary.main,
                    color: "white",
                    paddingLeft: "10px",
                  },
                }}
                key={index}
                onClick={() => handleNavigate(menu.linkURL)}
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
                  src="assets/Logo.jpg"
                  alt="srisairamconsultancy"
                  className="logo-img"
                  style={{ margin: "10px" }}
                />
                <IconButton onClick={toggleDrawer("top", false)}>
                  <CloseIcon
                    sx={{
                      fontSize: "35px",
                      color: "#f2465d",
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
                    textDecoration: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor:
                      location.pathname === menu.linkURL
                        ? theme.palette.secondary.main
                        : "transparent",
                    color:
                      location.pathname === menu.linkURL
                        ? "#fff"
                        : theme.palette.primary.main,
                    "&:hover": {
                      background: theme.palette.secondary.main,
                      color: "#fff",
                    },
                  }}
                  key={index}
                  onClick={() => handleNavigate(menu.linkURL)}
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
