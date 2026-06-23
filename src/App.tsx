import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./components/layout";
import { Home, JoinUs, Menu, Locations } from "./pages";

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="relative">
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
