import CommercialPanel from "@/components/home/CommercialPanel";
import ResidentialPanel from "@/components/home/ResidentialPanel";

export default function Hero() {
  return (
    <section className="relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0a0a]" />
      <div className="relative grid grid-cols-1 md:min-h-screen md:grid-cols-[1fr_auto_1fr]">
        <CommercialPanel />
        <div className="hidden w-px bg-[#D4AF37]/20 md:block" aria-hidden="true" />
        <ResidentialPanel />
      </div>
    </section>
  );
}
