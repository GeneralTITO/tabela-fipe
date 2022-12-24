import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/home";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
