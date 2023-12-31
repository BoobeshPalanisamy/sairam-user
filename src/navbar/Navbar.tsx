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
import { Link } from "react-router-dom";

type Anchor = "top";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const matches = useMediaQuery("(max-width:1000px)");

  const navMenus = [
    { name: "Home", linkURL: paths.HOME },
    { name: "OurServices", linkURL: paths.OURSERVICES },
    { name: "Country", linkURL: paths.COUNTRY },
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
          <Link to={paths.HOME}>
            <img
              src="assets/Logo.jpg"
              alt="srisairamconsultancy"
              className="logo-img"
            />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: theme.palette.primary.main,
              textDecoration: "none",
              fontSize: "25px",
              fontFamily: "timesnewroman",
            }}
          >
            Sri SaiRam Academy and Career Consultancy
          </Typography>
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              right: "20px",
            }}
          >
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
                    location.pathname === menu.linkURL ? "#fff" : "#ef9e08",
                  backgroundColor:
                    location.pathname === menu.linkURL
                      ? "orange"
                      : "transparent",
                  borderRadius: "50px",
                  "&:hover": {
                    background: "#ffc966",
                    color: "white",
                    paddingLeft: "5px",
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
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <img
                    src="assets/Logo.jpg"
                    alt="srisairamconsultancy"
                    className="logo-img"
                    style={{ margin: "10px" }}
                  />
                  <Box>
                    <IconButton onClick={toggleDrawer("top", false)}>
                      <CloseIcon
                        sx={{
                          fontSize: "35px",
                          color: "#f2465d",
                        }}
                      />
                    </IconButton>
                  </Box>
                </Box>

                {navMenus.map((menu, index) => (
                  <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    sx={{
                      mr: 2,
                      width: "100%",
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
                      paddingBottom: "10px",
                    }}
                    key={index}
                    onClick={() => handleNavigate(menu.linkURL)}
                  >
                    {menu.name}
                  </Typography>
                ))}
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
