import Link from "next/link";
import { FaGithub, FaGitlab } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const experiences = [
  {
    title: "Calitrack",
    items: [
      "Maquettage UX/UI",
      "Développement mobile (React Native)",
      "Développement web (NextJS)",
      "Campagne de communication",
    ],
  },
  {
    title: "Portobello Communication",
    items: [
      "Intégration et développement de sites WordPress (ACF, PHP, HTML/CSS, JavaScript)",
      "Développement front-end responsive",
      "Adaptation de maquettes design aux contraintes techniques",
    ],
  },
  {
    title: "BUT MMI Développement Web",
    items: [
      "Développement web (HTML, CSS, JavaScript, PHP, etc.)",
      "Développement mobile (Flutter)",
      "UI/UX Design",
      "Gestion de projet (méthodologies agiles, outils de gestion)",
    ],
  }
];

export default function ExperienceSection () {
  return (
    <section className="grid grid-cols-[1fr_2fr] px-5 lg:px-12 py-16">
      <div></div>

      <div>
        <h2 className="text-6xl text-right lg:text-8xl font-bold mb-8">
          Mon <span className="font-jubble text-secondary">expérience</span>
        </h2>

        <ul className="space-y-5">
          {experiences.map( ( experience ) => (
            <li
              key={ experience.title }
              className="flex gap-8 pb-7 border-b-1 border-foreground/30"
            >
              <h3 className="font-bold text-5xl min-w-[500px] w-[500px]">
                {experience.title}
              </h3>

              <ul className="list-disc text-lg w-full">
                {experience.items.map( ( item, index ) => (
                  <li key={ index }>{item}</li>
                ) )}
              </ul>
            </li>
          ) )}
        </ul>

        <div className="flex justify-end wrap gap-5 mt-6">
          <Link
            className="btn-primary"
            href="https://gitlab.com/Mael-Roulette"
            target="_blank"
          >
            Gitlab <FaGitlab className="text-2xl" />
          </Link>

          <Link
            className="btn-primary"
            href="https://github.com/Mael-Roulette"
            target="_blank"
          >
            Github <FaGithub className="text-2xl" />
          </Link>

          {/* TODO: Ajouter CV */}
          <Link className="btn-primary" href="/mael-roulette-cv.pdf" target="_blank">
            Voir mon CV <GoArrowUpRight className="text-2xl" />
          </Link>
        </div>
      </div>
    </section>
  );
}
