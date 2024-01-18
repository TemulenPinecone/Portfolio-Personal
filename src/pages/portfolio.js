import AboutMe from "@/components/AboutMe";
import { Experience } from "@/components/Experience";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";

export default function Portfolio() {
  return (
    <div>
      <div>
        <Header />
        <Profile />
        <AboutMe />
        <Skills />
        <Experience />
      </div>
    </div>
  );
}
