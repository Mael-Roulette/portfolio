import { Metadata } from "next";
import projectsCards from "@/data/projects.cards.json";
import ProjectCard from "@/components/projects/card";

export const metadata: Metadata = {
  title: "Mes projets - Maël Roulette - Développeur Web & Mobile",
  description: "Développeur Web & Mobile",
};

export default function Projects () {
  return (
    <main>
      <h1 className="text-6xl lg:text-8xl font-bold mb-8 px-5 lg:px-12 pt-8">Mes <span className="font-jubble text-secondary">projets</span></h1>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3">
        { projectsCards.map( ( card ) =>
          <li key={ card.slug } className="border-t-1 border-b-1 border-foreground/30 md:not-nth-2:border-r-1 lg:not-nth-3:border-r-1">
            <ProjectCard card={ card } />
          </li>
        )}
      </ul>
    </main>
  );
}