import { EmergencyBanner } from "@/components/ui/EmergencyBanner";
import { PhoneCTA } from "@/components/ui/PhoneCTA";
import { BUSINESS } from "@/lib/constants";

export default function TopUtilityBar() {
  return (
    <div className="w-full border-b border-white/5 bg-[#0a0a0a] px-4 py-2 md:px-6">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 text-xs">
        <p className="hidden text-neutral-400 md:block">{BUSINESS.serviceArea}</p>
        <div className="flex flex-1 justify-center md:flex-none">
          <EmergencyBanner />
        </div>
        <PhoneCTA variant="ghost" />
      </div>
    </div>
  );
}
