import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSection from "@/components/home/HeroSection";
import PresentationSection from "@/components/home/PresentationSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import CursorFollower from "@/components/ui/CursorFollower";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maël Roulette - Développeur Web & Mobile",
  description: "Développeur Web & Mobile",
};

export default function Home () {
  return (
    <main className="overflow-x-hidden">
      <CursorFollower />
      <HeroSection />
      <PresentationSection />
      <ProjectsSection />
      <ExperienceSection />
    </main>
  );
}
