import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HalalBar } from "./components/layout/HalalBar";
import { AppRoutes } from "./router";

function App() {
  const { pathname, hash } = useLocation();
  const isMenuPage = pathname === "/menu";

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="relative bg-white">
      <div className="grain-overlay" />
      {isMenuPage && <HalalBar />}
      <Navbar offset={isMenuPage} />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
