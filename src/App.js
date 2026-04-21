import { useEffect, useState } from "react";
import i18n from "./i18n";
import Home from "./pages/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  const [isChanging, setIsChanging] = useState(false);

  const handleChangeLang = (lang) => {
    if (isChanging) return;
    if (i18n.language.startsWith(lang)) return;

    setIsChanging(true);

    setTimeout(() => {
      i18n.changeLanguage(lang);
      setIsChanging(false);
    }, 300);
  };

  useEffect(() => {
    const header = document.getElementById("header");

    const setRootMargin = () => {
      const root = document.getElementById("root");
      if (header && root) {
        const height = header.getBoundingClientRect().height;
        root.style.marginTop = `${height}px`;
      }
    };

    setRootMargin();
    window.addEventListener("resize", setRootMargin);

    return () => window.removeEventListener("resize", setRootMargin);
  }, []);

  return (
    <div className={`app ${isChanging ? "hide" : ""}`}>
      <Header onChangeLang={handleChangeLang} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;