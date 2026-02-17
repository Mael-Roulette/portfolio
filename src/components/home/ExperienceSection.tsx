"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaGitlab } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import experiences from "@/data/experiences.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Titre
      tl.from(".experience-title", {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: "power3.out",
      });

      // Expériences
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

      // CTA
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="grid grid-cols-[1fr_2fr] gap-10 px-5 lg:px-12 py-16"
    >
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-5 gap-4">
          {technos.map((techno) => (
            <div
              key={techno}
              className="flex items-center justify-center w-24 h-24 relative overflow-hidden rounded-md transition-all hover:scale-110"
            >
              <Image
                src={`/images/technos/${techno}.webp`}
                alt={techno.charAt(0).toUpperCase() + techno.slice(1)}
                fill
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="experience-title text-6xl text-right lg:text-8xl font-bold mb-8">
          Mon <span className="font-jubble text-secondary">expérience</span>
        </h2>

        <ul className="space-y-5">
          {experiences.map((experience) => (
            <li
              key={experience.title}
              className="experience-item flex gap-8 pb-7 border-b border-foreground/30"
            >
              <h3 className="font-bold text-5xl min-w-125 w-125">
                {experience.title}
              </h3>

              <ul className="list-disc text-lg w-full">
                {experience.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="experience-cta flex justify-end wrap gap-5 mt-6">
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
    </section>
  );
}
