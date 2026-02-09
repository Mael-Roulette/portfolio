import { ProjectDetails } from "@/types/project";

interface StackSection {
  stack: ProjectDetails["technos"]
}

export default function StackSection ( { stack }: StackSection ) {
  return (
    <section className="mt-8">
      <h2 className="font-jubble text-center text-3xl lg:text-4xl pb-5 border-foreground/30 border-b-1">Les technologies utilisées</h2>
      <ul className="flex flex-wrap">
        {stack.map( ( techno, index ) => (
          <li key={ index } className="w-full flex flex-col items-center justify-center gap-3 py-6 pb-4 border-foreground/30 border-1">
            <p className="font-jubble text-xl lg:text-2xl">{techno}</p>
          </li>
        ) )}
      </ul>
    </section>
  );
}