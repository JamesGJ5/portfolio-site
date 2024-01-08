// TODO: consider whether it's best to have all types and interfaces in one file or if some would be better elsewhere

export interface Experience {
    position: string,
    org: string,
    orgSrc?: string,
    startYear: number,
    endYear?: number,
    description: string,
    skills: string[],
}

export interface Project {
    repoName: string,
    repoUrl: string,
    repoDescripion: string | null,
    isFeatured: boolean,
    languagesUsed: string[],
    lastModified: Date,
    deploymentURL: string | null,
    projectImageSrc?: string,
}

export interface ProjectProps {
    project: Project,
}

export interface OpenSourceProjectProps extends ProjectProps {
    contributorUsername: string,
}
