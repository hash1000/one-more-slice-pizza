export type ButtonVariant = "primary" | "secondary" | "dark" | "light";
export type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-orange text-cream shadow-warm hover:shadow-warm-lg hover:-translate-y-1",
  secondary:
    "border-2 border-charcoal/15 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-cream",
  dark: "bg-charcoal text-cream shadow-soft hover:bg-orange hover:shadow-warm hover:-translate-y-0.5",
  light: "bg-cream text-charcoal shadow-warm-lg hover:bg-white hover:-translate-y-1",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-6 py-3 text-sm",
  md: "px-8 py-4 text-base",
  lg: "px-10 py-4 text-base",
};

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className = ""
) {
  return `inline-block cursor-pointer rounded-full text-center font-display font-bold uppercase tracking-wide transition-all duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
}
