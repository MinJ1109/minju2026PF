import { useState } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import { logo } from "../../assets/images";
import styles from "./layout.module.scss";

export default function Header({ onChangeLang }) {
  const { i18n } = useTranslation();

  const headerRoot = document.getElementById("header");
  if (!headerRoot) return null;

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerHeight = document.getElementById("header")?.offsetHeight || 0;

    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return createPortal(
    <div className={styles.headerInner}>
      <ul>
        <li
          className={`hoverEffect ${
            i18n.language.startsWith("ko") ? styles.current : ""
          }`}
          onClick={() => onChangeLang("ko")}
        >
          KO
        </li>

        <li>|</li>

        <li
          className={`hoverEffect ${
            i18n.language.startsWith("en") ? styles.current : ""
          }`}
          onClick={() => onChangeLang("en")}
        >
          EN
        </li>
      </ul>

      <a href="/">
        <img src={logo} alt="Logo" />
      </a>

      <nav>
        <button
          type="button"
          className={menuOpen ? styles.open : ""}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ol>
          <li className="hoverEffect" onClick={() => scrollToSection("hero")}>
            HOME
          </li>
          <li
            className="hoverEffect"
            onClick={() => scrollToSection("profile")}
          >
            PROFILE
          </li>
          <li
            className="hoverEffect"
            onClick={() => scrollToSection("projects")}
          >
            PROJECTS
          </li>
          <li className="hoverEffect" onClick={() => scrollToSection("footer")}>
            CONTACT
          </li>
        </ol>
      </nav>
    </div>,
    headerRoot,
  );
}
