// TODO: consider whether it's best to have all types and interfaces in one file or if some would be better elsewhere
// TODO: finalise which of the below should be types vs interfaces

export interface Experience {
    position: string,
    org: string,
    orgSrc?: string,
    startYear: number,
    endYear?: number,
    description: string,
    skills: string[],
    orgLinkedInUrl?: string,
    orgHomePageUrl?: string,
}

export interface ExperienceProps {
    experience: Experience,
}

export interface GitHubRepo {
    full_name: string,
    description: string | null,
    topics: string[],
    languages_url: string,
    updated_at: string,
    homepage: string | null,
}

export interface RepoLanguageStats {
    [language: string]: number,
}

// TODO: consider combining Project and GitHubRepo in some way
export interface Project {
    repoName: string,
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

export interface ProjectListProps {
    projectList: Project[],
}

export interface OpenSourceProjectListProps {
    projectList: Project[],
    contributorUsername: string,
}

export interface ListProps<T extends object> {
    dataList: T[],
    ListedComponent: React.ComponentType<T>,
}
