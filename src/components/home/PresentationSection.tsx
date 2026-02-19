"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin( ScrollTrigger );

export default function PresentationSection () {
  const sectionRef = useRef<HTMLElement | null>( null );

  useEffect( () => {
    if ( !sectionRef.current ) return;

    const ctx = gsap.context( () => {
      gsap.from( ".reveal", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      } );
    }, sectionRef );

    return () => ctx.revert();
  }, [] );

  return (
    <section
      ref={ sectionRef }
      className="flex flex-col items-center justify-center gap-4 px-5 py-20 mx-auto max-w-247.5"
    >
      <p className="reveal text-center text-lg">
        Bienvenue sur mon portfolio !
      </p>

      <p className="reveal text-center text-lg">
        Moi c&apos;est Maël Roulette, étudiant en développement web à l&apos;IUT de Laval
        (53) et alternant chez{" "}
        <Link
          href="https://www.portobello-communication.fr/"
          target="_blank"
          className="text-secondary hover:underline"
        >
          Portobello Communication
        </Link>
        .
      </p>

      <p className="reveal text-center text-lg">
        Le développement web est au cœur de ce que je fais mais grâce à ma
        formation, je ne fais pas que coder, j&apos;ai aussi appris à gérer un
        projet web de A à Z. De l&apos;analyse de vos besoins à la création
        graphique, en passant par la gestion de projet ou encore la
        communication, je touche à tout, et c&apos;est ce que j&apos;aime. Mais
        avant tout je reste un développeur,{" "}
        <span className="text-secondary">frontend</span> ou{" "}
        <span className="text-secondary">backend</span>, aucun souci pour moi.
      </p>

      <p className="reveal text-center text-lg">
        Je vous laisse voir tout ça de vous même !
      </p>
    </section>
  );
}
