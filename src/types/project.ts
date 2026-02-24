export interface Card {
    slug: ProjectDetails["slug"],
    title: ProjectDetails["title"],
    cover: string,
    tag: string,
}

export interface ProjectDetails {
    slug: string,
    title: string,
    hero: string,
    tags: string[],
    technos: string[],
    description: string,
    content: string,
    links: ProjectLinks,
}

type ProjectLinks = {
    site?: string;
    github?: string;
};
