import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function HeroSection () {
  return (
    <section className="h-[calc(100dvh-54px)] lg:h-[calc(100dvh-69px)] grid grid-rows-3 md:grid-rows-[2fr_1fr_2fr]">
      <div className="h-full border-b-1 border-b-foreground/30">
        <div className="px-5 w-fit lg:w-4/5 2xl:w-3/4 border-r-1 border-r-foreground/30 h-full flex flex-col justify-center">
          <p className="text-6xl md:text-8xl lg:text-9xl xl:text-[150px] uppercase font-jubble">Roulette</p>
          <p className="text-6xl md:text-8xl lg:text-9xl xl:text-[150px] uppercase font-bold">Maël</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
        <Link href={ "/projets" } className="btn-primary">Découvrir mes projets</Link>
        <Link href={ "/contact" } className="btn-primary">Me contacter <GoArrowRight className="text-2xl" /></Link>
      </div>

      <div className="flex flex-col items-end border-y-1 border-y-foreground/30">
        <div className="px-5 w-fit lg:w-4/5 2xl:w-3/4 border-l-1 border-l-foreground/30 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-right uppercase font-bold">Développeur<br /><span className="font-jubble text-secondary">Web</span> & <span className="font-jubble text-secondary">Mobile</span></h1>
        </div>
      </div>
    </section>
  );
}