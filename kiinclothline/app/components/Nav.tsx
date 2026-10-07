"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#collection", label: "Collection" },
  { href: "#process", label: "Process" },
  { href: "#visit", label: "Visit Us" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="logo">KIIN <span>Clothline</span></a>
        <button className="nav__toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={`nav__links${open ? " open" : ""}`} onClick={() => setOpen(false)}>
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href="#booking" className="btn btn--small">Book a Fitting</a>
        </nav>
      </div>
    </header>
  );
}
