import PersonalProject from "@/components/PersonalProject";
import FeaturedUnfeatured from "@/components/FeaturedUnfeatured";
import { sortPersonalProjects, getPersonalProjects } from "@/utils/personalProjectUtils";

export default async function ProjectsPage() {
  const personalProjects = await getPersonalProjects('JamesGJ5');
  if (personalProjects.length === 0) {
    throw new Error();
  }
  sortPersonalProjects(personalProjects);
  const featuredPersonalProjects = personalProjects.filter(project => project.isFeatured);
  const unfeaturedPersonalProjects = personalProjects.filter(project => !project.isFeatured);
  return (
    <main>
      <h1>My Personal Projects...</h1>
      <FeaturedUnfeatured
        featuredProps={featuredPersonalProjects.map(personalProject => ({ personalProject }))}
        unfeaturedProps={unfeaturedPersonalProjects.map(personalProject => ({ personalProject }))}
        ListedComponent={PersonalProject}
      />
    </main>
  );
}
