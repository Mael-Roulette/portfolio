import Link from "next/link";

export default function PresentationSection () {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-5 py-20 mx-auto max-w-[990px]">
      <p className="text-center text-lg">Bienvenue sur mon portfolio !</p>
      <p className="text-center text-lg"> Moi c&apos;est Maël Roulette, étudiant en développement web à l&apos;IUT de Laval (53) et alternant chez <Link href="https://www.portobello-communication.fr/" target="_blank" className="text-secondary hover:underline">Portobello Communication</Link>.</p>
      <p className="text-center text-lg">Le développement web est au cœur de ce que je fais mais grâce à ma formation, je ne fais pas que coder, j&apos;ai aussi appris à  gérer un projet web de A à Z. De l&apos;analyse de vos besoins à la création  graphique, en passant par la gestion de projet ou encore la  communication, je touche à tout, et c&apos;est ce que j&apos;aime. Mais avant tout je reste un développeur, <span className="text-secondary">frontend</span> ou <span className="text-secondary">backend</span>, aucun soucis pour moi.</p>
      <p className="text-center text-lg">Je vous laisse voir tout ça de vous même !</p>
    </section>
  );
}