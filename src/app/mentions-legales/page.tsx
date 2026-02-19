export default function MentionsLegalesPage () {
  return (
    <main className="px-5 lg:px-12 mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 pt-8">Mentions légales</h1>
      <p className="mb-5">En vigueur au 19 février 2026</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">1. Éditeur du site</h2>
        <p className="mb-2 pl-4"><strong>Nom :</strong> Maël Roulette</p>
        <p className="mb-2 pl-4"><strong>Statut :</strong> Étudiant en développement web / Salarié chez Portobello Communication</p>
        <p className="mb-2 pl-4"><strong>Email :</strong> <a href="mailto:contact@mael-roulette.fr" className="text-secondary hover:underline">contact@mael-roulette.fr</a></p>
        <p className="mb-2 pl-4"><strong>Site internet :</strong> <a href="https://mael-roulette.fr" className="text-secondary hover:underline">mael-roulette.fr</a></p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">2. Hébergement</h2>
        <p className="mb-2 pl-4">Le site est hébergé par :</p>
        <p className="mb-2 pl-4"><strong>Infomaniak Network SA</strong></p>
        <p className="mb-2 pl-4">Rue Eugène-Marziano 25, 1227 Les Acacias (GE), Suisse</p>
        <p className="mb-2 pl-4"><strong>Site web :</strong> <a href="https://www.infomaniak.com" className="text-secondary hover:underline">https://www.infomaniak.com</a></p>
        <p className="mb-2 pl-4"><strong>Téléphone :</strong> +41 22 820 35 44</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">3. Propriété intellectuelle</h2>
        <p className="mb-2 pl-4">Tous les contenus présents sur ce site (textes, images, code, logo, etc.) sont la propriété exclusive de Maël Roulette, sauf mention contraire.</p>
        <p className="mb-2 pl-4">Toute reproduction, représentation ou diffusion, même partielle, sans autorisation écrite préalable est interdite.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">4. Responsabilité</h2>
        <p className="mb-2 pl-4">Ce site a pour but de présenter les projets réalisés par Maël Roulette.</p>
        <p className="mb-2 pl-4">L&apos;éditeur ne saurait être tenu responsable des erreurs ou des éventuelles interruptions d&apos;accès.</p>
        <p className="mb-2 pl-4">Aucune garantie n&apos;est fournie quant à l&apos;exactitude ou l&apos;exhaustivité du contenu.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">5. Données personnelles</h2>
        <p className="mb-2 pl-4">Le site ne collecte aucune donnée personnelle sans votre consentement.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">6. Cookies et statistiques de fréquentation</h2>
        <p className="mb-2 pl-4">Le site ne collecte aucune statistique et aucun cookie.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">7. Loi applicable</h2>
        <p className="mb-2 pl-4">Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
      </section>
    </main>
  );
}
