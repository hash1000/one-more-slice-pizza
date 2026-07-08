import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { navLinks } from "../../data/navigation";
import { buttonClasses } from "../../utils/buttonStyles";
import { containerClasses } from "../../utils/layout";
import { Logo } from "../../components/ui/Logo";

export function Navbar({ offset = false }: { offset?: boolean }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setOpen(false);

    if (href.startsWith("/")) {
      if (location.pathname === href) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(href);
      }
      return;
    }

    if (location.pathname !== "/") {
      navigate(`/${href}`);
      return;
    }

    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const isLinkActive = (href: string) =>
    href.startsWith("/")
      ? location.pathname === href
      : location.pathname === "/" && location.hash === href;

  return (
    <header
      className={`fixed inset-x-0 z-50 bg-cream/85 backdrop-blur-md shadow-[0_4px_30px_-15px_rgba(34,23,16,0.3)] ${
        offset ? "top-9" : "top-0"
      }`}
    >
      <nav className={`${containerClasses} flex items-center justify-between py-3`}>
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Logo variant="plain" className="h-14 w-auto sm:h-18" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`cursor-pointer font-display text-sm font-semibold uppercase tracking-wide transition-colors hover:text-orange ${
                isLinkActive(link.href) ? "text-orange" : "text-charcoal/80"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick("/menu")}
            className={buttonClasses("dark", "sm")}
          >
            See the Slices
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full border border-charcoal/15 bg-white/60 md:hidden"
        >
          <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="h-0.5 w-5 rounded-full bg-charcoal" />
          <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="h-0.5 w-5 rounded-full bg-charcoal" />
          <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="h-0.5 w-5 rounded-full bg-charcoal" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-cream/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`cursor-pointer rounded-xl px-4 py-3 text-left font-display text-base font-semibold transition-colors hover:bg-orange/10 hover:text-orange ${
                    isLinkActive(link.href) ? "bg-orange/10 text-orange" : "text-charcoal"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("/menu")}
                className={buttonClasses("primary", "sm", "mt-2 w-full")}
              >
                See the Slices
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
