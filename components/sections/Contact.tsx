"use client";

import { Github, Gitlab, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CONTACT, SITE } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GlassCard from "@/components/ui/GlassCard";
import MagneticButton from "@/components/ui/MagneticButton";
import type { ContactLink } from "@/types";

const ICONS: Record<ContactLink["icon"], typeof Mail> = {
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
  github: Github,
  gitlab: Gitlab,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
};

export default function Contact() {
  const email = CONTACT.find((c) => c.icon === "mail")!;
  const whatsapp = CONTACT.find((c) => c.icon === "whatsapp")!;

  return (
    <section id="contact" className="relative px-6 py-20 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="// 05_contact"
          title="Let's build something."
          description={`Based in ${SITE.location}, working with clients everywhere. Open to full-time roles and freelance projects.`}
        />

        <RevealOnScroll>
          <GlassCard className="p-5 sm:p-10" glow="amber">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <MagneticButton href={email.href} variant="primary" className="w-full sm:w-auto">
                <Mail className="h-4 w-4" />
                Email Me
              </MagneticButton>
              <MagneticButton href={whatsapp.href} variant="ghost" className="w-full sm:w-auto">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </MagneticButton>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              {CONTACT.map((item) => {
                const Icon = ICONS[item.icon];
                // GitHub/GitLab and LinkedIn show only their name; the box links to the profile
                const labelOnly = item.icon === "github" || item.icon === "gitlab" || item.icon === "linkedin";
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex min-w-0 items-center gap-3 rounded-xl border border-line px-3.5 py-3 transition-colors duration-300 hover:border-teal/50 hover:bg-white/5 sm:gap-4 sm:px-4 sm:py-3.5"
                  >
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white/5 text-teal transition-colors group-hover:bg-teal/15">
                      <Icon className="h-[1.125rem] w-[1.125rem]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      {labelOnly ? (
                        <span className="block text-sm font-medium text-ink">{item.label}</span>
                      ) : (
                        <>
                          <span className="block text-xs text-muted">{item.label}</span>
                          <span className="block break-words text-sm font-medium text-ink">
                            {item.value}
                          </span>
                        </>
                      )}
                    </span>
                  </a>
                );
              })}
            </div>
          </GlassCard>
        </RevealOnScroll>
      </div>
    </section>
  );
}