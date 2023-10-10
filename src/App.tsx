import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { paths } from "./routes/paths";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import Contact from "./pages/home/contact/Contact";

function App() {
  return (
    <>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path={paths.ROOT} element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path={paths.HOME} element={<Home />}></Route>
              <Route path={paths.CONTACT} element={<Contact />}></Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </HashRouter>
    </>
  );
}

export default App;
