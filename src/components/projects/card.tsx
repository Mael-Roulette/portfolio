import Link from "next/link";
import Image from "next/image";
import { Card } from "@/types/project";

interface ProjectCardProps {
    card: Card
}

export default function ProjectCard ( { card }: ProjectCardProps ) {
  return (
    <Link href={ `/projets/${ card.slug }` } className="block px-5 py-10 lg:py-12 lg:px-12 space-y-4">
      <h3 className="font-jubble text-3xl lg:text-4xl">{ card.title }</h3>
      <div className="w-full h-[250px] lg:h-[350px] rounded-lg relative overflow-hidden">
        <Image
          src={ card.cover }
          alt={ card.title }
          fill
          style={ { objectFit: "cover" } }
        />
      </div>
      <p className="text-lg">{ card.tag }</p>
    </Link>
  );
}