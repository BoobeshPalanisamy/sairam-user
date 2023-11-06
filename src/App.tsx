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
import StudyVisa from "./pages/ourservices/StudyVisa";
import CareHomeVisa from "./pages/ourservices/CareHomeVisa";
import Ielts from "./pages/ourservices/Ielts";
import Toelf from "./pages/ourservices/Toefl";
import CommunicationalTrainingPage from "./pages/ourservices/CommunicationalTrainingPage";
import Pte from "./pages/ourservices/Pte";
import Duolingo from "./pages/ourservices/Duolingo";

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
              <Route path={paths.STUDYVISA} element={<StudyVisa />}></Route>
              <Route
                path={paths.CAREHOMEVISA}
                element={<CareHomeVisa />}
              ></Route>
              <Route
                path={paths.CAREHOMEVISA}
                element={<CareHomeVisa />}
              ></Route>
              <Route
                path={paths.COMMUNICATIONTRAINING}
                element={<CommunicationalTrainingPage />}
              ></Route>
              <Route path={paths.IELTS} element={<Ielts />}></Route>
              <Route path={paths.TOEFL} element={<Toelf />}></Route>
              <Route path={paths.PTE} element={<Pte />}></Route>
              <Route path={paths.DUOLINGO} element={<Duolingo />}></Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </HashRouter>
    </>
  );
}

export default App;
