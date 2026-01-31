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
    <div>
      <h1>{project.slug}</h1>
      <p>{project.description}</p>


      <h2>Technologies</h2>
      <ul>
        {project.technos.map( ( techno ) => (
          <li key={ techno }>{techno}</li>
        ) )}
      </ul>

      <p>{project.content}</p>
    </div>
  );
}
