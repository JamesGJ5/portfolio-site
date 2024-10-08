import { GitHubRepo, RepoLanguageStats, Commit, PersonalProject } from "@/types";

async function fetchWithCheck(url: string): Promise<any> {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Error fetching data from ${url}: ${res.status}`);
    }
    return res;
}

async function getAllRepos(gitHubUsername: string): Promise<GitHubRepo[]> {
  const repos: GitHubRepo[] = [];
  let pageNumber = 1;
  while (true) {
    const res = await fetchWithCheck(`https://api.github.com/users/${gitHubUsername}/repos?per_page=30&page=${pageNumber}`);
    const reposOnThisPage = await res.json();
    if (reposOnThisPage.length === 0) {
      break;
    }
    repos.push(...reposOnThisPage);
    pageNumber += 1;
  }
  return repos;
}

async function getPortfolioRepos(gitHubUsername: string): Promise<GitHubRepo[]> {
  const allRepos = await getAllRepos(gitHubUsername);
  return allRepos.filter(repo => repo.topics.includes('for-portfolio'));
}

async function getLanguages(languagesUrl: string): Promise<string[]> {
  const res = await fetchWithCheck(languagesUrl);
  const languageStats: RepoLanguageStats = await res.json();
  return Object.keys(languageStats);
}

async function getLastModificationDateTime(repoName: string, createdAt: string): Promise<Date> {
    const res = await fetchWithCheck(`https://api.github.com/repos/${repoName}/commits`);
    const commits: Commit[] = await res.json();
    return (commits.length > 0) ? new Date(commits[0].commit.author.date) : new Date(createdAt);
}

async function makeProject(repo: GitHubRepo): Promise<PersonalProject> {
  const languagesUsed = await getLanguages(repo.languages_url);
  const lastModified = await getLastModificationDateTime(repo.full_name, repo.created_at);
  return {
    repoName: repo.full_name,
    repoDescripion: repo.description,
    isFeatured: repo.topics.includes('featured'),
    languagesUsed,
    lastModified,
    deploymentURL: repo.homepage,
  };
}

export async function getPersonalProjects(gitHubUsername: string): Promise<PersonalProject[]> {
    const portfolioRepos = await getPortfolioRepos(gitHubUsername);
    return Promise.all(portfolioRepos.map(makeProject));
}

export function sortPersonalProjects(projects: PersonalProject[]): PersonalProject[] {
  return [...projects].sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());
}
