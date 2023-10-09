import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { paths } from "./routes/paths";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={paths.ROOT} element={<Layout />}>
            <Route index element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
