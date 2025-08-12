import React from "react";

export function AboutSection(): React.ReactElement {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About</h2>
      <p className="mt-4 max-w-3xl text-foreground/80">
        I am Ahmed Amr Soffar, a full-stack developer with a backend-leaning
        skill set, experienced in building secure and scalable APIs, managing
        databases, and integrating server-side logic with modern interfaces. My
        primary tools are Node.js, Laravel, and MongoDB, while I also work with
        Next.js, React, and Tailwind CSS for building responsive, accessible
        UIs. I’m passionate about solving complex technical problems and
        delivering software that performs well in real-world conditions.
      </p>
    </section>
  );
}
