import ContentSection from "@/components/projects/ContentSection";
import HeroSection from "@/components/projects/HeroSection";
import StackSection from "@/components/projects/StackSection";
import ProjectsDetails from "@/data/projects.details.json";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

type ProjectDetailsPageProps = {
  params: {
    slug: string;
  };
};


export async function generateMetadata (
  { params }: ProjectDetailsPageProps
): Promise<Metadata> {

  const { slug } = params;

  const project = ProjectsDetails.find(
    ( project ) => project.slug === slug
  );

  if ( !project ) {
    redirect( "/" );
  }

  const projectUrl = `https://mael-roulette.fr/projets/${project.slug}`;

  return {
    title: `${project.title} - Projet`,
    description: `${project.title} — ${project.tags.join( ", " )} par Maël Roulette`,

    alternates: {
      canonical: projectUrl,
    },

    openGraph: {
      title: `${project.title} - Projet par Maël Roulette`,
      description: `${project.description}`,
      url: projectUrl,
      siteName: "Maël Roulette",
      type: "article",
      locale: "fr_FR",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: `${project.title} - Projet développé par Maël Roulette`,
        }
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${project.title} - Maël Roulette`,
      description: project.description,
      images: [
        "/images/og-image.png",
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProjectDetailsPage ( { params }: ProjectDetailsPageProps ) {
  const { slug } = await params;

  const project = ProjectsDetails.find(
    ( project ) => project.slug === slug
  );

  if ( !project ) {
    return <p>Projet introuvable</p>;
  }

  return (
    <>
      <HeroSection project={ project } />
      <StackSection stack={ project.technos } />
      <ContentSection projectContent={ project.content } />
    </>
  );
}
