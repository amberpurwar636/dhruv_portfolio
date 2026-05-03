import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
// import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

// async function getData() {
//   try {
//     const res = await fetch(
//       `http://localhost:3000/api/articles?username=${personalData.devUsername}`,
//       { cache: "no-store" }
//     );
//     if (!res.ok) return [];
//     return await res.json();
//   } catch (error) {
//     console.error("Failed to fetch:", error.message);
//     return [];
//   }
// }

export default async function Home() {
  // const blogs = await getData();

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {/* <Blog blogs={blogs} /> */}
      <ContactSection />
    </div>
  );
};