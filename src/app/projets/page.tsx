import { Metadata } from "next";
import projectsCards from "@/data/projects.cards.json";
import ProjectCard from "@/components/projects/card";
import CursorFollower from "@/components/ui/CursorFollower";

export const metadata: Metadata = {
  title: "Projets - Portfolio Développement Web & Applications",
  description:
    "Découvrez les projets de développement web et applications réalisés par Maël Roulette. Projets personnels, académiques et professionnels, avec présentation des objectifs, choix techniques et résultats.",

  alternates: {
    canonical: "/projets"
  },

  openGraph: {
    title: "Projets - Portfolio par Maël Roulette",
    description:
      "Liste des projets de développement web et applications réalisés par Maël Roulette.",
    url: "https://mael-roulette.fr/projets",
    siteName: "Maël Roulette",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Projets réalisés par Maël Roulette - Développement Web & Applications"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Projets - par Maël Roulette",
    description:
      "Portfolio de projets en développement web et applications.",
    images: [ "/images/og-image.png" ]
  },

  robots: {
    index: true,
    follow: true
  }
};


export default function Projects () {
  return (
    <main>
      <CursorFollower />
      <h1 className="text-6xl lg:text-8xl font-bold mb-8 px-5 lg:px-12 pt-8">Mes <span className="font-jubble text-secondary">projets</span></h1>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3">
        { projectsCards.map( ( card ) =>
          <li key={ card.slug } className="project-card border-t border-b border-foreground/30 md:not-nth-2:border-r lg:not-nth-3:border-r">
            <ProjectCard card={ card } />
          </li>
        )}
      </ul>

      <div className="flex justify-center px-5 py-6">
        <p className="text-xl">D&apos;autres projets sont à venir. N&apos;hésitez pas à visiter mon profil sur <a href="https://github.com/Mael-Roulette" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">GitHub</a>.</p>
      </div>
    </main>
  );
}
