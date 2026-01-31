export interface Card {
    slug: string,
    title: string,
    cover: string,
    tag: string,
}

export interface ProjectDetails {
    slug: string,
    hero: string,
    tags: string[],
    technos: string[],
    description: string,
    content: string,
    links: ProjectLinks,
}

type ProjectLinks = {
    site: string;
    github?: string[];
};
