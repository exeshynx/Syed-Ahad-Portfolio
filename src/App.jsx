import React, { useEffect, useState } from 'react';
import Scene from './components/Scene.jsx';
import { ArrowDown, ArrowUpRight, Close, Code, Copy, Menu, Phone } from './components/Icons.jsx';
import { projects, services, skills } from './data/portfolio.js';

const PHONE_DISPLAY = '+92 328 1935889';
const PHONE_RAW = '923281935889';

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function Header() {
  const [open, setOpen] = useState(false);
  const nav = ['About', 'Stack', 'Work', 'Contact'];

  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Abdul Ahad home">
        <span className="brand-mark">AA</span>
        <span className="brand-copy">ABDUL<br/>AHAD</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
      </nav>

      <a className="header-cta" href={`https://wa.me/${PHONE_RAW}`} target="_blank" rel="noreferrer">
        Start a project <ArrowUpRight />
      </a>

      <button className="menu-button" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
        {open ? <Close size={22}/> : <Menu size={22}/>} 
      </button>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {nav.map((item) => <a key={item} onClick={() => setOpen(false)} href={`#${item.toLowerCase()}`}>{item}</a>)}
        <a href={`https://wa.me/${PHONE_RAW}`} target="_blank" rel="noreferrer">WhatsApp me <ArrowUpRight /></a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-noise" />
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot"/> Available for selected web projects</div>
        <h1>
          I BUILD <span className="outline-word">DIGITAL</span><br/>
          EXPERIENCES<br/>
          <span className="acid">THAT MOVE.</span>
        </h1>
        <p className="hero-lead">JavaScript stack web developer crafting fast interfaces, dependable backends and immersive 3D web moments.</p>
        <div className="hero-actions">
          <a className="primary-button" href="#work">Explore my work <ArrowDown /></a>
          <a className="text-button" href={`tel:+${PHONE_RAW}`}><Phone /> {PHONE_DISPLAY}</a>
        </div>
      </div>

      <div className="hero-scene" aria-hidden="true">
        <Scene />
        <div className="scene-label scene-label-a"><span>01</span> React systems</div>
        <div className="scene-label scene-label-b"><span>02</span> Node architecture</div>
        <div className="scene-label scene-label-c"><span>03</span> Three.js motion</div>
      </div>

      <div className="hero-meta">
        <span>JavaScript Stack Developer</span>
        <span className="mono">REACT / NODE / THREE.JS</span>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about"><span>SCROLL</span><ArrowDown size={15}/></a>
    </section>
  );
}

function About() {
  const [copied, setCopied] = useState(false);
  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(`+${PHONE_RAW}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `tel:+${PHONE_RAW}`;
    }
  };

  return (
    <section id="about" className="section about-section">
      <div className="section-index" data-reveal>01 / ABOUT</div>
      <div className="about-grid">
        <div className="about-heading" data-reveal>
          <span className="kicker">FULL-STACK THINKING</span>
          <h2>From first pixel<br/>to final <em>request.</em></h2>
        </div>
        <div className="about-copy" data-reveal>
          <p className="large-copy">I’m Abdul Ahad, a JavaScript developer focused on building web products that feel sharp on the surface and stay sensible underneath.</p>
          <p>I work across React, Node.js, APIs and modern browser graphics—choosing the simplest architecture that can still deliver a memorable experience.</p>
          <button className="phone-card" onClick={copyPhone}>
            <span><small>DIRECT LINE</small>{PHONE_DISPLAY}</span>
            <span className="phone-copy-state">{copied ? 'COPIED' : <Copy />}</span>
          </button>
        </div>
      </div>
      <div className="principles" data-reveal>
        <div><span>01</span><strong>Fast by default</strong><p>Motion and 3D should earn their bytes. Keep the main experience responsive first.</p></div>
        <div><span>02</span><strong>Useful motion</strong><p>Animation clarifies hierarchy, feedback and flow—not just decoration.</p></div>
        <div><span>03</span><strong>Clean systems</strong><p>Reusable patterns and predictable data flows make future changes easier.</p></div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="section stack-section">
      <div className="section-index" data-reveal>02 / STACK</div>
      <div className="section-heading" data-reveal>
        <span className="kicker">TOOLS I REACH FOR</span>
        <h2>One stack.<br/><span>Multiple dimensions.</span></h2>
      </div>
      <div className="skill-layout">
        <div className="skills-list" data-reveal>
          {skills.map((skill, index) => (
            <div className="skill-row" key={skill.name}>
              <div className="skill-index">0{index + 1}</div>
              <div className="skill-tag">{skill.tag}</div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-meter"><span style={{ '--skill': `${skill.level}%` }} /></div>
              <div className="skill-level">{skill.level}<small>%</small></div>
            </div>
          ))}
        </div>
        <div className="code-window" data-reveal>
          <div className="code-top"><span/><span/><span/><small>abdul-ahad.dev / mindset.js</small></div>
          <pre><code><span className="c-muted">01</span> <span className="c-purple">const</span> developer = {'{'}{`\n`}<span className="c-muted">02</span>   name: <span className="c-green">'Abdul Ahad'</span>,{`\n`}<span className="c-muted">03</span>   focus: [<span className="c-green">'speed'</span>, <span className="c-green">'clarity'</span>, <span className="c-green">'motion'</span>],{`\n`}<span className="c-muted">04</span>   stack: <span className="c-green">'JavaScript'</span>,{`\n`}<span className="c-muted">05</span>   status: <span className="c-purple">true</span>,{`\n`}<span className="c-muted">06</span> {'}'};{`\n\n`}<span className="c-muted">07</span> <span className="c-purple">export default</span> developer;</code></pre>
          <div className="terminal-line"><span>$</span> build something worth remembering_<i /></div>
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ type }) {
  if (type === 'analytics') {
    return <div className="project-visual analytics-visual"><div className="mini-sidebar"/><div className="chart-grid"><span/><span/><span/><span/><span/><span/></div><div className="line-chart"><i/><i/><i/><i/><i/></div><div className="metric-cards"><b/><b/><b/></div></div>;
  }
  if (type === 'orbital') {
    return <div className="project-visual orbital-visual"><div className="orbital-ring ring-one"/><div className="orbital-ring ring-two"/><div className="orbital-core"><Code /></div><i/><i/><i/><i/></div>;
  }
  return <div className="project-visual commerce-visual"><div className="commerce-nav"><b>NEXUS</b><span>SHOP / EDIT / OBJECTS</span></div><div className="commerce-product"><div className="product-orb"/><div className="product-copy"><small>OBJECT 024</small><strong>Form / Function</strong><span/></div></div><div className="commerce-footer"><span>01 — 04</span><span>DRAG TO EXPLORE</span></div></div>;
}

function Work() {
  return (
    <section id="work" className="section work-section">
      <div className="section-index" data-reveal>03 / SELECTED WORK</div>
      <div className="section-heading work-heading" data-reveal>
        <span className="kicker">PORTFOLIO CONCEPTS</span>
        <h2>Interfaces with<br/><span>an opinion.</span></h2>
        <p>Three build directions that show how I think about product, interaction and frontend craft. Replace these with real case studies when ready.</p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.id} data-reveal>
            <ProjectVisual type={project.visual}/>
            <div className="project-info">
              <div className="project-number">{project.id}</div>
              <div>
                <small>{project.type}</small>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack-chips">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
              <span className="round-arrow" aria-hidden="true"><ArrowUpRight size={23}/></span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section">
      <div className="section-index" data-reveal>04 / WHAT I DO</div>
      <div className="services-grid">
        <div className="services-heading" data-reveal>
          <span className="kicker">CAPABILITIES</span>
          <h2>Code that<br/>carries its <span>weight.</span></h2>
        </div>
        <div className="service-list">
          {services.map(([id, title, text]) => (
            <div className="service-row" key={id} data-reveal>
              <span>{id}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid-bg"/>
      <div className="contact-orb"/>
      <div className="contact-inner" data-reveal>
        <span className="kicker">HAVE A PROJECT IN MIND?</span>
        <h2>LET’S MAKE THE<br/>WEB FEEL <em>NEW.</em></h2>
        <p>For websites, dashboards, APIs or interactive 3D experiences—send a message and tell me what you’re building.</p>
        <div className="contact-actions">
          <a className="contact-main" href={`https://wa.me/${PHONE_RAW}?text=Hi%20Abdul%20Ahad%2C%20I%20want%20to%20discuss%20a%20web%20project.`} target="_blank" rel="noreferrer">
            <span><small>WHATSAPP / CALL</small>{PHONE_DISPLAY}</span><ArrowUpRight size={30}/>
          </a>
        </div>
      </div>
      <footer>
        <div className="brand"><span className="brand-mark">AA</span><span className="brand-copy">ABDUL<br/>AHAD</span></div>
        <span>JavaScript Web Developer</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </section>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <div className="cursor-glow" aria-hidden="true"/>
      <Header />
      <main>
        <Hero />
        <About />
        <Stack />
        <Work />
        <Services />
        <Contact />
      </main>
    </>
  );
}
