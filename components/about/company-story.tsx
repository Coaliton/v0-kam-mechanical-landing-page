"use client"

const milestones = [
  {
    year: "2009",
    title: "Company Founded",
    description: "KAM Mechanical Construction LLC was established with a vision to bring industrial-grade quality to every project, big or small."
  },
  {
    year: "2012",
    title: "First Major Contract",
    description: "Secured our first major industrial piping contract for a regional manufacturing facility, establishing our reputation for excellence."
  },
  {
    year: "2015",
    title: "BIM Division Launch",
    description: "Launched dedicated BIM modeling and coordination services, bringing cutting-edge technology to mechanical construction."
  },
  {
    year: "2018",
    title: "Residential Division",
    description: "Expanded into residential HVAC and plumbing services, bringing commercial-grade quality to homeowners."
  },
  {
    year: "2021",
    title: "50+ Team Members",
    description: "Grew our team to over 50 skilled professionals, including journeyman pipefitters, HVAC technicians, and project managers."
  },
  {
    year: "2024",
    title: "500+ Projects",
    description: "Celebrated completing over 500 successful projects while maintaining our perfect safety record."
  },
]

export function CompanyStory() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Story Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-gold" />
              <span className="text-gold font-medium text-sm uppercase tracking-wider">Our Story</span>
            </div>
            
            <h2 className="font-display font-bold text-3xl md:text-4xl text-warm mb-6 text-balance">
              From Humble Beginnings to Industry Leaders
            </h2>
            
            <div className="space-y-6 text-steel leading-relaxed">
              <p>
                KAM Mechanical Construction LLC was founded on a simple principle: every project, 
                regardless of size, deserves the same level of expertise, precision, and care. 
                What started as a small team of dedicated mechanical professionals has grown into 
                a comprehensive construction company serving both commercial and residential clients.
              </p>
              
              <p>
                Our founder recognized a gap in the market—homeowners often received subpar service 
                compared to commercial clients. We set out to change that by bringing industrial-grade 
                quality, safety standards, and professionalism to every job we take on.
              </p>
              
              <p>
                Today, we&apos;re proud to maintain our perfect safety record while completing over 500 
                projects ranging from multi-million dollar industrial installations to residential 
                AC replacements. Our team of 50+ skilled professionals shares a commitment to 
                excellence that has made KAM a trusted name in mechanical construction.
              </p>
            </div>
            
            {/* Mission Statement */}
            <div className="mt-8 p-6 bg-pitch/50 border border-gold/30 rounded-xl">
              <h3 className="font-display font-semibold text-lg text-gold mb-3">Our Mission</h3>
              <p className="text-warm italic leading-relaxed">
                &quot;To deliver exceptional mechanical construction services that exceed expectations, 
                prioritize safety, and build lasting relationships with our clients and communities.&quot;
              </p>
            </div>
          </div>
          
          {/* Timeline */}
          <div>
            <h3 className="font-display font-semibold text-xl text-warm mb-8">
              Key Milestones
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
              
              {/* Milestones */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Dot */}
                    <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-charcoal border-2 border-gold flex items-center justify-center">
                      <span className="text-xs font-bold text-gold">{milestone.year.slice(-2)}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="pb-2">
                      <span className="text-sm text-gold font-medium">{milestone.year}</span>
                      <h4 className="font-display font-semibold text-warm mt-1">{milestone.title}</h4>
                      <p className="text-steel text-sm mt-2 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
