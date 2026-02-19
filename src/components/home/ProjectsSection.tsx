"use client";

import { useEffect, useRef } from "react";
import projectsCards from "@/data/projects.cards.json";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import ProjectCard from "../projects/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin( ScrollTrigger );

export default function ProjectsSection () {
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

      tl.from( ".projects-title", {
        opacity: 0,
        y: 60,
        duration: .6,
        delay: 1,
        ease: "power3.out",
      } );

      tl.from(
        ".project-card",
        {
          opacity: 0,
          y: 50,
          duration: 0.5,
          delay: 0.2,
          ease: "power3.out",
          stagger: 0.2,
        },
        "-=0.4"
      );

      tl.from(
        ".project-btn",
        {
          opacity: 0,
          y: 30,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }, sectionRef );

    return () => ctx.revert();
  }, [] );

  return (
    <section
      ref={ sectionRef }
      className="border-t border-t-foreground/30 pt-12 flex flex-col gap-5"
    >
      <h2 className="projects-title text-6xl lg:text-8xl font-bold mb-8 px-5 lg:px-12">
        Mes <span className="font-jubble text-secondary">projets</span>
      </h2>

      <ul className="grid lg:grid-cols-3">
        {projectsCards.slice( 0, 3 ).map( ( card ) => (
          <li
            key={ card.slug }
            className="project-card first:border-t not-first:border-t-0 border-b border-foreground/30 lg:border-t lg:not-first:border-t lg:not-last:border-r"
          >
            <ProjectCard card={ card } />
          </li>
        ) )}
      </ul>

      <div className="project-btn flex justify-end">
        <Link
          href="/projets"
          className="btn-primary w-fit place-self-end mx-5"
        >
          Tous mes projets <GoArrowUpRight className="text-2xl" />
        </Link>
      </div>
    </section>
  );
}
