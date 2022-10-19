import { BrowserRouter, Route, Routes } from "react-router-dom";
import Consent from "./pages/consent";

const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Consent/>} />
        </Routes>
      </BrowserRouter>
  );
};

export default Router;
