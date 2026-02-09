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
  const { slug } = await params;

  const project = ProjectsDetails.find(
    ( project ) => project.slug === slug
  );

  if ( !project ) {
    redirect( "/" );
  }

  return {
    title: project.title,
    description: project.description,
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
