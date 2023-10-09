import { Box } from "@mui/material";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Box>
        <Navbar />
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
