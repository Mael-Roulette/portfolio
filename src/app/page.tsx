import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSection from "@/components/home/HeroSection";
import PresentationSection from "@/components/home/PresentationSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maël Roulette - Développeur Web & Mobile",
  description: "Développeur Web & Mobile",
};

export default function Home () {
  return (
    <main>
      <HeroSection />
      <PresentationSection />
      <ProjectsSection />
      <ExperienceSection />
    </main>
  );
}
