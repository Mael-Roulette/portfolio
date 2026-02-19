"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin( SplitText );

export default function HeroSection () {
  const sectionRef = useRef<HTMLElement | null>( null );

  useEffect( () => {
    if ( !sectionRef.current ) return;

    const ctx = gsap.context( () => {
      const tl = gsap.timeline( {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%",
          once: true,
        },
      } );

      tl.from(
        ".hero-btn",
        {
          opacity: 0,
          y: 30,
          duration: 1.8,
          ease: "power2.out",
        },
        "-=0.2"
      );

      // Animation du texte
      const split = new SplitText( ".split", {
        type: "lines, words",
        linesClass: "line",
        mask: "lines",
      } );

      gsap.from( split.lines, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.12,
        duration: 1.8,
        ease: "expo.out",
      } );
    }, sectionRef );

    return () => ctx.revert();
  }, [] );

  return (
    <section
      ref={ sectionRef }
      className="h-[calc(100dvh-54px)] lg:h-[calc(100dvh-69px)] grid grid-rows-3 md:grid-rows-[2fr_1fr_2fr]"
    >
      <div className="h-full border-b border-b-foreground/30">
        <div className="px-5 w-fit lg:w-4/5 2xl:w-3/4 border-r border-r-foreground/30 h-full flex flex-col justify-center">
          <p className="split text-6xl md:text-8xl lg:text-9xl xl:text-[150px] uppercase font-jubble">
            Roulette
          </p>
          <p className="split text-6xl md:text-8xl lg:text-9xl xl:text-[150px] uppercase font-bold">
            Maël
          </p>
        </div>
      </div>

      <div className="hero-btn flex flex-col md:flex-row gap-5 items-center justify-center">
        <Link href="/projets" className="btn-primary">
          Découvrir mes projets
        </Link>
        <Link href="/contact" className="btn-primary">
          Me contacter <GoArrowRight className="text-2xl" />
        </Link>
      </div>

      <div className="flex flex-col items-end border-y border-y-foreground/30">
        <div className="px-5 w-fit lg:w-4/5 2xl:w-3/4 border-l border-l-foreground/30 h-full flex flex-col justify-center">
          <h1 className="split text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-right uppercase font-bold">
            Développeur
            <br />
            <span className="font-jubble text-secondary">Web</span> &{" "}
            <span className="font-jubble text-secondary">Mobile</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
