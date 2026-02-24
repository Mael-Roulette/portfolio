import { MetadataRoute } from "next";
import projectsCards from "@/data/projects.cards.json";

export default function sitemap (): MetadataRoute.Sitemap {
  const baseUrl = "https://mael-roulette.fr";
  const lastModified = new Date( "2026-02-19T13:00:05+00:00" );

  // Génération des URLs des projets
  const projectUrls = projectsCards.map( ( project ) => ( {
    url: `${baseUrl}/projets/${project.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  } ) );

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projets`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...projectUrls,
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-de-confidentialite`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
