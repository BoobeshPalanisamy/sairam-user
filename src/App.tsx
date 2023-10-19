import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { paths } from "./routes/paths";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import Contact from "./pages/contact/Contact";
import Country from "./pages/country/Country";
import AboutUs from "./pages/aboutus/AboutUs";
import Ourservices from "./pages/ourservices/Ourservices";
import SocialMediaNavigator from "./components/SocialMediaNavigator";

function App() {
  return (
    <>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <SocialMediaNavigator />
          <Routes>
            <Route path={paths.ROOT} element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path={paths.HOME} element={<Home />}></Route>
              <Route path={paths.CONTACT} element={<Contact />}></Route>
              <Route path={paths.COUNTRY} element={<Country />}></Route>
              <Route path={paths.ABOUTUS} element={<AboutUs />}></Route>
              <Route path={paths.OURSERVICES} element={<Ourservices />}></Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </HashRouter>
    </>
  );
}

export default App;
