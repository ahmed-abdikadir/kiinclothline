"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Suit } from "@/app/lib/site";

export default function Gallery({ suits }: { suits: Suit[] }) {
  const categories = ["All", ...new Set(suits.map((s) => s.category))];
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<Suit | null>(null);
  const shown = suits.filter((s) => filter === "All" || s.category === filter);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="filters">
        {categories.map((c) => (
          <button key={c} type="button" className={c === filter ? "active" : ""} onClick={() => setFilter(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="gallery">
        {shown.map((s) => (
          <button key={`${s.category}-${s.title}`} type="button" className="suit" onClick={() => setActive(s)}>
            <div className="suit__img">
              <Image src={s.image} alt={s.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw" />
            </div>
            <div className="suit__info">
              <span className="suit__tag">{s.category}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          </button>
        ))}
      </div>
      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActive(null)}>
          <button className="lightbox__close" aria-label="Close">&times;</button>
          <div className="lightbox__img" onClick={(e) => e.stopPropagation()}>
            <Image src={active.image} alt={active.title} fill sizes="90vw" />
          </div>
          <p className="lightbox__caption">
            <strong>{active.title}</strong>: {active.description}
          </p>
          <div className="lightbox__actions">
            <a
              className="btn"
              href="#booking"
              onClick={(event) => {
                event.stopPropagation();
                window.dispatchEvent(new CustomEvent("kiin:suit-selected", {
                  detail: { title: active.title, category: active.category },
                }));
                setActive(null);
              }}
            >
              Ask about this style
            </a>
          </div>
        </div>
      )}
    </>
  );
}
