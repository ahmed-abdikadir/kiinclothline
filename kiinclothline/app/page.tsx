import Image from "next/image";
import Nav from "@/app/components/Nav";
import Gallery from "@/app/components/Gallery";
import BookingForm from "@/app/components/BookingForm";
import { site, suits } from "@/app/lib/site";

const services = [
  { title: "Wedding Suits", text: "Suits for grooms and groomsmen, with coordinated colours for the whole party." },
  { title: "Business Suits", text: "Two-piece, three-piece and double-breasted suits, cut sharp and comfortable enough to wear every day." },
  { title: "Tuxedos & Evening Wear", text: "Dinner jackets and formal wear for galas, dinners and black-tie events." },
  { title: "Alterations", text: "Refitting and adjustments so the suits you already own fit you properly again." },
];

const steps = [
  { title: "Book", text: "Fill in the booking form below with your details and the suit you want." },
  { title: "Consult & Measure", text: "Visit our Eastleigh shop, choose your fabric and get fully measured." },
  { title: "Fitting", text: "Try the suit on while it is being made so we can get every detail right." },
  { title: "Collect", text: "Pick up your finished suit, pressed and ready to wear." },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__content">
              <p className="eyebrow">Bespoke Tailoring &middot; Eastleigh, Nairobi</p>
              <h1>Suits cut for you,<br />and nobody else.</h1>
              <p className="hero__lead">
                Kiin Clothline makes every suit by hand, from the first measurement to the last stitch, to fit your body, your style and your occasion.
              </p>
              <div className="hero__actions">
                <a href="#booking" className="btn">Book a Fitting</a>
                <a href="#collection" className="btn btn--ghost">View Our Suits</a>
              </div>
            </div>
            <div className="hero__images">
              <div className="hero__img hero__img--main">
                <Image src="/suits/navy-pinstripe-double-breasted.jpg" alt="Navy pinstripe double-breasted suit by Kiin Clothline" fill preload sizes="(max-width: 900px) 60vw, 30vw" />
              </div>
              <div className="hero__img hero__img--side">
                <Image src="/suits/embroidered-groom-suit.jpg" alt="Embroidered ivory groom suit" fill sizes="(max-width: 900px) 40vw, 20vw" />
              </div>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="container about__grid">
            <div className="about__images">
              <div className="about__img"><Image src="/suits/cream-double-breasted.jpg" alt="Cream double-breasted suit in the Kiin Clothline studio" fill sizes="(max-width: 900px) 50vw, 25vw" /></div>
              <div className="about__img about__img--offset"><Image src="/suits/grey-check-details.jpg" alt="Shirt, tie and suit fabric details" fill sizes="(max-width: 900px) 50vw, 25vw" /></div>
            </div>
            <div>
              <p className="eyebrow">Our Story</p>
              <h2>Tailored in the heart of Eastleigh</h2>
              <p>
                Kiin Clothline started with one belief: a suit should be made for the person wearing it. Every suit begins with a conversation in our Eastleigh workshop. We talk about your occasion, choose the cloth together, take your measurements and then cut and sew the suit for you.
              </p>
              <ul className="stats">
                <li><strong>100%</strong><span>Made to measure</span></li>
                <li><strong>3</strong><span>Fittings per suit</span></li>
                <li><strong>Premium</strong><span>Fabrics</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section collection" id="collection">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow">The Collection</p>
              <h2>Suits we have tailored</h2>
              <p>
                Some of the suits our clients have worn to weddings, boardrooms and celebrations. See more on{" "}
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="gold-link">Instagram</a>.
              </p>
            </div>
            <Gallery suits={suits} />
          </div>
        </section>

        <section className="section services">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow">What We Make</p>
              <h2>Our services</h2>
            </div>
            <div className="cards">
              {services.map((s) => (
                <article key={s.title} className="card"><h3>{s.title}</h3><p>{s.text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process" id="process">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow">How It Works</p>
              <h2>From measurement to masterpiece</h2>
            </div>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{s.title}</h3><p>{s.text}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section booking" id="booking">
          <div className="container booking__grid">
            <div className="booking__intro">
              <p className="eyebrow">Book a Fitting</p>
              <h2>Reserve your appointment</h2>
              <p>Tell us about yourself and the suit you want. We will call or WhatsApp you to confirm your fitting time.</p>
              <p className="muted">Measurements are optional. If you don&apos;t have them, leave them blank and we will measure you in the shop.</p>
              <div className="booking__img"><Image src="/suits/brown-check-blazer.jpg" alt="Brown check blazer on a Kiin Clothline mannequin" fill sizes="(max-width: 900px) 0px, 30vw" /></div>
            </div>
            <BookingForm />
          </div>
        </section>

        <section className="section visit" id="visit">
          <div className="container visit__grid">
            <div>
              <p className="eyebrow">Visit Us</p>
              <h2>Find us in Eastleigh</h2>
              <ul className="contact">
                <li><strong>Address</strong><span>{site.location}</span></li>
                <li><strong>Hours</strong><span>Mon – Sat: 9:00am – 7:00pm<br />Sunday: By appointment</span></li>
                <li><strong>Phone / WhatsApp</strong><span><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></span></li>
                <li><strong>Instagram</strong><span><a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}</a></span></li>
              </ul>
              <div className="visit__actions">
                <a className="btn" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                <a className="btn btn--ghost" href={site.instagram} target="_blank" rel="noopener noreferrer">Follow on Instagram</a>
              </div>
            </div>
            <div className="map">
              <iframe title="Kiin Clothline location map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={site.mapEmbed} />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <a href="#top" className="logo">KIIN <span>Clothline</span></a>
          <a className="footer__ig" href={site.instagram} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
            {site.instagramHandle}
          </a>
          <p>&copy; {site.name} &middot; Bespoke Tailoring &middot; {site.location}</p>
        </div>
      </footer>
    </>
  );
}
