import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Box mt={4}>
        <Footer />
      </Box>
    </>
  );
}

export default Layout;
