import AboutMe from "@/components/AboutMe";
import { ContactMe } from "@/components/ContactMe";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import { Work } from "@/components/Work";

export default function Portfolio() {
  return (
    <div>
      <div>
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
