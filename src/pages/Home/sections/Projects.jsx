import { useState, useMemo, useEffect, useRef } from "react";
import styles from "../home.module.scss";
import { projectImg } from "../../../assets/images";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  const sectionRef = useRef(null);

  useEffect(() => {
    const targets = sectionRef.current.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.view);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const [activeTab, setActiveTab] = useState("web");
  const [activeCategory, setActiveCategory] = useState("ALL");

  const [selectedItem, setSelectedItem] = useState(null);

  const designData = [
    {
      id: 1,
      category: "BRAND",
      title: "projects.title1",
      subtitle: "Brand Identity Design",
      tag: "tag01",
      img: projectImg.design01,
    },
    {
      id: 2,
      category: "CAMPAIGN",
      title: "projects.title2",
      subtitle: "Marketing Visual Design",
      tag: "tag02",
      img: projectImg.design02,
    },
    {
      id: 3,
      category: "CAMPAIGN",
      title: "projects.title3",
      subtitle: "Social Media Promotion Design",
      tag: "tag02",
      img: projectImg.design03,
    },
    {
      id: 4,
      category: "CAMPAIGN",
      title: "projects.title4",
      subtitle: "Travel Promotion Visual Design",
      tag: "tag02",
      img: projectImg.design04,
    },
    {
      id: 5,
      category: "CAMPAIGN",
      title: "projects.title5",
      subtitle: "Interactive Promotion Design",
      tag: "tag02",
      img: projectImg.design05,
    },
    {
      id: 6,
      category: "CAMPAIGN",
      title: "projects.title6",
      subtitle: "CRM Promotion Design",
      tag: "tag02",
      img: projectImg.design06,
    },
    {
      id: 7,
      category: "SERVICE UI",
      title: "projects.title7",
      subtitle: "Recruitment Landing Page Design",
      tag: "tag03",
      img: projectImg.design07,
    },
    {
      id: 8,
      category: "SERVICE UI",
      title: "projects.title8",
      subtitle: "Recruitment Landing Page Design",
      tag: "tag03",
      img: projectImg.design08,
    },
    {
      id: 9,
      category: "SERVICE UI",
      title: "projects.title9",
      subtitle: "Service Landing & UI Design",
      tag: "tag03",
      img: projectImg.design09,
    },
    {
      id: 10,
      category: "SERVICE UI",
      title: "projects.title10",
      subtitle: "Information UI & Graphic Design",
      tag: "tag03",
      img: projectImg.design10,
    },
    {
      id: 11,
      category: "SERVICE UI",
      title: "projects.title11",
      subtitle: "Information Interface Design",
      tag: "tag03",
      img: projectImg.design11,
    },
  ];

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };
  const shuffledData = useMemo(() => shuffleArray(designData), []);

  const categories = ["ALL", "BRAND", "CAMPAIGN", "SERVICE UI"];

  const filteredData =
    activeCategory === "ALL"
      ? shuffledData
      : shuffledData.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (selectedItem) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [selectedItem]);

  return (
    <section ref={sectionRef} id="projects" className={styles.projects}>
      <h2 data-animate>PROJECTS</h2>
      <div data-animate className={styles.projectBtn}>
        <button
          type="button"
          className={activeTab === "web" ? styles.active : ""}
          onClick={() => setActiveTab("web")}
        >
          WEB PROJECTS
        </button>
        <button
          type="button"
          className={activeTab === "design" ? styles.active : ""}
          onClick={() => setActiveTab("design")}
        >
          DESIGN WORKS
        </button>
      </div>
      <div data-animate className={styles.projectList}>
        {activeTab === "web" && (
          <ul className={`${styles.web} ${styles.fadeInList}`}>
            <li style={{ animationDelay: "0.1s" }}>
              <div className={styles.projectImg}></div>
              <div className={styles.projectText}>
                <h3>
                  PABLO&CO
                  <a
                    href="https://minj1109.github.io/pablo/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW
                  </a>
                </h3>
                <ol>
                  <li>{t("projects.tag1")}</li>
                  <li>{t("projects.tag2")}</li>
                  <li>{t("projects.tag3")}</li>
                  <li>{t("projects.tag4")}</li>
                  <li>{t("projects.tag5")}</li>
                </ol>
                <p>{t("projects.pablo_text")}</p>
              </div>
            </li>
            <li style={{ animationDelay: "0.3s" }}>
              <div className={styles.projectImg}></div>
              <div className={styles.projectText}>
                <h3>
                  LP PLAY
                  <a
                    href="https://minj1109.github.io/lp-play/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW
                  </a>
                </h3>
                <ol>
                  <li>{t("projects.tag1")}</li>
                  <li>{t("projects.tag2")}</li>
                  <li>{t("projects.tag3")}</li>
                  <li>{t("projects.tag4")}</li>
                  <li>{t("projects.tag6")}</li>
                </ol>
                <p>{t("projects.lp_text")}</p>
              </div>
            </li>
            <li style={{ animationDelay: "0.5s" }}>
              <div className={styles.projectImg}></div>
              <div className={styles.projectText}>
                <h3>
                  영풍문고
                  <a
                    href="https://minj1109.github.io/ypLibrary/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW
                  </a>
                </h3>
                <ol>
                  <li>{t("projects.tag1")}</li>
                  <li>{t("projects.tag2")}</li>
                  <li>{t("projects.tag3")}</li>
                  <li>{t("projects.tag7")}</li>
                  <li>{t("projects.tag8")}</li>
                </ol>
                <p>{t("projects.yp_text")}</p>
              </div>
            </li>
          </ul>
        )}
        {activeTab === "design" && (
          <div className={styles.design}>
            <ol>
              {categories.map((cate) => (
                <li
                  key={cate}
                  onClick={() => setActiveCategory(cate)}
                  className={activeCategory === cate ? styles.active : ""}
                >
                  {cate}
                </li>
              ))}
            </ol>

            <ul className={styles.fadeInList}>
              {filteredData.map((item, index) => (
                <li
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className={styles[item.tag]}>{item.category}</span>

                  <div
                    className={`${styles.projectImg} ${styles[`img${String(item.id).padStart(2, "0")}`]}`}
                  />

                  <p>{t(item.title)}</p>
                  <b className={styles[item.tag]}>{item.subtitle}</b>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {selectedItem && (
        <div
          className={styles.projectsModal}
          onClick={() => setSelectedItem(null)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedItem(null)}
            >
              ✕
            </button>
            <img src={selectedItem.img} alt={selectedItem.title + "이미지"} />
          </div>
        </div>
      )}
    </section>
  );
}
