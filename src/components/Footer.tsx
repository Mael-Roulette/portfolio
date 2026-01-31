import Link from "next/link";
import { FaGithub, FaGitlab, FaLinkedinIn } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

export default function Footer () {
  const legalMenu = [
    { label: "Mentions légales", link: "/mention-legales" },
    { label: "Maël Roulette @2026", link: "" },
    { label: "Politique de confidentialité", link: "/politique-confidentialite" }
  ];

  return (
    <footer className="border-foreground/30 border-t-1">
      <div className="flex">
        <div className="py-3 pr-5 lg:py-5 lg:pr-8 lg:pl-12 w-fit border-r border-foreground/30 flex items-center">
          <Link href="/">
            {/* TODO: Ajouter le logo */}
            <p className="text-xl">ROULETTE</p>
          </Link>
        </div>
        <div className="py-4 px-5 space-y-4">
          <p className="text-2xl font-bold">Une idée ou un projet ? Échangeons !</p>
          <div className="flex gap-4">
            <Link
              className="btn-primary"
              href="mailto:contact@mael-roulette.fr"
            >
              Me contacter <GoArrowRight className="text-2xl" />
            </Link>

            <Link
              className="btn-primary p-3"
              href="https://gitlab.com/Mael-Roulette"
              target="_blank"
            >
              <FaGitlab className="text-2xl" />
            </Link>

            <Link
              className="btn-primary p-3"
              href="https://github.com/Mael-Roulette"
              target="_blank"
            >
              <FaGithub className="text-2xl" />
            </Link>

            <Link
              className="btn-primary p-3"
              href="https://www.linkedin.com/in/maelroulette/"
              target="_blank"
            >
              <FaLinkedinIn className="text-2xl" />
            </Link>

            {/* TODO: Ajouter CV */}
            <Link className="btn-primary p-3 font-bold" href="/mael-roulette-cv.pdf" target="_blank">
              CV
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-foreground/30">
        <ul className="grid grid-cols-3 border-foreground/30">
          {legalMenu.map( ( item, index ) => (
            <li
              key={ index }
              className="
          flex
          justify-center
          border-r border-foreground/30
          last:border-r-0
          first:justify-end
          nth-[2]:justify-center nth-[2]:text-secondary nth-[2]:text-lg
        "
            >
              <Link href={ item.link } className="px-12 py-4 flex items-center">
                {item.label}
              </Link>
            </li>
          ) )}
        </ul>
      </div>

    </footer>
  );
}