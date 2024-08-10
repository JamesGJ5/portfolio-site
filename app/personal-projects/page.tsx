import PersonalProject from "@/components/PersonalProject/PersonalProject";
import FeaturedUnfeatured from "@/components/FeaturedUnfeatured/FeaturedUnfeatured";
import { sortPersonalProjects, getPersonalProjects } from "@/utils/personalProjectUtils";

export default async function ProjectsPage() {
  const personalProjects = await getPersonalProjects('JamesGJ5');
  if (personalProjects.length === 0) {
    throw new Error();
  }
  const sortedPersonalProjects = sortPersonalProjects(personalProjects);
  const featuredPersonalProjects = sortedPersonalProjects.filter(project => project.isFeatured);
  const unfeaturedPersonalProjects = sortedPersonalProjects.filter(project => !project.isFeatured);
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
