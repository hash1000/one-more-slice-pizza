import logoFull from "../../assets/images/brand/logo.png";
import logoMark from "../../assets/images/brand/logo-mark.png";

interface LogoProps {
  /** "plain" for light backgrounds, "badge" for dark backgrounds */
  variant?: "plain" | "badge";
  className?: string;
}

export function Logo({ variant = "plain", className = "" }: LogoProps) {
  if (variant === "badge") {
    return (
      <span className={`inline-flex shrink-0 items-center justify-center rounded-full bg-white shadow-sm ${className}`}>
        <img src={logoMark} alt="One More Slice Pizza" className="h-[56%] w-[56%] object-contain" />
      </span>
    );
  }

  return <img src={logoFull} alt="One More Slice Pizza" className={className} />;
}
