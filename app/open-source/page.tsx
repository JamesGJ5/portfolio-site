import OpenSourceProject from "@/components/OpenSourceProject/OpenSourceProject";
import FeaturedUnfeatured from "@/components/FeaturedUnfeatured/FeaturedUnfeatured";
import openSourceProjects from "@/data/openSourceProjects";

export default function OpenSourcePage() {
  const featuredOpenSourceProjects = openSourceProjects.filter(project => project.isFeatured);
  const unfeaturedOpenSourceProjects = openSourceProjects.filter(project => !project.isFeatured);
  return (
    <main>
      <h1>My Open Source Contributions...</h1>
      <FeaturedUnfeatured
        featuredProps={featuredOpenSourceProjects.map(project => ({ openSourceProject: project }))}
        unfeaturedProps={unfeaturedOpenSourceProjects.map(project => ({ openSourceProject: project }))}
        ListedComponent={OpenSourceProject}
      />
    </main>
  );
}
