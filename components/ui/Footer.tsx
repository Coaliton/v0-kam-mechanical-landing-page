import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { FOOTER_COLUMNS, LEGAL_LINKS } from "@/lib/footer-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-950 border-t border-white/10" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label="KAM Mechanical home">
              <Image
                src="/images/kam-logo.png"
                alt=""
                width={112}
                height={112}
                className="w-28 h-auto"
              />
            </Link>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">{BUSINESS.name}</p>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">{BUSINESS.serviceArea}</p>

            <div className="flex items-center gap-3">
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KAM Mechanical on Facebook"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-yellow-500 hover:text-black transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS.social.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KAM Mechanical on Google"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-yellow-500 hover:text-black transition-colors font-bold text-sm"
              >
                G
              </a>
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className="text-xs uppercase tracking-widest text-yellow-500 font-semibold mb-4">
                {column.heading}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs uppercase tracking-widest text-yellow-500 font-semibold mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-start gap-2 text-sm text-neutral-300 hover:text-white transition-colors group"
                  aria-label={`Call ${BUSINESS.phoneFormatted}`}
                >
                  <Phone className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">{BUSINESS.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.emailHref}
                  className="flex items-start gap-2 text-sm text-neutral-400 hover:text-white transition-colors break-all"
                  aria-label={`Email ${BUSINESS.email}`}
                >
                  <Mail className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>{BUSINESS.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-400">
                <MapPin className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span>New Orleans Metro</span>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-yellow-500 font-semibold">
                  24/7 Emergency
                </span>
              </div>
              <p className="text-xs text-neutral-400">We answer day or night</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500 text-center md:text-left">
            © {currentYear} {BUSINESS.name}. All rights reserved.
          </p>
          <nav className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6" aria-label="Legal">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-neutral-500 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
