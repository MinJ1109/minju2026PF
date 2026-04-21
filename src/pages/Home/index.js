import styles from "./home.module.scss";
import Hero from "./sections/Hero";
import Profile from "./sections/Profile";
import Projects from "./sections/Projects";
import "../../i18n";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Projects />
    </>
  );
}
