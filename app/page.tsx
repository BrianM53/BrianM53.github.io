// Server Component (default in App Router — no "use client" needed)
// This entire file runs at build time / on the server. Zero JS sent for this component.
// Only TerminalPrompt (imported below) ships client-side JS.

import TerminalPrompt from "@/components/TerminalPrompt";
import styles from "./page.module.css";

const experience = [
  {
    role: "Founding Engineer",
    company: "Harmony",
    period: "2026 – present",
    location: "chattanooga, tn",
    desc: "Building a production scheduling system using machine learning and artificial intelligence. React + Hono + Supabase stack.",
    current: true,
  },
  {
    role: "Full-Stack Engineer",
    company: "Antera Software",
    period: "2025 – 2026",
    location: "plano, tx",
    desc: "Building SaaS webstore platform with React, Nest, and MongoDB. Led legacy refactor improving Apdex by 50%. Optimized schemas reducing checkout times by 80%.",
    current: false,
  },
  {
    role: "Data Center Engineer Intern",
    company: "Tetra Pak",
    period: "2024",
    location: "denton, tx",
    desc: "Ansible automation across hundreds of servers. ServiceNow API integration cut manual ticket volume by 50%+.",
    current: false,
  },
    {
    role: "Software Engineer Intern",
    company: "IDLife Corporate",
    period: "2023",
    location: "frisco, tx",
    desc: "Wrote internal tools in Python and JavaScript to automate data entry and reporting for lot control and inventory management.",
    current: false,
  },
];

const projects = [
  {
    name: "smart-rowing-handle",
    desc: "IMU-based stroke error detection with real-time LED feedback. 90%+ accuracy.",
  },
  {
    name: "pos-system",
    desc: "Full POS with PostgreSQL on AWS and React frontend.",
  },
  {
    name: "y86-64-processor",
    desc: "Full fetch/decode/execute pipeline with RAM and ROM.",
  },
  {
    name: "asl-translator",
    desc: "Speech → American Sign Language via NLP. Built at A&M hackathon.",
  },
  {
      name: "malware-analysis",
      desc: "Reverse engineering & behavioral analysis using Ghidra, PEStudio, Procmon, and Wireshark.",
  },
  {
    name: "sentiment-analysis-nlp",
    desc: "Transformer-based NLP model in for classifying sentiment in Yelp reviews",
  }
];

const stack = {
current: ["TypeScript", "Node.js", "Python", "React", "Supabase", "PostgreSQL"],
familiar: ["MongoDB", "Ansible", "C++", "Java"],
};

export default function Home() {
  return (
    <main className={styles.page}>
      {/* Client component rendered inside a server component — this is the pattern */}
      <TerminalPrompt />

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <h1 className={styles.heroName}>
            Brian
            <br />
            <span>McKeown</span>
          </h1>

          <p className={styles.heroTagline}>
            founding engineer @{" "}
            <a href="https://tryharmony.ai" target="_blank" rel="noopener noreferrer" className={styles.highlight}>harmony</a>
            &nbsp;·&nbsp; cs + ml &nbsp;·&nbsp; chattanooga, tn
          </p>

          <div className={styles.linksRow}>
            <a
              href="https://github.com/brianm53"
              className={styles.navLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.arrow}>→</span> github
            </a>
            <a
              href="https://www.linkedin.com/in/brian-mckeown-49b225229/"
              className={styles.navLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.arrow}>→</span> linkedin
            </a>
          </div>

          <hr className={styles.divider} />

          <section className={styles.section}>
            <div className={styles.sectionLabel}>about</div>
            <p className={styles.aboutText}>
              Full-stack engineer from Texas A&amp;M, transitioning into ML
              engineering. Currently building production scheduling systems at an
              AI startup. Background spans infrastructure automation,
              data center ops, and building full-stack products that scale.
            </p>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionLabel}>stack</div>
            <div className={styles.stackGrid}>
              {stack.current.map((s) => (
                <span key={s} className={`${styles.tag} ${styles.tagActive}`}>
                  {s}
                </span>
              ))}
              {stack.familiar.map((s) => (
                <span key={s} className={styles.tag}>
                  {s}
                </span>
              ))}
            </div>
          </section>
        </aside>

        <div className={styles.mainContent}>
          <section className={styles.section}>
            <div className={styles.sectionLabel}>experience</div>
            <div className={styles.expList}>
              {experience.map((e) => (
                <div
                  key={e.company}
                  className={`${styles.expItem} ${e.current ? styles.expItemCurrent : ""}`}
                >
                  <div className={styles.expRole}>
                    {e.role} — {e.company}
                  </div>
                  <div className={styles.expMeta}>
                    {e.period} · {e.location}
                  </div>
                  <div className={styles.expDesc}>{e.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionLabel}>projects</div>
            <div className={styles.projectGrid}>
              {projects.map((p) => (
                <div key={p.name} className={styles.projectCard}>
                  <div className={styles.projectName}>{p.name}</div>
                  <div className={styles.projectDesc}>{p.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <hr className={styles.divider} />

          <footer className={styles.footer}>
            texas a&amp;m &apos;25 · cs + statistics minor · 3.8 gpa
          </footer>
        </div>
      </div>
    </main>
  );
}
