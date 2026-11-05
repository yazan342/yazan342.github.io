"use client";

import { ArrowUp, Github, Gitlab, Linkedin, Mail } from "lucide-react";
import { CONTACT, SITE } from "@/lib/data";
import { useLenisInstance } from "@/components/layout/SmoothScrollProvider";

export default function Footer() {
  const lenis = useLenisInstance();
  const year = new Date().getFullYear();
  const github = CONTACT.find((c) => c.icon === "github" || c.icon === "gitlab");
  const CodeIcon = github?.icon === "gitlab" ? Gitlab : Github;
  const linkedin = CONTACT.find((c) => c.icon === "linkedin");
  const email = CONTACT.find((c) => c.icon === "mail");

  function scrollTop() {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between sm:px-8">
        <p className="text-balance text-center font-mono text-xs text-muted sm:text-left">
          © {year} {SITE.name}. Built with Next.js &amp; care.
        </p>

        <div className="flex items-center gap-4">
          {email && (
            <a
              href={email.href}
              aria-label="Email"
              className="text-muted transition-colors hover:text-teal"
            >
              <Mail className="h-[1.125rem] w-[1.125rem]" />
            </a>
          )}
          {github && (
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={github.label}
              className="text-muted transition-colors hover:text-teal"
            >
              <CodeIcon className="h-[1.125rem] w-[1.125rem]" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-teal"
            >
              <Linkedin className="h-[1.125rem] w-[1.125rem]" />
            </a>
          )}

          <button
            type="button"
            onClick={scrollTop}
            aria-label="Back to top"
            className="glass-panel ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:text-teal"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
