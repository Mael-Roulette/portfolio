import { ProjectDetails } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface HeroSectionProps {
  project: ProjectDetails
}

export default function HeroSection ( { project }: HeroSectionProps ) {
  return (
    <section className="border-foreground/30 border-b mt-8 pb-8 px-5 lg:px-12 grid lg:grid-cols-[2fr_1fr] gap-5">
      <div className="relative w-full h-55 md:h-75 lg:h-100 rounded-lg overflow-hidden">
        <Image
          src={ project.hero }
          alt={ project.title }
          fill
          preload
          className="object-cover"
        />
      </div>
      <div>
        <h1 className="text-3xl lg:text-5xl font-bold">{project.title}</h1>
        <ul className="pt-3 pb-5 flex flex-wrap gap-3">
          { project.tags.map( ( tag: string, index ) =>
            <li key={ index } className="py-1 px-4 rounded-full bg-secondary text-foreground w-fit">
              { tag }
            </li>
          )}
        </ul>
        <p className="text-lg mb-6">{ project.description }</p>
        <div className="flex gap-4 items-center">
          { project.links.github && <Link href={ project.links.github } target="_blank" className="btn-primary">Github <FaGithub className="text-2xl" /></Link> }
          { project.links.site && <Link href={ project.links.site } target="_blank" className="text-secondary text-lg hover:underline">Découvrir le site internet</Link> }
        </div>
      </div>
    </section>
  );
}
