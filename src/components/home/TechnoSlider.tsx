"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaGitlab } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import experiences from "@/data/experiences.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin( ScrollTrigger );

const technos = [
  "appwrite",
  "expressjs",
  "mongodb",
  "nestjs",
  "nextjs",
  "php",
  "postgresql",
  "react-native",
  "sass",
  "tailwind",
  "typescript",
  "wordpress",
];

// Triplé pour un défilement parfaitement infini sans saut visible
const tripled = [ ...technos, ...technos, ...technos ];

interface TrackProps {
  reverse?: boolean;
  duration?: number; // secondes
}

function Track ( { reverse = false, duration = 30 }: TrackProps ) {
  return (
    <div className="flex overflow-hidden">
      <div
        className="flex gap-3 shrink-0"
        style={ {
          animation: `marquee ${duration}s linear infinite ${reverse ? "reverse" : "normal"}`,
          // on déplace exactement 1/3 (un set de technos)
        } }
      >
        { tripled.map( ( techno, i ) => (
          <div
            key={ `${techno}-${i}` }
            className="relative w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-lg overflow-hidden transition-transform hover:scale-110"
          >
            <Image
              src={ `/images/technos/${techno}.webp` }
              alt={ techno.charAt( 0 ).toUpperCase() + techno.slice( 1 ) }
              fill
              className="object-contain"
            />
          </div>
        ) ) }
      </div>
    </div>
  );
}

export default function ExperienceSection () {
  const sectionRef = useRef<HTMLElement | null>( null );

  useEffect( () => {
    if ( !sectionRef.current ) return;

    const ctx = gsap.context( () => {
      const tl = gsap.timeline( {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      } );

      tl.from( ".experience-title", {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: "power3.out",
      } );

      tl.from(
        ".experience-item",
        {
          opacity: 0,
          y: 50,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.25,
        },
        "-=0.4",
      );

      tl.from(
        ".experience-cta",
        {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.2",
      );
    }, sectionRef );

    return () => ctx.revert();
  }, [] );

  return (
    <section ref={ sectionRef } className="px-5 lg:px-12 py-16">

      {/* ── Slider de technos ─────────────────────────────────── */}
      <div className="relative mb-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)]">
        {/* Mobile : 2 rangées / Desktop : 3 rangées */}
        <div className="flex flex-col gap-3">
          <Track reverse={ false } duration={ 30 } />
          <Track reverse={ true } duration={ 24 } />
          {/* 3e rangée uniquement desktop */}
          <div className="hidden lg:flex overflow-hidden">
            <div
              className="flex gap-3 shrink-0"
              style={ { animation: "marquee 38s linear infinite normal" } }
            >
              { tripled.map( ( techno, i ) => (
                <div
                  key={ `third-${techno}-${i}` }
                  className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden transition-transform hover:scale-110"
                >
                  <Image
                    src={ `/images/technos/${techno}.webp` }
                    alt={ techno.charAt( 0 ).toUpperCase() + techno.slice( 1 ) }
                    fill
                    className="object-contain"
                  />
                </div>
              ) ) }
            </div>
          </div>
        </div>
      </div>

      {/* ── Contenu expérience ────────────────────────────────── */}
      <div>
        <h2 className="experience-title text-6xl text-right lg:text-8xl font-bold mb-8">
          Mon <span className="font-jubble text-secondary">expérience</span>
        </h2>

        <ul className="space-y-5">
          { experiences.map( ( experience ) => (
            <li
              key={ experience.title }
              className="experience-item flex gap-8 pb-7 border-b border-foreground/30"
            >
              <h3 className="font-bold text-5xl min-w-125 w-125">
                { experience.title }
              </h3>
              <ul className="list-disc text-lg w-full">
                { experience.items.map( ( item, index ) => (
                  <li key={ index }>{ item }</li>
                ) ) }
              </ul>
            </li>
          ) ) }
        </ul>

        <div className="experience-cta flex justify-end flex-wrap gap-5 mt-6">
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
          <Link
            className="btn-primary"
            href="/mael-roulette-cv.pdf"
            target="_blank"
          >
            Voir mon CV <GoArrowUpRight className="text-2xl" />
          </Link>
        </div>
      </div>

      {/* ── Keyframe marquee (injecté en style global via Tailwind @layer) ── */}
      <style jsx global>{ `
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      ` }</style>
    </section>
  );
}