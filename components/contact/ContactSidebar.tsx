import { Phone, Mail, MapPin, Clock, Home, Building2 } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { BUSINESS_HOURS, EMERGENCY_NOTE } from '@/lib/contact-config';

export default function ContactSidebar() {
  return (
    <aside className="space-y-8">
      <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6 md:p-8">
        <h3 className="mb-6 text-lg font-semibold text-white">Get In Touch</h3>
        <div className="space-y-5">
          <a href={BUSINESS.phoneHref} className="group flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
            <div>
              <div className="mb-0.5 text-xs uppercase tracking-wider text-neutral-500">Phone</div>
              <div className="font-semibold text-white transition-colors group-hover:text-yellow-500">
                {BUSINESS.phoneFormatted}
              </div>
            </div>
          </a>
          <a href={BUSINESS.emailHref} className="group flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
            <div>
              <div className="mb-0.5 text-xs uppercase tracking-wider text-neutral-500">Email</div>
              <div className="break-all font-semibold text-white transition-colors group-hover:text-yellow-500">
                {BUSINESS.email}
              </div>
            </div>
          </a>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
            <div>
              <div className="mb-0.5 text-xs uppercase tracking-wider text-neutral-500">Service Based</div>
              <div className="text-white">We come to you</div>
              <div className="mt-1 text-xs text-neutral-400">New Orleans metro & statewide Louisiana</div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6 md:p-8">
        <div className="mb-5 flex items-center gap-2">
          <Clock className="h-5 w-5 text-yellow-500" />
          <h3 className="text-lg font-semibold text-white">Business Hours</h3>
        </div>
        <div className="mb-5 space-y-3 border-b border-white/10 pb-5">
          {BUSINESS_HOURS.map((item) => (
            <div key={item.day} className="flex justify-between gap-3">
              <span className="text-sm text-neutral-300">{item.day}</span>
              <span className="text-right text-sm font-medium text-white">{item.hours}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-500" />
          <span className="text-xs font-semibold uppercase tracking-widest text-yellow-500">{EMERGENCY_NOTE}</span>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6 md:p-8">
        <h3 className="mb-5 text-lg font-semibold text-white">Who We Serve</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Home className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
            <div>
              <div className="mb-1 text-sm font-medium text-white">Residential</div>
              <div className="text-xs leading-relaxed text-neutral-400">
                Orleans, Jefferson, St. Bernard, St. Tammany parishes
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Building2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
            <div>
              <div className="mb-1 text-sm font-medium text-white">Commercial</div>
              <div className="text-xs leading-relaxed text-neutral-400">
                New Orleans metro plus statewide Louisiana coverage
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
