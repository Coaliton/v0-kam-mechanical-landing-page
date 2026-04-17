import { Phone } from "lucide-react";

import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type PhoneCTAVariant = "primary" | "ghost";

interface PhoneCTAProps {
  variant?: PhoneCTAVariant;
  className?: string;
  label?: string;
}

export function PhoneCTA({
  variant = "primary",
  className,
  label = BUSINESS.phoneFormatted,
}: PhoneCTAProps) {
  const ariaLabel = `Call KAM Mechanical at ${BUSINESS.phone}`;

  if (variant === "ghost") {
    return (
      <a
        href={BUSINESS.phoneHref}
        aria-label={ariaLabel}
        className={cn(
          "inline-flex items-center gap-2 text-sm font-medium text-zinc-200 transition-colors hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          className
        )}
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={BUSINESS.phoneHref}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-[#E5C158] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        className
      )}
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
