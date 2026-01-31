"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header () {
  const pathname = usePathname();
  const [ menuOpen, setMenuOpen ] = useState( false );

  const navItems = [
    { label: "Accueil", link: "/" },
    { label: "Projets", link: "/projets" },
    { label: "Contact", link: "/contact" }
  ];

  return (
    <header className="sticky top-0 bg-background px-5 lg:px-12 border-b border-foreground/30 flex items-center justify-between h-min z-5">
      <div className="py-3 pr-5 lg:py-5 lg:pr-8 w-fit border-r border-foreground/30">
        <Link href="/">
          {/* TODO: Ajouter le logo */}
          <p className="text-xl">ROULETTE</p>
        </Link>
      </div>

      {/* Menu de nav */}
      <nav className={ `fixed top-0 right-0 transition-all ${ menuOpen ? "translate-x-0" : "translate-x-full"} lg:translate-x-0 w-full h-dvh lg:h-full p-8 lg:p-0 bg-background z-10 lg:relative` }>
        <ul className="flex flex-col lg:flex-row justify-center lg:justify-end lg:gap-12 h-full">
          {navItems.map( ( item ) => (
            <li
              key={ item.link }
              className="
                        py-8 lg:py-0
                        border-b border-foreground/30
                        first:border-t border-foreground/30
                        lg:border-0
                        lg:first:border-t-0
                      "
            >
              <Link href={ item.link } className={ `group block text-3xl py-5 lg:text-lg font-bold uppercase lg:capitalize ${item.link === pathname && "text-secondary"}` }>
                <div className="relative overflow-hidden">
                  <p className="group-hover:-translate-y-7 duration-400">{item.label}</p>
                  <p className="absolute hidden lg:block top-7 left-0 group-hover:top-0 duration-400">{item.label}</p>
                </div>
              </Link>
            </li>
          ) )}
        </ul>
      </nav>

      {/* Bouton menu */}
      <button
        className="group inline-flex w-12 h-12 items-center justify-center rounded transition z-20 lg:hidden"
        aria-pressed={ menuOpen }
        aria-label="Menu"
        onClick={ () => setMenuOpen( ( v ) => !v ) }
      >
        <svg
          className="w-6 h-6 fill-current pointer-events-none"
          viewBox="0 0 16 16"
        >
          {/* Barre du haut */}
          <rect
            y="7.5"
            width="9"
            height="1"
            rx="0.5"
            className="
      origin-center
      -translate-y-[4px]
      translate-x-[7px]
      transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]
      group-aria-pressed:translate-x-0
      group-aria-pressed:translate-y-0
      group-aria-pressed:rotate-[315deg]
    "
          />

          {/* Barre centrale */}
          <rect
            y="7.5"
            width="16"
            height="1"
            rx="0.5"
            className="
      origin-center
      transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]
      group-aria-pressed:rotate-45
    "
          />

          {/* Barre du bas */}
          <rect
            y="7.5"
            width="9"
            height="1"
            rx="0.5"
            className="
      origin-center
      translate-y-[4px]
      transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]
      group-aria-pressed:translate-y-0
      group-aria-pressed:rotate-[135deg]
    "
          />
        </svg>

      </button>
    </header>
  );
}
