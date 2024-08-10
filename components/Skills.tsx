import { SkillsProps } from "@/types";
import styles from "./Skills.module.css";

export default function Skills({ skills }: SkillsProps) {
    return (
        <ul className={styles.skillList}>
            {skills.map((skill, index) => <li className={styles.skill} key={index}>
                {skill}{index < skills.length - 1 && '|'}
            </li>)}
        </ul>
    );
}