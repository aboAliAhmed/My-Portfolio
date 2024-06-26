import Boi from "@/components/boi";
import ContactUs from "@/components/contact-us";
import Header from "@/components/header";
import Projects from "@/components/project";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="bg-zinc-100 dark:bg-zinc-400/50">
      <Header />
      <Boi />
      <Skills />
      <Projects />
      <ContactUs />
    </main>
  );
}
