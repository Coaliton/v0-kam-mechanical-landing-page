import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface EmergencyBannerProps {
  className?: string;
}

export function EmergencyBanner({ className }: EmergencyBannerProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.1)] px-3 py-1 text-xs font-medium text-[#E5C158]",
        className
      )}
    >
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4AF37] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D4AF37]" />
      </span>
      <span>{BUSINESS.emergencyText}</span>
    </div>
  );
}
