"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

interface ProjectPreviewProps {
  images?: string[];
  fallback?: string;
  title: string;
}

export function ProjectPreview({
  images,
  fallback,
  title,
}: ProjectPreviewProps): React.ReactElement {
  const sources = useMemo(() => {
    const list = Array.isArray(images) ? images.filter(Boolean) : [];
    if (list.length > 0) return list;
    return fallback ? [fallback] : [];
  }, [images, fallback]);

  const [hovered, setHovered] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!hovered || sources.length <= 1) {
      setIndex(0);
      return;
    }
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % sources.length);
    }, 800);
    return () => clearInterval(id);
  }, [hovered, sources.length]);

  function toSafe(src: string): string {
    // Ensure spaces and special chars are encoded for URL usage
    try {
      return src.startsWith("/") ? encodeURI(src) : src;
    } catch {
      return src;
    }
  }

  return (
    <div
      className="aspect-video relative bg-foreground/5 overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {sources.map((src, i) => (
        <Image
          key={src}
          src={toSafe(src)}
          alt={title}
          fill
          className="object-cover transition-[opacity,transform] duration-500 group-hover:scale-[1.03]"
          style={{ opacity: i === index ? 1 : 0 }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      ))}
    </div>
  );
}
