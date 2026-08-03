import logoFull from "../../assets/images/brand/logo.webp";
// import logoMark from "../../assets/images/brand/logo-mark.png";
import FooterLogo from "../../assets/images/brand/footer-logo.svg";

interface LogoProps {
  /** "plain" for light backgrounds, "badge" for dark backgrounds */
  variant?: "plain" | "badge";
  className?: string;
}

export function Logo({ variant = "plain", className = "" }: LogoProps) {
  if (variant === "badge") {
    return (
    <img src={FooterLogo} alt="One More Slice Pizza" className={className} />
    );
  }

  return <img src={logoFull} alt="One More Slice Pizza" className={className} />;
}
