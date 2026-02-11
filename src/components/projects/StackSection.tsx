import { ProjectDetails } from "@/types/project";
import Image from "next/image";

interface StackSection {
  stack: ProjectDetails["technos"]
}

export default function StackSection ( { stack }: StackSection ) {
  return (
    <section className="mt-8">
      <h2 className="font-jubble text-center text-3xl lg:text-4xl pb-5 border-foreground/30 border-b-1">Les technologies utilisées</h2>
      <ul className="w-full grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
        {stack.map( ( techno, index ) => (
          <li
            key={ index }
            className="flex flex-col items-center justify-center gap-3 py-6 pb-4 border-b border-r border-foreground/30 last:border-r-0 [&:nth-last-child(-n+1)]:border-r-0"
          >
            <Image
              src={ `/images/technos/${techno.toLowerCase().replace( " ", "-" )}.webp` }
              alt={ techno }
              width={ 200 }
              height={ 200 }
              className="w-[90px]"
            />
            <p className="font-jubble text-xl lg:text-2xl">{techno}</p>
          </li>
        ) )}
      </ul>
    </section>
  );
}