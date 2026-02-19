export default function PolitiqueDeConfidentialitePage () {
  return (
    <main className="px-5 lg:px-12 mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 pt-8">Politique de confidentialité</h1>
      <p className="mb-8">En vigueur au 19 février 2026</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">1. Introduction</h2>
        <p className="mb-4">
          Maël Roulette s&apos;engage à respecter votre vie privée. Cette politique de confidentialité explique notre approche concernant la protection des données personnelles sur notre site web <a href="https://mael-roulette.fr" className="text-secondary hover:underline">mael-roulette.fr</a>.
        </p>
        <p className="font-semibold">
          <strong>Point important :</strong> Ce site ne collecte aucune donnée personnelle et n&apos;utilise aucun cookie.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">2. Absence de collecte de données</h2>
        <p className="mb-4">
          Ce site ne collecte, ne stocke et ne traite aucune donnée personnelle. Spécifiquement :
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Nous ne collectons pas votre adresse IP à titre personnel</li>
          <li>Nous n&apos;utilisons pas de cookies ou de technologies de suivi</li>
          <li>Nous n&apos;effectuons pas d&apos;analyse comportementale</li>
          <li>Nous ne stockons aucune information sur votre navigation</li>
          <li>Nous ne vous identifions ni ne vous suivons</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">3. Formulaires de contact</h2>
        <p className="mb-4">
          Si vous nous contactez par email, les données que vous partagez (nom, adresse email, message) sont transmises directement à notre adresse email et ne sont jamais stockées sur le serveur.
        </p>
        <p>
          Ces données restent sous votre contrôle et sont protégées par la sécurité de votre fournisseur de messagerie et du nôtre.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">4. Hébergement et logs serveur</h2>
        <p className="mb-4">
          Le site est hébergé par Infomaniak Network SA en Suisse. Les serveurs peuvent enregistrer automatiquement des logs serveur standards incluant :
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Adresses IP (usage technique uniquement)</li>
          <li>Erreurs serveur</li>
        </ul>
        <p className="mt-4">
          Ces logs sont gérés par notre hébergeur selon sa politique de confidentialité et ne sont pas utilisés à titre personnel pour vous identifier ou vous suivre. Consultez la <a href="https://www.infomaniak.com/fr/cgv/politique-de-confidentialite" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">politique de confidentialité d&apos;Infomaniak</a> pour plus d&apos;informations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">5. Absence de cookies</h2>
        <p>
          Ce site n&apos;utilise aucun cookie pour tracer votre activité, analyser votre comportement ou vous proposer de la publicité ciblée. Vous naviguez en toute confidentialité sans suivi.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">6. Vos droits RGPD</h2>
        <p className="mb-4">
          Conformément à la réglementation RGPD, vous avez les droits suivants :
        </p>
        <ul className="list-disc list-inside mb-4 ml-4 space-y-2">
          <li><strong>Droit d&apos;accès :</strong> Demander l&apos;accès à vos données (le cas échéant)</li>
          <li><strong>Droit à l&apos;oubli :</strong> Demander la suppression de vos données</li>
          <li><strong>Droit de rectification :</strong> Corriger vos données inexactes</li>
          <li><strong>Droit d&apos;opposition :</strong> Vous opposer au traitement de vos données</li>
        </ul>
        <p>
          Pour exercer ces droits ou poser une question, veuillez nous contacter à <a href="mailto:contact@mael-roulette.fr" className="text-secondary hover:underline">contact@mael-roulette.fr</a>.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">7. Liens externes</h2>
        <p>
          Ce site peut contenir des liens vers d&apos;autres sites web. Nous ne sommes pas responsables des pratiques de confidentialité de ces sites externes. Nous vous encourageons à consulter leurs politiques de confidentialité respectives avant de partager vos données.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">8. Sécurité</h2>
        <p>
          Bien que nous ne collections aucune donnée, nous maintenons une sécurité appropriée sur notre site, y compris le chiffrage HTTPS pour toutes les communications.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">9. Modifications de cette politique</h2>
        <p>
          Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications entreront en vigueur dès leur publication. Votre utilisation continue du site implique votre acceptation de la politique modifiée.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">10. Contact</h2>
        <p className="mb-2">
          Si vous avez des questions sur cette politique de confidentialité, contactez-nous à :
        </p>
        <p className="mb-2">
          <strong>Email :</strong> <a href="mailto:contact@mael-roulette.fr" className="text-secondary hover:underline">contact@mael-roulette.fr</a>
        </p>
        <p>
          <strong>Site :</strong> <a href="https://mael-roulette.fr" className="text-secondary hover:underline">mael-roulette.fr</a>
        </p>
      </section>
    </main>
  );
}
