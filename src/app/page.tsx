import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSection from "@/components/home/HeroSection";
import PresentationSection from "@/components/home/PresentationSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import CursorFollower from "@/components/ui/CursorFollower";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL( "https://mael-roulette.fr" ),

  title: {
    default: "Maël Roulette - Développeur Web & Applications",
    template: "%s | Maël Roulette"
  },

  description:
    "Portfolio de Maël Roulette, développeur web et applications. Découvrez ses projets, son approche du développement et ses réalisations personnelles et professionnelles.",

  alternates: {
    canonical: "/"
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },

  openGraph: {
    title: "Maël Roulette - Portfolio Développeur Web & Applications",
    description:
      "Découvrez le portfolio de Maël Roulette : projets, réalisations et approche du développement web et applicatif.",
    url: "https://mael-roulette.fr",
    siteName: "Maël Roulette",
    locale: "fr_FR",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Maël Roulette - Développeur Web & Applications",
    description:
      "Portfolio de Maël Roulette : projets et réalisations en développement web et applications."
  },

  authors: [ { name: "Maël Roulette" } ],

  category: "technology"
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
