"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  ShoppingBag,
  Gauge,
  Accessibility,
  BrainCircuit,
  Users,
  ChevronDown,
  Download,
} from "lucide-react";

const email = "advinculajmj@gmail.com";
const linkedin = "https://www.linkedin.com/in/jeri-michael-advincula/";

const projects = [
  {
    name: "Da Kine Hawaiian",
    category: "Shopify",
    type: "SHOPIFY · ECOMMERCE",
    description:
      "Web developer and project manager for the client, coordinating delivery while building and maintaining the Shopify storefront.",
    url: "https://www.dakinehawaiian.net/",
    tags: ["Shopify", "Project Management", "eCommerce"],
  },
  {
    name: "SkinSutra",
    category: "Shopify",
    type: "SHOPIFY · SKINCARE",
    description:
      "Main developer for the Shopify skincare storefront, handling core website development and ongoing store improvements.",
    url: "https://skinsutra.com/",
    tags: ["Shopify", "Web Development"],
  },
  {
    name: "Mental Skin Care",
    category: "Shopify",
    type: "SHOPIFY · SKINCARE",
    description:
      "Main developer for the Shopify store, including ongoing SEO updates and product content optimization.",
    url: "https://mentalskincare.com/",
    tags: ["Shopify", "SEO", "Product Content"],
  },
  {
    name: "Berger Steel",
    category: "WordPress",
    type: "WORDPRESS · WEBSITE",
    description:
      "Website work involving project content and responsive interface refinements.",
    url: "https://bergersteel.com/",
    tags: ["WordPress", "Responsive Design"],
  },
  {
    name: "The Barrie Company",
    category: "WordPress",
    type: "WORDPRESS · PROJECT ARCHIVE",
    description:
      "Worked with a commercial construction project archive covering multiple project types and industries.",
    url: "https://thebarriecompany.com/project/",
    tags: ["WordPress", "Content"],
  },
  {
    name: "LUNGTI — Manila Zoo",
    category: "Software",
    type: "THESIS · AR / VR / MACHINE LEARNING",
    description:
      "Project manager, back-end developer, and documentation contributor for an AR/VR zoo tour app. The project used VGG16 for animal recognition and included camera-based navigation and interactive quizzes.",
    tags: ["Unity", "VGG16", "AR / VR", "IoT"],
  },
  {
    name: "Predictive Analytics",
    category: "Software",
    type: "CGI PH · RESEARCH & DEVELOPMENT",
    description:
      "Developed a forecasting model for a ticketing service, with a six-month forecast horizon.",
    tags: ["Python", "Machine Learning", "Forecasting"],
  },
  {
    name: "Sortify",
    category: "Software",
    type: "PERSONAL PROJECT · SPOTIFY",
    description:
      "A playlist organization tool that filters Spotify tracks by musical attributes such as tempo, loudness, valence, energy, danceability, and popularity.",
    tags: ["Spotify", "Data", "Development"],
  },
];

const experience = [
  {
    role: "Full-Stack Developer",
    company: "The Clay Media",
    date: "Jun 2025 — Present",
    summary:
      "Build and improve websites, custom WordPress plugins, and automation tools for client projects.",
    details: [
      "Design and redesign modern websites and build custom WordPress plugins.",
      "Create AI-powered lead-generation automations and proposal email workflows.",
      "Manage SEO and speed optimization for retainer clients.",
      "Develop a custom boat-booking system integration with QuickBooks.",
    ],
    skills: ["WordPress", "PHP", "Automation", "SEO", "Performance"],
  },
  {
    role: "Community / Partnerships / Social Media Manager & Full-Stack Developer",
    company: "Political Pump",
    date: "Mar 2025 — Present",
    summary:
      "Support community channels, partnerships, events, and development initiatives.",
    details: [
      "Manage Discord, Telegram, X, Instagram, and Facebook communities.",
      "Lead partnerships and events.",
      "Organized and led Philippine Blockchain Week activities as a gold sponsor.",
    ],
    skills: ["Community", "Partnerships", "Events", "Development"],
  },
  {
    role: "Peer Mentor · LMS Team",
    company: "Metacrafters",
    date: "May 2024 — Dec 2024",
    summary:
      "Mentored students learning smart contracts and Web3 application development.",
    details: [
      "Taught Solidity and Web3 development across Avalanche, Solana, and Polygon.",
      "Served as peer mentor team leader.",
      "Updated the LMS with recent Polygon updates.",
    ],
    skills: ["Solidity", "Avalanche", "Solana", "Polygon", "Mentoring"],
  },
  {
    role: "AI / ML Intern · Research & Development",
    company: "CGI Philippines, Inc.",
    date: "Jan 2024 — Jul 2024",
    summary:
      "Developed a forecasting model to predict ticket volume for the following six months.",
    details: [
      "Worked on predictive analytics for a ticketing service.",
      "Built and evaluated forecasting models for future ticket volume.",
    ],
    skills: ["Python", "Machine Learning", "Forecasting"],
  },
  {
    role: "Game / QA Tester & Community Manager",
    company: "Nexxt Games",
    date: "Dec 2022 — Dec 2024",
    summary:
      "Tested Web3 games and supported the Nexxt Games Discord community.",
    details: [
      "Conducted game testing and QA for Champions Ascension, Raven Dawn, and custom Fortnite maps.",
      "Managed the Nexxt Games Discord channel and community.",
    ],
    skills: ["QA", "Game Testing", "Web3", "Community"],
  },
];

const services = [
  {
    icon: ShoppingBag,
    title: "Shopify & eCommerce",
    text: "Theme customization, storefront UX, responsive fixes, and store troubleshooting.",
  },
  {
    icon: Code2,
    title: "WordPress Development",
    text: "Elementor builds, custom HTML/CSS/JS, PHP plugins, and practical site improvements.",
  },
  {
    icon: Gauge,
    title: "SEO & Performance",
    text: "Technical SEO, speed audits, image optimization, and site performance improvements.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    text: "WAVE and axe-based audits, semantic structure, keyboard checks, and WCAG-informed fixes.",
  },
  {
    icon: BrainCircuit,
    title: "Software & AI/ML",
    text: "Python projects, predictive analytics, application development, and automation workflows.",
  },
  {
    icon: Users,
    title: "Community & Project Leadership",
    text: "Community operations, partnerships, event coordination, and collaborative delivery.",
  },
];

const skillGroups = [
  {
    label: "Programming",
    items: ["Java", "Python", "C++", "PHP", "JavaScript", "HTML", "CSS", "SQL", "PowerShell"],
  },
  {
    label: "Web & eCommerce",
    items: ["React", "Next.js", "WordPress", "Elementor", "Shopify", "WooCommerce", "Wix"],
  },
  {
    label: "Tools & Platforms",
    items: ["GitHub", "Zapier", "Tableau", "MATLAB", "QGIS", "Google Workspace", "Microsoft Office"],
  },
  {
    label: "Web3",
    items: ["Solidity", "Avalanche", "Solana", "Polygon"],
  },
];

const filters = ["All", "Shopify", "WordPress", "Software"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedExperience, setExpandedExperience] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main id="top">
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Jeri-Michael portfolio home">
          JM<span>.</span>
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${mobileMenuOpen ? "nav-links-open" : ""}`}>
          {[
            ["Work", "#work"],
            ["Experience", "#experience"],
            ["Skills", "#skills"],
            ["About", "#about"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMobileMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMobileMenuOpen(false)}>
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>

      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="dot" /> SOFTWARE & WEB DEVELOPER</p>
          <h1>
            Thoughtful websites.
            <br />
            <em>Better</em> digital experiences.
          </h1>
          <p className="hero-text">
            I’m Jeri-Michael Joseph Advincula. I build and improve digital
            experiences across Shopify, WordPress, full-stack development, and
            software projects—with a focus on useful details, performance, and
            accessibility.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="#contact">
              Get in touch <span>↗</span>
            </a>
          </div>
          <div className="hero-meta">
            <span>WEB / SOFTWARE / AI & ML / WEB3</span>
            <span>PHILIPPINES · WORKING WORLDWIDE</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract geometric portfolio artwork">
          <div className="art-grid" />
          <div className="art-card art-card-one">
            <span>01</span><b>Build</b><small>with purpose</small>
          </div>
          <div className="art-card art-card-two">
            <span>02</span><b>Refine</b><small>every detail</small>
          </div>
          <div className="art-circle" />
          <div className="art-label">DIGITAL<br />CRAFT / 2026</div>
        </div>
      </section>

      <section className="ticker" aria-label="Areas of expertise">
        <div>
          SHOPIFY <span>✳</span> WORDPRESS <span>✳</span> SOFTWARE DEVELOPMENT{" "}
          <span>✳</span> AI / ML <span>✳</span> WEB3 <span>✳</span> SEO & ACCESSIBILITY{" "}
          <span>✳</span> SHOPIFY <span>✳</span> WORDPRESS <span>✳</span>
        </div>
      </section>

      <section id="work" className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED PROJECTS</p>
            <h2>Work that makes<br />the web work better.</h2>
          </div>
          <p className="section-intro">
            Client websites and software projects across eCommerce, web
            development, AI/ML, and interactive applications.
          </p>
        </div>

        <div className="filter-row" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-chip ${activeFilter === filter ? "active" : ""}`}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
          <span className="filter-count">{filteredProjects.length} projects</span>
        </div>

        <div className="project-grid">
          {filteredProjects.map((project, i) => (
            <article className="project-card" key={project.name}>
              <div className={`project-visual visual-${i + 1}`}>
                <div className="visual-window">
                  <div className="window-bar">
                    <i /><i /><i />
                    <span>{project.type}</span>
                  </div>
                  <div className="window-content">
                    <div className="window-line" />
                    <div className="window-block" />
                    <div className="window-line short" />
                    <div className="window-pill" />
                  </div>
                </div>
                <span className="project-number">{String(i + 1).padStart(2, "0")}</span>
                <span className="visual-category">{project.category}</span>
              </div>
              <div className="project-info">
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                {project.url ? (
                  <a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
                    <ArrowUpRight size={20} />
                  </a>
                ) : (
                  <span className="project-link project-link-static" aria-label="Academic or personal project">
                    <Code2 size={19} />
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="shell">
          <div className="section-heading light-heading">
            <div>
              <p className="eyebrow">PROFESSIONAL EXPERIENCE</p>
              <h2>Experience built<br />through real work.</h2>
            </div>
            <p className="section-intro">
              A look at the teams, responsibilities, and projects I’ve
              contributed to.
            </p>
          </div>

          <div className="experience-list">
            {experience.map((item, index) => {
              const isOpen = expandedExperience === index;
              return (
                <article className={`experience-item ${isOpen ? "experience-open" : ""}`} key={`${item.company}-${item.role}`}>
                  <button
                    type="button"
                    className="experience-toggle"
                    aria-expanded={isOpen}
                    onClick={() => setExpandedExperience(isOpen ? null : index)}
                  >
                    <span className="experience-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="experience-main">
                      <strong>{item.role}</strong>
                      <span>{item.company}</span>
                    </span>
                    <span className="experience-date">{item.date}</span>
                    <ChevronDown className="experience-chevron" size={19} />
                  </button>
                  {isOpen && (
                    <div className="experience-details">
                      <p>{item.summary}</p>
                      <ul>
                        {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                      </ul>
                      <div className="experience-tags">
                        {item.skills.map((skill) => <span key={skill}>{skill}</span>)}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">HOW I CAN HELP</p>
            <h2>From storefront<br />to software.</h2>
          </div>
          <p className="section-intro">
            Practical development and thoughtful improvements that help teams
            create a stronger digital presence.
          </p>
        </div>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, text }, i) => (
            <article className="service" key={title}>
              <div className="service-top"><span>0{i + 1}</span><Icon size={22} strokeWidth={1.5} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="shell">
          <div className="section-heading light-heading">
            <div>
              <p className="eyebrow">TOOLS & TECHNOLOGIES</p>
              <h2>Skills for the<br />whole stack.</h2>
            </div>
            <p className="section-intro">
              Technologies and platforms I’ve worked with across development,
              research, and client projects.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-group" key={group.label}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.label}</h3>
                <div className="skill-pills">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section shell">
        <div className="about-mark">JM<span>.</span></div>
        <div className="about-copy">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Developer by craft.<br /><em>Problem-solver</em> by nature.</h2>
          <p>
            I’m a Software Engineering graduate of FEU Institute of Technology.
            My experience spans client-facing web development, QA testing,
            community operations, and research projects. I enjoy turning
            complicated requirements into clear, dependable digital experiences
            and collaborating with teams to ship useful work.
          </p>
          <div className="about-tags">
            <span>BS Computer Science · Software Engineering</span>
            <span>FEU Institute of Technology · 2020–2024</span>
            <span>Cisco DevNet Associate</span>
            <span>IT Specialist · Python & Java</span>
          </div>
          <div className="leadership-block">
            <h3>Leadership & recognition</h3>
            <p>FEU Institute of Technology ACM Student Chapter — PRO, Internal (2022–2023)</p>
            <p>Junior Philippine Computer Society — PRO (2021–2022)</p>
            <p>Champion, Interconnectivity Network Quiz (2023)</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="shell contact-inner">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>Let’s make something<br /><em>useful</em> together.</h2>
          <div className="contact-actions">
            <a className="button button-light" href={`mailto:${email}`}>
              Email me <Mail size={17} />
            </a>
            <a className="button button-outline-light" href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume <Download size={17} />
            </a>
          </div>
          <div className="contact-bottom">
            <span>© 2026 JERI-MICHAEL JOSEPH ADVINCULA. BUILT WITH CARE.</span>
            <div>
              <a href="https://github.com/yanaagi" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
              <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
