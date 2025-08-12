import React from "react";

export function Footer(): React.ReactElement {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-6 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-sm text-foreground/70 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>
          © {new Date().getFullYear()} Ahmed Amr Soffar. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:ahmedamrahmed73@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
          <a
            href="#projects"
            className="hover:text-foreground transition-colors"
          >
            Projects
          </a>
        </div>
      </div>
    </footer>
  );
}
