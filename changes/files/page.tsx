// Server Component (default in App Router — no "use client" needed)
// This entire file runs at build time / on the server. Zero JS sent for this component.
// Only TerminalPrompt (imported below) ships client-side JS.

import TerminalPrompt from "@/components/TerminalPrompt";
import styles from "./page.module.css";

const experience = [
  {
    role: "Founding Engineer",
    company: "Harmony",
    period: "2025 – present",
    location: "chattanooga, tn",
    desc: "Building a production scheduling system using CP-SAT / greedy heuristics. Vite + Hono + Supabase stack.",
    current: true,
  },
  {
    role: "Data Center Intern",
    company: "Tetra Pak",
    period: "2024",
    location: "denton, tx",
    desc: "Ansible automation across hundreds of servers. ServiceNow API integration cut manual ticket volume by 50%+.",
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
];

const stack = {
  current: ["TypeScript", "Python", "Next.js", "OR-Tools", "Supabase"],
  familiar: ["React", "PostgreSQL", "Ansible", "C++", "Java"],
};

export default function Home() {
  return (
    <main className={styles.page}>
      {/* Client component rendered inside a server component — this is the pattern */}
      <TerminalPrompt />

      <h1 className={styles.heroName}>
        Brian<br />
        <span>McKeown</span>
      </h1>

      <p className={styles.heroTagline}>
        founding engineer @{" "}
        <span className={styles.highlight}>harmony</span>
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
        <a href="mailto:brianmckeown@tamu.edu" className={styles.navLink}>
          <span className={styles.arrow}>→</span> email
        </a>
      </div>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <div className={styles.sectionLabel}>about</div>
        <p className={styles.aboutText}>
          Full-stack engineer one year out of A&M, transitioning into ML
          engineering. Currently building production scheduling systems at an
          early-stage AI startup. Background spans infrastructure automation,
          data center ops, and shipping full-stack products from zero.
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

      <hr className={styles.divider} />

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
        texas a&m &apos;25 · cs + statistics minor · 3.8 gpa
      </footer>
    </main>
  );
}
