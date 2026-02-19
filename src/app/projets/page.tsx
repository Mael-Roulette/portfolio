import { Metadata } from "next";
import projectsCards from "@/data/projects.cards.json";
import ProjectCard from "@/components/projects/card";
import CursorFollower from "@/components/ui/CursorFollower";

export const metadata: Metadata = {
  title: "Mes projets - Maël Roulette - Développeur Web & Mobile",
  description: "Développeur Web & Mobile",
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

      <div className="flex justify-center py-6">
        <p className="text-xl">D&apos;autres projets sont à venir. N&apos;hésitez pas à visiter mon profil sur <a href="https://github.com/Mael-Roulette" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">GitHub</a>.</p>
      </div>
    </main>
  );
}
