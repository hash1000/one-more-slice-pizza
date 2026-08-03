import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className = "", id }: ContainerProps) {
  return (
    <div
      id={id}
      className={`relative w-full overflow-hidden bg-[#FAF7F2] pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-20 sm:ps-4 lg:pe-4 ${className}`}
    >
      {children}
    </div>
  );
}
