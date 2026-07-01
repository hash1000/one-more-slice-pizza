import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { JoinUs } from "../pages/JoinUs";
import { Locations } from "../pages/Locations";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/join-us" element={<JoinUs />} />
    </Routes>
  );
}
