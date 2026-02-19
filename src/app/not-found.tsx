"use client";

import Link from "next/link";

export default function NotFound () {
  return (
    <main className="h-[calc(100dvh-54px)] lg:h-[calc(100dvh-69px)]  flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-5">
        <div className="mb-8">
          <h1 className="font-bold text-[120px] md:text-[180px] lg:text-[220px] leading-none text-secondary drop-shadow-lg">
            404
          </h1>
        </div>

        <h2 className="text-3xl font-jubble mb-4">
          Oups ! <span>Page introuvable</span>
        </h2>

        <p className="text-lg mb-8 max-w-3xl mx-auto text-foreground/80">On dirait que cette page a pris des vacances. Pas de panique, je te ramène à l&apos;accueil pour poursuivre l&apos;aventure.</p>

        <Link
          href="/"
          className="btn-primary inline-flex items-center gap-2"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
