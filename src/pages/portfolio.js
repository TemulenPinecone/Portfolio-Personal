import AboutMe from "@/components/AboutMe";
import react from "react";
import { ContactMe } from "@/components/ContactMe";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { useTheme } from "@/context/ThemeContext";

export default function Portfolio() {
  const { theme } = useTheme();

  const divClassName = theme == `light` ? `bg-white` : `bg-black`;

  return (
    <div>
      <div className={divClassName}>
        <Header />
        <Profile />
        <AboutMe />
        <Skills />
        <Experience />
        <Work />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}
