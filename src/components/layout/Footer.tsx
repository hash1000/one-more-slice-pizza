import { Link } from "react-router-dom";
import { containerClasses } from "../../utils/layout";
import { Logo } from "../ui/Logo";

export function Footer() {
  return (
    <footer className="bg-charcoal py-10 text-cream/60">
      <div className={`${containerClasses} flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left`}>
        <Logo variant="badge" className="h-11 w-11" />
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-cream/50">
          Every slice leaves you wanting one more.
        </p>
        <Link
          to="/about"
          className="font-display text-sm font-semibold uppercase tracking-wide text-cream/60 transition-colors hover:text-orange"
        >
          About Us
        </Link>
        <p className="font-body text-sm text-cream/40">
          &copy; {new Date().getFullYear()} One More Slice Pizza. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
