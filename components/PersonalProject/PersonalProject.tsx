import Project from "@/components/Project/Project";
import Skills from "@/components/Skills/Skills";
import { PersonalProjectProps } from "@/types";

export default function PersonalProject({ personalProject }: PersonalProjectProps) {
    const { lastModified, languagesUsed, ...project } = personalProject;
    return (
        <>
            <Project project={project}/>
            <Skills skills={languagesUsed}/>
        </>
    );
}