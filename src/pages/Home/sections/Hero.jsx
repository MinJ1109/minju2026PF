import styles from "../home.module.scss";
import { heroTitle } from "../../../assets/images";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className={styles.hero}>
      <img src={heroTitle.hT_DESIGN} alt="DESIGN" />

      <div className={styles.heroText}>
        <p>
          <mark>{t("hero.line1.first")}</mark> {t("hero.line1.second")}
        </p>
      </div>

      <img src={heroTitle.hT_CODE} alt="CODE" />

      <div className={styles.heroText}>
        <p>
          <mark>{t("hero.line2.first")}</mark> {t("hero.line2.second")}
        </p>
      </div>

      <img src={heroTitle.hT_PUBLISHING} alt="PUBLISHING" />

      <div className={styles.mouseScroll}>
        scroll down
      </div>
    </section>
  );
}