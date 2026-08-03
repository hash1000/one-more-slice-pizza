import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { containerClasses } from "../../utils/layout";
import { Logo } from "../ui/Logo";

interface FooterColumn {
  title: string;
  links: { label: string; to: string }[];
}

const columns: FooterColumn[] = [
  {
    title: "Restaurant",
    links: [
      { label: "Menu", to: "/menu" },
      { label: "Slices", to: "/locations" },
      { label: "Make your own Pizza", to: "/locations" },
      { label: "Why ONE MORE SLICE PIZZA?", to: "/locations" },
      { label: "Locations", to: "/locations" },
    ],
  },
  {
    title: "About us",
    links: [
      { label: "About ONE MORE SLICE PIZZA", to: "/about" },
      { label: "FAQs", to: "/about" },
      { label: "Terms and Conditions", to: "/about" },
      { label: "Privacy Policy", to: "/about" },
    ],
  },
  {
    title: "Partner with us",
    links: [
      { label: "Franchising", to: "/partner" },
      { label: "Contact the Franchising Team", to: "/join-us" },
      { label: "Ask a Question", to: "/join-us" },
    ],
  },
];

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com", icon: FaTwitter },
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70 mt-28">
      <div
        className={`${containerClasses} grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8`}
      >
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-flex w-fit">
            <Logo variant="badge" className="h-14 w-auto text-white" />
          </Link>
          <div>
            <p className="font-display text-base font-semibold text-cream/80">
              Every slice leaves you
            </p>
            <p className="font-display text-base font-semibold text-cream/80">
              wanting one more.
            </p>
          </div>

          <div className="mt-2 flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-md bg-orange text-charcoal transition-colors duration-150 ease-in-out hover:bg-orange/80"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((column) => (
          <nav
            key={column.title}
            aria-label={column.title}
            className="flex flex-col gap-4"
          >
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-cream">
              {column.title}
            </p>
            <ul className="flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-cream/70 transition-colors duration-150 ease-in-out hover:text-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="bg-orange py-3 text-center font-body text-sm font-medium text-charcoal">
        &copy; {new Date().getFullYear()} One More Slice Pizza. All rights
        reserved.
      </div>
    </footer>
  );
}
