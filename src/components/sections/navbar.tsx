"use client";

import React from "react";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "@/components/ui/button";

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar(): React.ReactElement {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <a href="#home" className="font-sans font-semibold tracking-tight">
          Ahmed Amr Soffar
        </a>
        <div className="flex items-center gap-4">
          <ul className="hidden sm:flex items-center gap-6 text-sm text-foreground/80">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden sm:block">
            <Button
              size="sm"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Hire me
            </Button>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
