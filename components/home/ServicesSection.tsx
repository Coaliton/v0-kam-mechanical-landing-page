import DivisionRow from "./DivisionRow";
import { getServicesByDivision } from "@/lib/services";

export default function ServicesSection() {
  const commercialServices = getServicesByDivision("commercial");
  const residentialServices = getServicesByDivision("residential");

  return (
    <section
      aria-label="KAM Mechanical services"
      className="w-full bg-black py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <DivisionRow
          eyebrow="Commercial Division"
          headline="Industrial-Scale Mechanical Solutions"
          description="From hospitals to data centers and mechanical rooms - statewide Louisiana service backed by 15+ years of expertise."
          services={commercialServices}
          viewAllHref="/services#commercial"
          viewAllLabel="View All Commercial Services"
        />
        <DivisionRow
          eyebrow="Residential Division"
          headline="Home Comfort, Done Right"
          description="Same-day service across the New Orleans metro. Fixed pricing. Background-checked technicians. 24/7 emergency availability."
          services={residentialServices}
          viewAllHref="/services#residential"
          viewAllLabel="View All Residential Services"
        />
      </div>
    </section>
  );
}
