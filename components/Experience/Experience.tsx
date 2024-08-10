import Image from "next/image"
import Skills from "@/components/Skills/Skills";
import { ExperienceProps } from "@/types";
import styles from "./Experience.module.css";

function displayDate(date: Date) {
    return date.toLocaleDateString('en-GB', {year: 'numeric', month: 'long'})
}

export default function Experience({ experience }: ExperienceProps) {
    const { position, org, orgImageSrc, startDate, endDate, descriptions, skills, orgLinkedInUrl, orgHomePageUrl } = experience;
    let dateSpanText: string = displayDate(startDate);
    if (endDate && endDate > startDate) {
        dateSpanText += ` - ${displayDate(endDate)}`;
    } else if (!endDate) {
        dateSpanText += ` - Present`;
    }
    const orgUrl = orgLinkedInUrl || orgHomePageUrl;
    const orgElement = orgUrl ? <a href={orgUrl}>{org}</a> : org;
    return (
        <>
            <h3 className={styles.position}>
                {position} @ {orgElement}
            </h3>
            {orgImageSrc && <Image src={orgImageSrc} alt={`Logo of ${org}`} width={50/96*98} height={50} />}
            <p>
                {dateSpanText}
            </p>
            <ul className={styles.descriptions}>
                {descriptions.map((description, index) => <li key={index}>{description}</li>)}
            </ul>
            {skills && <Skills skills={skills}/>}
        </>
    )
}