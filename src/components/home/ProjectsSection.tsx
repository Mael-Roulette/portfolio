import projectsCards from "@/data/projects.cards.json";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import ProjectCard from "../projects/card";

export default function ProjectsSection () {
  return (
    <section className="border-t-1 border-t-foreground/30 pt-12 flex flex-col gap-5">
      <h2 className="text-6xl lg:text-8xl font-bold mb-8 px-5 lg:px-12">Mes <span className="font-jubble text-secondary">projets</span></h2>
      <ul className="grid lg:grid-cols-3">
        { projectsCards.map( ( card ) =>
          <li key={ card.slug } className="border-t-1 border-b-1 border-foreground/30 lg:not-last:border-r-1">
            <ProjectCard card={ card } />
          </li>
        )}
      </ul>
      <Link href={ "/projets" } className="btn-primary w-fit place-self-end mx-5">Tous mes projets <GoArrowUpRight className="text-2xl" /></Link>
    </section>
  );
}