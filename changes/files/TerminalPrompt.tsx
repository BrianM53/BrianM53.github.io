"use client";

// This is a Client Component — needs "use client" because it uses useState/useEffect
// Push this boundary as low as possible; everything above (layout, page) stays server-side

import { useState, useEffect } from "react";
import styles from "./TerminalPrompt.module.css";

export default function TerminalPrompt() {
  const [visible, setVisible] = useState(false);

  // Simple mount animation — could use framer-motion for more control
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={styles.prompt} style={{ opacity: visible ? 1 : 0, transition: "opacity 0.4s" }}>
      <span className={styles.path}>~/brianmckeown</span>
      <span className={styles.dollar}>$</span>
      <span className={styles.cmd}>whoami</span>
      <span className={styles.cursor} aria-hidden="true" />
    </div>
  );
}
