"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface TypewriterProps {
  text: string;
  delayMs?: number;
}

function Typewriter({
  text,
  delayMs = 40,
}: TypewriterProps): React.ReactElement {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let isCancelled = false;
    let i = 0;
    function tick() {
      if (isCancelled) return;
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i += 1;
        setTimeout(tick, delayMs);
      }
    }
    tick();
    return () => {
      isCancelled = true;
    };
  }, [text, delayMs]);

  return <span aria-label={text}>{displayed}</span>;
}

export function Hero(): React.ReactElement {
  return (
    <section id="home" className="pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <p className="text-sm uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
          Portfolio
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight">
          <Typewriter text="Ahmed Amr Soffar" delayMs={35} />
        </h1>
        <p className="mt-4 max-w-2xl text-foreground/80 text-base sm:text-lg">
          Backend-leaning full-stack developer creating performant APIs and
          responsive web apps with Node.js and Next.js — leveraging advanced AI
          tools to craft modern, efficient front-end experiences.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <Button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
