import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./layout.module.scss";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const [footerRoot, setFooterRoot] = useState(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const footerEl = document.getElementById("footer");
    if (footerEl) setFooterRoot(footerEl);
  }, []);

  useEffect(() => {
    if (!footerRoot || !footerRef.current) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.view);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, [footerRoot]);

  if (!footerRoot) return null;

  return createPortal(
    <div className={`${styles.footerInner} ${styles.animate}`} ref={footerRef}>
      {t("footer.quote", { returnObjects: true }).map((line, idx) => (
        <p  className={styles.quote} key={idx}>
          {line}
          <br />
        </p>
      ))}
      <a href="mailto:lovesong001109@gmail.com">lovesong001109@gmail.com</a>
      <ul>
        <li>
          <a href="tel:01054085146">010-5408-5146</a>
        </li>
        <li>
          <a
            href="https://github.com/MinJ1109"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/MinJ1109
          </a>
        </li>
      </ul>
      <p>
        {t("footer.text1")}
        <br />
        {t("footer.text2")}
      </p>
      <span>
        {t("footer.disclaimer")}
        <span>© 2025 Minju Lee. All Rights Reserved.</span>
      </span>
    </div>,
    footerRoot,
  );
}
