// ─────────────────────────────────────────────
//  ADAUX AGENCY — Main App (React + Babel CDN)
// ─────────────────────────────────────────────

const { useState, useEffect, useRef } = React;

// ── DATA ──────────────────────────────────────

const EVENTS = [
  { id: 1, title: "CYPHER NIGHTS VOL. 12",       venue: "Phoenix Palassio, Lucknow",   date: "APR 18, 2025", type: "CONCERT",   guests: 3200,  status: "UPCOMING"  },
  { id: 2, title: "ADAUX PRESENTS: BLOCK PARTY", venue: "NSCI Dome, Mumbai",            date: "MAR 02, 2025", type: "FESTIVAL",  guests: 8000,  status: "SOLD OUT"  },
  { id: 3, title: "CORPORATE CULTURE SUMMIT",    venue: "Hyatt Regency, Delhi",         date: "FEB 14, 2025", type: "CORPORATE", guests: 1200,  status: "COMPLETED" },
  { id: 4, title: "UNDERGROUND SESSIONS",        venue: "Anticlockwise, Bengaluru",     date: "JAN 25, 2025", type: "SHOWCASE",  guests: 600,   status: "COMPLETED" },
  { id: 5, title: "NEW ERA AWARDS NIGHT",        venue: "Grand Hyatt, Mumbai",          date: "DEC 20, 2024", type: "AWARDS",    guests: 2000,  status: "COMPLETED" },
  { id: 6, title: "STREET CULTURE EXPO",         venue: "Pragati Maidan, Delhi",        date: "NOV 08, 2024", type: "EXPO",      guests: 15000, status: "COMPLETED" },
];

const SERVICES = [
  { num: "01", title: "CONCERT & TOUR PRODUCTION",  desc: "End-to-end concert production — from artist booking and stage design to ticketing, security, and post-show settlement." },
  { num: "02", title: "BRAND ACTIVATIONS",           desc: "Culture-forward brand experiences that move product and shift perception. We put brands in rooms they've never been in before." },
  { num: "03", title: "CORPORATE EVENTS",            desc: "Award ceremonies, product launches, annual meets. Professional execution with a creative edge your audience won't forget." },
  { num: "04", title: "FESTIVAL MANAGEMENT",         desc: "Multi-stage, multi-day festivals handled with precision — artist logistics, vendor coordination, crowd management and more." },
  { num: "05", title: "PRIVATE EVENTS",              desc: "High-profile birthdays, milestone celebrations, and private showcases tailored to exactly the mood you're going for." },
  { num: "06", title: "TALENT BOOKING",              desc: "Direct access to top-tier hip-hop artists, DJs, producers, and performers across India and internationally." },
];

const CLIENTS = ["SONY MUSIC", "RED BULL", "ADIDAS", "MTV INDIA", "VH1", "BOOKMYSHOW", "BUDWEISER", "SPOTIFY"];

const TESTIMONIALS = [
  {
    name: "VIKRAM NAIR",
    role: "VP MARKETING, RED BULL INDIA",
    text: "Adaux doesn't just run events — they understand culture. Our activation at Cypher Nights reached an audience that no media buy could have touched.",
  },
  {
    name: "PRIYA SETHI",
    role: "DIRECTOR, SONY MUSIC",
    text: "The professionalism is unmatched. From artist hospitality to on-ground execution, every detail was handled. Zero hiccups on a 8,000-capacity show.",
  },
  {
    name: "RAHUL MEHRA",
    role: "HEAD OF PARTNERSHIPS, ADIDAS INDIA",
    text: "They get hip-hop. Not as a trend, but as a culture. That authenticity is what makes Adaux invaluable for any brand that wants to be taken seriously.",
  },
];

const FILTERS = ["ALL", "CONCERT", "FESTIVAL", "CORPORATE", "SHOWCASE", "AWARDS", "EXPO"];

const TEAM = [
  {
    name: "ARJUN KHANNA",
    role: "FOUNDER & CREATIVE DIRECTOR",
    bio: "Ex-DJ, ex-graffiti writer, current headache for anyone trying to cut corners on production quality.",
    // Replace photo with a real image path e.g. "images/arjun.jpg"
    photo: null,
    initials: "AK",
    // Unsplash placeholder — stylised portrait tone
    placeholderSeed: "arjun",
  },
  {
    name: "SANYA MEHROTRA",
    role: "HEAD OF OPERATIONS",
    bio: "The reason every event lands on time and on budget. Runs logistics like a machine, negotiates like a veteran.",
    photo: null,
    initials: "SM",
    placeholderSeed: "sanya",
  },
  {
    name: "DEV PRASAD",
    role: "TALENT RELATIONS",
    bio: "Knows every booking agent, manager, and artist rep worth knowing. The call you want him to make, he can make.",
    photo: null,
    initials: "DP",
    placeholderSeed: "dev",
  },
];

// ── CULTURE MARQUEE ───────────────────────────

const MARQUEE_ITEMS = [
  { text: "CONCERT PRODUCTION",  icon: "◈" },
  { text: "TALENT BOOKING",      icon: "◈" },
  { text: "BRAND ACTIVATIONS",   icon: "◈" },
  { text: "FESTIVAL MANAGEMENT", icon: "◈" },
  { text: "STAGE DESIGN",        icon: "◈" },
  { text: "CORPORATE EVENTS",    icon: "◈" },
  { text: "ARTIST HOSPITALITY",  icon: "◈" },
  { text: "PRIVATE SHOWS",       icon: "◈" },
  { text: "CROWD MANAGEMENT",    icon: "◈" },
  { text: "SOUND & LIGHTING",    icon: "◈" },
];

function CultureMarquee({ reverse = false }) {
  const [offset, setOffset] = useState(0);
  const rafRef = useRef(null);
  const lastRef = useRef(null);

  // Build a long string of items for seamless loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  // Each item is roughly 260px wide
  const UNIT = MARQUEE_ITEMS.length * 260;

  useEffect(() => {
    function step(ts) {
      if (lastRef.current === null) lastRef.current = ts;
      const delta = ts - lastRef.current;
      lastRef.current = ts;
      setOffset(prev => (prev + delta * 0.038) % UNIT);
      rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const translateX = reverse ? offset : -offset;

  return (
    <div style={{
      overflow: "hidden",
      borderTop: "1px solid var(--border-2)",
      borderBottom: "1px solid var(--border-2)",
      padding: "22px 0",
      background: "var(--bg-deep)",
    }}>
      <div style={{
        display: "flex",
        gap: 0,
        transform: `translateX(${translateX}px)`,
        whiteSpace: "nowrap",
        willChange: "transform",
      }}>
        {items.map((item, i) => (
          <div key={i} style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
            paddingRight: 40,
            flexShrink: 0,
          }}>
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: 26,
              letterSpacing: "0.08em",
              color: "var(--text)",
              opacity: 0.85,
            }}>{item.text}</span>
            <span style={{
              fontSize: 12,
              color: "var(--red)",
              opacity: 0.7,
              flexShrink: 0,
            }}>{item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── TICKER ────────────────────────────────────

function Ticker() {
  const [offset, setOffset] = useState(0);
  const rafRef = useRef(null);
  const lastRef = useRef(null);
  const TEXT = "ADAUX AGENCY · HIP HOP EVENT MANAGEMENT · INDIA · EST. 2015 · ";
  const UNIT = TEXT.length * 9.6; // approx px per repeat

  useEffect(() => {
    function step(ts) {
      if (lastRef.current === null) lastRef.current = ts;
      const delta = ts - lastRef.current;
      lastRef.current = ts;
      setOffset(prev => (prev + delta * 0.045) % UNIT);
      rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const repeated = TEXT.repeat(10);

  return (
    <div className="ticker-bar">
      <div className="ticker-track" style={{ transform: `translateX(-${offset}px)` }}>
        {repeated}
      </div>
    </div>
  );
}

// ── EVENT ROW ─────────────────────────────────

function EventRow({ event, index, onClick }) {
  const tagClass = event.status === "UPCOMING" ? "tag-upcoming"
                 : event.status === "SOLD OUT"  ? "tag-sold"
                 : "tag-done";
  return (
    <div className="event-row" onClick={onClick} style={{ animationDelay: `${index * 0.05}s` }}>
      <div className="event-num">{String(index + 1).padStart(2, "0")}</div>
      <div>
        <div className="event-title">{event.title}</div>
        <div className="event-venue">{event.venue}</div>
      </div>
      <div className="event-date">{event.date}</div>
      <div className="event-meta">{event.type} · {event.guests.toLocaleString()} GUESTS</div>
      <div><span className={`tag ${tagClass}`}>{event.status}</span></div>
    </div>
  );
}

// ── HOME PAGE ─────────────────────────────────

function HomePage({ nav }) {
  return (
    <div className="fade-up">

      {/* HERO */}
      <section className="hero-section" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="hero-eyebrow">ADAUX AGENCY · EST. 2015</div>
        <div className="container">
          <div className="section-label" style={{ marginBottom: 16 }}>India's Premier Hip Hop Event Agency</div>
          <h1 className="hero-number">WE RUN<br />THE SHOW.</h1>
          <div className="hero-bottom">
            <p className="hero-desc">
              From intimate showcases to stadium-scale festivals — Adaux produces events that the culture actually talks about. Based in India, booked worldwide.
            </p>
            <div className="hero-actions">
              <button className="btn-white" onClick={() => nav("EVENTS")}>SEE OUR WORK</button>
              <button className="btn-outline" onClick={() => nav("CONTACT")}>GET A QUOTE</button>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <CultureMarquee />

      {/* UPCOMING EVENTS */}
      <section style={{ padding: "72px 40px", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-label" style={{ marginBottom: 8 }}>What's Next</div>
              <div className="red-rule" />
              <h2 className="section-title">UPCOMING EVENTS</h2>
            </div>
            <span className="section-link" onClick={() => nav("EVENTS")}>VIEW ALL →</span>
          </div>
          <div className="events-table">
            {EVENTS.slice(0, 4).map((e, i) => (
              <EventRow key={e.id} event={e} index={i} onClick={() => nav("EVENTS")} />
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT STRIP */}
      <section>
        <div className="client-strip">
          {CLIENTS.map((c, i) => <div key={i} className="client-item">{c}</div>)}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="services-preview">
        <div className="container">
          <div className="services-preview-grid">
            <div className="services-preview-left">
              <div className="section-label" style={{ marginBottom: 8 }}>What We Do</div>
              <div className="red-rule" />
              <h2>FULL SERVICE.<br />FULL CULTURE.</h2>
              <p>We handle every inch of your event — production, logistics, talent, and experience design. You show up, we make it happen.</p>
              <button className="btn-white" onClick={() => nav("SERVICES")}>ALL SERVICES</button>
            </div>
            <div>
              {SERVICES.slice(0, 4).map((s, i) => (
                <div key={i} className="service-mini">
                  <div className="service-mini-num">{s.num}</div>
                  <div>
                    <div className="service-mini-title">{s.title}</div>
                    <div className="service-mini-desc">{s.desc.substring(0, 90)}…</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "72px 40px", background: "var(--bg-mid)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: 8 }}>What They Say</div>
          <div className="red-rule" />
          <h2 className="section-title" style={{ marginBottom: 48 }}>WORD ON THE STREET</h2>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-quote-mark">"</div>
                <p className="testimonial-text">{t.text}</p>
                <div style={{ borderTop: "1px solid var(--border-2)", paddingTop: 20 }}>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-block">
        <div className="container">
          <div className="cta-inner">
            <h2 className="cta-heading">READY TO<br />MAKE MOVES?</h2>
            <div className="cta-actions">
              <button className="btn-white-red" onClick={() => nav("CONTACT")}>BOOK ADAUX</button>
              <button className="btn-outline-white" onClick={() => nav("SERVICES")}>OUR SERVICES</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// ── EVENTS PAGE ───────────────────────────────

function EventsPage({ nav }) {
  const [filter, setFilter] = useState("ALL");
  const filtered = filter === "ALL" ? EVENTS : EVENTS.filter(e => e.type === filter);

  return (
    <div className="fade-up">
      <section style={{ padding: "64px 40px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: 8 }}>Portfolio</div>
          <div className="red-rule" />
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(64px,9vw,96px)", lineHeight: 0.9, color: "var(--text)", marginBottom: 40 }}>THE EVENTS</h1>
          <div className="filter-row">
            {FILTERS.map(f => (
              <button key={f} className={`filter-pill${filter === f ? " active" : ""}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 40px 80px" }}>
        <div className="container">
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "var(--ghost)", fontStyle: "italic", fontFamily: "var(--font-body)" }}>
              No events in this category.
            </div>
          ) : (
            <div className="events-table">
              {filtered.map((e, i) => (
                <EventRow key={e.id} event={e} index={i} onClick={() => {}} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-block">
        <div className="container">
          <div className="cta-inner">
            <h2 className="cta-heading">YOUR EVENT<br />NEXT.</h2>
            <div className="cta-actions">
              <button className="btn-white-red" onClick={() => nav("CONTACT")}>START A PROJECT</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── SERVICES PAGE ─────────────────────────────

function ServicesPage({ nav }) {
  return (
    <div className="fade-up">
      <section>
        <div className="container">
          <div className="services-layout">
            {/* Sticky left */}
            <div className="services-sticky">
              <div className="section-label" style={{ marginBottom: 8 }}>What We Do</div>
              <div className="red-rule" />
              <h1>OUR<br />SERVICES</h1>
              <p>Built for the culture. Executed for the business. Everything you need to run a professional event, under one roof.</p>
              <button className="btn-red" onClick={() => nav("CONTACT")}>WORK WITH US</button>
            </div>

            {/* Services list */}
            <div>
              {SERVICES.map((s, i) => (
                <div key={i} className="service-item">
                  <div className="service-num">{s.num}</div>
                  <div>
                    <div className="service-title">{s.title}</div>
                    <div className="service-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client strip */}
      <div className="client-strip">
        {CLIENTS.map((c, i) => <div key={i} className="client-item">{c}</div>)}
      </div>

      {/* CTA */}
      <section className="cta-block">
        <div className="container">
          <div className="cta-inner">
            <h2 className="cta-heading">LET'S BUILD<br />SOMETHING.</h2>
            <div className="cta-actions">
              <button className="btn-white-red" onClick={() => nav("CONTACT")}>GET A QUOTE</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── ABOUT PAGE ────────────────────────────────

function AboutPage({ nav }) {
  return (
    <div className="fade-up">

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="section-label" style={{ color: "rgba(255,255,255,0.45)", marginBottom: 8 }}>Who We Are</div>
          <h1 className="about-hero-title">BORN FROM<br />THE CULTURE.</h1>
        </div>
      </section>

      {/* Story */}
      <section className="about-story">
        <div>
          <div className="red-rule" />
          <p>
            Adaux was founded in 2015 by a crew that grew up going to shows, booking basement cyphers, and writing on walls. We weren't event planners — we were heads who needed to see better shows and decided to make them happen ourselves.
          </p>
        </div>
        <div>
          <div className="red-rule" />
          <p>
            Ten years later, we've produced 200+ events across India — from underground showcases to 15,000-capacity festivals. We work with labels, brands, artists, and corporations who understand that the best events don't just happen. They're built.
          </p>
        </div>
      </section>

      {/* Culture Marquee */}
      <CultureMarquee reverse />

      {/* Team */}
      <section style={{ padding: "72px 40px", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: 8 }}>The Team</div>
          <div className="red-rule" />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 56, color: "var(--text)", marginBottom: 48 }}>THE CREW</h2>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <div key={i} className="team-card">
                {/* Photo area — swap photo:null with photo:"images/name.jpg" to use a real image */}
                <div className="team-photo-wrap">
                  {m.photo ? (
                    <img src={m.photo} alt={m.name} className="team-photo-img" />
                  ) : (
                    <div className="team-photo-placeholder">
                      {/* Grainy gradient placeholder with initials */}
                      <div className="team-photo-noise" />
                      <div className="team-photo-gradient" style={{
                        background: i === 0
                          ? "linear-gradient(160deg, #1a1a1a 0%, #2a1212 60%, #3d0f0f 100%)"
                          : i === 1
                          ? "linear-gradient(160deg, #111 0%, #121820 60%, #0d1a2a 100%)"
                          : "linear-gradient(160deg, #111 0%, #181218 60%, #1a0d1a 100%)",
                      }} />
                      <span className="team-photo-initials">{m.initials}</span>
                      <div className="team-photo-label">PHOTO PLACEHOLDER</div>
                    </div>
                  )}
                  <div className="team-photo-overlay" />
                </div>
                {/* Card body */}
                <div className="team-card-body">
                  <div className="team-name">{m.name}</div>
                  <div className="team-role">{m.role}</div>
                  <p className="team-bio">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client strip */}
      <div className="client-strip">
        {CLIENTS.map((c, i) => <div key={i} className="client-item">{c}</div>)}
      </div>

      {/* CTA */}
      <section className="cta-block">
        <div className="container">
          <div className="cta-inner">
            <h2 className="cta-heading">WE RUN<br />YOUR SHOW.</h2>
            <div className="cta-actions">
              <button className="btn-white-red" onClick={() => nav("CONTACT")}>BOOK US</button>
              <button className="btn-outline-white" onClick={() => nav("EVENTS")}>OUR WORK</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// ── CONTACT PAGE ──────────────────────────────

const EMPTY_FORM = { name: "", email: "", phone: "", type: "", budget: "", message: "" };

function ContactPage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim())  e.name  = true;
    if (!form.email.trim()) e.email = true;
    return e;
  }

  async function handleSubmit() {
  const e = validate();
  if (Object.keys(e).length) {
    setErrors(e);
    return;
  }

  setErrors({});

  try {
    const res = await fetch("https://formspree.io/f/meepgrjy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        type: form.type,
        budget: form.budget,
        message: form.message,
        _subject: "New Event Inquiry 🚀"
      })
    });

    if (res.ok) {
      setSubmitted(true);
      setForm(EMPTY_FORM);
    } else {
      alert("Failed to send. Try again.");
    }

  } catch (err) {
    alert("Network error.");
  }
}

  function handleChange(field, value) {
    setForm(f => ({ ...f, [field]: value }));
    if (errors[field]) setErrors(e => { const n = {...e}; delete n[field]; return n; });
  }

  const errorStyle = { borderColor: "rgba(192,57,43,0.6)" };

  return (
    <div className="fade-up">

      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="section-label" style={{ marginBottom: 8 }}>Reach Out</div>
          <div className="red-rule" />
          <h1 className="contact-title">LET'S BUILD<br />SOMETHING.</h1>
        </div>
      </section>

      {/* Grid */}
      <section>
        <div className="container">
          <div className="contact-grid">

            {/* Left: contact info */}
            <div>
              {[
                { label: "EMAIL",      val: "book@adauxagency.com" },
                { label: "PHONE",      val: "+91 98765 43210" },
                { label: "WHATSAPP",   val: "Chat directly →" },
                { label: "BASED IN",   val: "Bhopal, MP — India" },
                { label: "OPERATING",  val: "Pan-India + International" },
              ].map((item, i) => (
                <div key={i} className="contact-info-row">
                  <div className="contact-info-label">{item.label}</div>
                  <div className="contact-info-value">{item.val}</div>
                </div>
              ))}

              <div style={{ marginTop: 40 }}>
                <div className="section-label" style={{ marginBottom: 12 }}>RESPONSE TIME</div>
                <p style={{ fontSize: 14, color: "var(--dimmer)", fontWeight: 300, lineHeight: 1.85 }}>
                  We respond to all serious inquiries within 24 hours.<br />For urgent bookings, WhatsApp is fastest.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div>
              {submitted ? (
                <div className="success-box scale-in">
                  <div className="success-icon">✓</div>
                  <h3 className="success-title">MESSAGE RECEIVED.</h3>
                  <p className="success-text">We'll be in touch within 24 hours. Stay ready.</p>
                  <button className="btn-outline" onClick={() => { setSubmitted(false); setForm(EMPTY_FORM); }}>
                    SEND ANOTHER
                  </button>
                </div>
              ) : (
                <div className="form-wrapper">
                  <div className="form-legend">EVENT INQUIRY FORM</div>
                  <div className="form-fields">

                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label">NAME *</label>
                        <input
                          className="input-field"
                          placeholder="Your name"
                          value={form.name}
                          onChange={e => handleChange("name", e.target.value)}
                          style={errors.name ? errorStyle : {}}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">EMAIL *</label>
                        <input
                          className="input-field"
                          type="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={e => handleChange("email", e.target.value)}
                          style={errors.email ? errorStyle : {}}
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label">PHONE</label>
                        <input
                          className="input-field"
                          placeholder="+91 00000 00000"
                          value={form.phone}
                          onChange={e => handleChange("phone", e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">EVENT TYPE</label>
                        <select className="input-field" value={form.type} onChange={e => handleChange("type", e.target.value)}>
                          <option value="">Select…</option>
                          <option>Concert / Show</option>
                          <option>Festival</option>
                          <option>Brand Activation</option>
                          <option>Corporate Event</option>
                          <option>Private Party</option>
                          <option>Awards Night</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">ESTIMATED BUDGET</label>
                      <select className="input-field" value={form.budget} onChange={e => handleChange("budget", e.target.value)}>
                        <option value="">Select range…</option>
                        <option>Under ₹5 Lakhs</option>
                        <option>₹5L – ₹20L</option>
                        <option>₹20L – ₹50L</option>
                        <option>₹50L – ₹1 Crore</option>
                        <option>₹1 Crore+</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">TELL US ABOUT YOUR EVENT</label>
                      <textarea
                        className="input-field"
                        rows={5}
                        placeholder="Date, location, expected attendance, anything else we should know…"
                        value={form.message}
                        onChange={e => handleChange("message", e.target.value)}
                      />
                    </div>

                    {Object.keys(errors).length > 0 && (
                      <div style={{ fontSize: 12, color: "var(--red)", fontFamily: "var(--font-cond)", letterSpacing: "0.1em" }}>
                        PLEASE FILL IN THE REQUIRED FIELDS MARKED ABOVE.
                      </div>
                    )}

                    <div>
                      <button className="btn-red" onClick={handleSubmit}>SEND INQUIRY</button>
                    </div>

                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

// ── APP ROOT ──────────────────────────────────

function App() {
  const [page, setPage] = useState("HOME");
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollRef = useRef(null);

  const nav = (p) => {
    setPage(p);
    setMenuOpen(false);
    if (scrollRef.current) scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  const PAGES = ["HOME", "EVENTS", "SERVICES", "ABOUT", "CONTACT"];

  return (
    <div className="site-wrapper">

      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* NAV */}
      <header className="site-header">
        <div className="logo" onClick={() => nav("HOME")}>
          {/* 1:1 logo placeholder — replace src with your actual logo image */}
          <div className="logo-img-placeholder" title="Adaux Agency">
            <img src="/media/adaux_dark.png" width={180} style={{ margin: "0px 0px 0px 100px"}}></img>
          </div>
          {/* <span className="logo-text">AD<span>AUX</span></span> */}
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {PAGES.map(p => (
            <button key={p} className={`nav-item${page === p ? " active" : ""}`} onClick={() => nav(p)}>{p}</button>
          ))}
        </nav>

        <button className="btn-white" style={{ padding: "9px 20px", fontSize: 11 }} onClick={() => nav("CONTACT")}>
          BOOK NOW
        </button>

        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span style={menuOpen ? { transform: "rotate(45deg) translate(4px, 5px)" } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: "rotate(-45deg) translate(4px, -5px)" } : {}} />
        </button>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        {PAGES.map(p => (
          <div key={p} className={`mobile-nav-item${page === p ? " active" : ""}`} onClick={() => nav(p)}>
            {p}
          </div>
        ))}
        <button className="btn-red" style={{ marginTop: 40, alignSelf: "flex-start" }} onClick={() => nav("CONTACT")}>
          BOOK NOW
        </button>
      </div>

      {/* TICKER */}
      <Ticker />

      {/* PAGE CONTENT */}
      <main ref={scrollRef} className="page-scroll">
        {page === "HOME"     && <HomePage     nav={nav} />}
        {page === "EVENTS"   && <EventsPage   nav={nav} />}
        {page === "SERVICES" && <ServicesPage nav={nav} />}
        {page === "ABOUT"    && <AboutPage    nav={nav} />}
        {page === "CONTACT"  && <ContactPage />}

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="container">
            <div className="footer-inner">
              
              <div className="footer-logo"> <img src="media/adaux_dark.png" width={300}></img></div>
              <nav className="footer-nav" aria-label="Footer navigation">
                {PAGES.map(p => (
                  <button key={p} className="nav-item" style={{ fontSize: 10 }} onClick={() => nav(p)}>{p}</button>
                ))}
              </nav>
              <div className="footer-copy">© 2025 ADAUX AGENCY · BHOPAL, INDIA</div>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}

// ── MOUNT ─────────────────────────────────────

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));