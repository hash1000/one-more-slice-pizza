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
          className="group relative py-1 font-display text-sm font-semibold uppercase tracking-wide text-cream/60 transition-colors duration-150 ease-in-out hover:text-orange"
        >
          About Us
          <span
            className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-orange transition-transform duration-200 ease-out group-hover:scale-x-100"
            aria-hidden="true"
          />
        </Link>
        <p className="font-body text-sm text-cream/40">
          &copy; {new Date().getFullYear()} One More Slice Pizza. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
