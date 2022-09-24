import { Route, Routes } from "react-router";
import Home from "./Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
