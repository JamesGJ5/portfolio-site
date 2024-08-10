import Project from "@/components/Project/Project";
import Skills from "@/components/Skills/Skills";
import { PersonalProjectProps } from "@/types";
import styles from "./PersonalProject.module.css";

export default function PersonalProject({ personalProject }: PersonalProjectProps) {
    const { lastModified, languagesUsed, ...project } = personalProject;
    return (
        <div className={styles.personalProject}>
            <Project project={project}/>
            <Skills skills={languagesUsed}/>
        </div>
    );
}