import { useEffect, useRef } from "react";
import styles from "../home.module.scss";
import { profileImg } from "../../../assets/images";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const { t } = useTranslation();

  const sectionRef = useRef(null);

  useEffect(() => {
    const targets = sectionRef.current.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;

            el.classList.add(styles.view);

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 },
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="profile" className={styles.profile}>
      <div className={styles.topProfile}>
        <img className={styles.parentheses1} src={profileImg.parentheses} />

        <div className={styles.myProfile} data-animate>
          <div className={styles.myProfileIn} data-animate>
            <img src={profileImg.profile_Img} alt="Profile" />
            <div className={styles.profileText}>
              <p>
                <mark>NAME</mark>
                {t("profile.name")}
              </p>
              <p>
                <mark>BIRTH</mark>
                {t("profile.birth")}
              </p>
              <p>
                {t("profile.text1")}
                <br />
                {t("profile.text2")}
              </p>
            </div>
          </div>
        </div>

        <p data-animate>
          {t("profile.text3", { returnObjects: true }).map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
          {t("profile.text4")} <br />
          {t("profile.text5")} <br />
          {t("profile.text6")}
        </p>

        <img className={styles.parentheses2} src={profileImg.parentheses} />
      </div>

      <ul>
        <li data-animate>
          <h2>Skills / Tools</h2>
          <ol>
            <li>
              HTML <span className={styles.mark}>(90%)</span>
            </li>
            <li>
              CSS <span className={styles.mark}>(85%)</span>
            </li>
            <li>
              JavaScript <span className={styles.markB}>(40%)</span>
            </li>
            <li>
              jQuery <span className={styles.markB}>(70%)</span>
            </li>
            <li>
              React <span className={styles.markB}>(30%)</span>
            </li>
            <li>
              Figma <span className={styles.mark}>(80%)</span>
            </li>
            <li>
              Photoshop <span className={styles.mark}>(85%)</span>
            </li>
            <li>
              Illustrator <span className={styles.markB}>(75%)</span>
            </li>
            <li>
              Git <span className={styles.markB}>(30%)</span>
            </li>
            <li>
              GTQ <span className={styles.markB}>(70%)</span>
            </li>
          </ol>
        </li>
        <li data-animate>
          <h2>Experience</h2>
          <ol>
            <li>
              <p className={styles.mark}>                
                {t("profile.experience1")}
                <b className={styles.markB}>24.07 ~ 25.04</b>
              </p>
              <p>{t("profile.experience_text")}</p>
            </li>
            <li>
              <p className={styles.mark}>
                {t("profile.experience2")}
                <b className={styles.markB}>25.04 ~ 25.12</b>
              </p>
              <p>{t("profile.experience_text")}</p>
            </li>
          </ol>
        </li>
        <li data-animate>
          <div>
            <h2>Education</h2>
            <ol>
              <li>
                <p className={styles.mark}>                  
                  {t("profile.education")}
                  <b className={styles.markB}>23.01 ~ 24.03</b>
                </p>
                <p>{t("profile.education_text")}</p>
              </li>
            </ol>
          </div>

          <div>
            <h2>Certifications</h2>
            <ol>
              <li>
                <p className={styles.mark}>
                  ITQ <b className={styles.markB}>2016 ~</b>
                </p>
                <p>{t("profile.certification1")}</p>
              </li>
              <li>
                <p className={styles.mark}>
                  GTQ <b className={styles.markB}>2022 ~</b>
                </p>
                <p>{t("profile.certification2")}</p>
              </li>
            </ol>
          </div>
        </li>
      </ul>
    </section>
  );
}
