import Image from "next/image"
import { ExperienceProps } from "@/types";

export default function Experience({ experience }: ExperienceProps) {
    const { position, org, orgSrc, startYear, endYear, description, skills, orgLinkedInUrl, orgHomePageUrl } = experience;
    let dateSpanText: string = String(startYear);
    if (!endYear) {
        dateSpanText += ` --`;
    } else if (endYear && endYear > startYear) {
        dateSpanText += ` -- ${endYear}`;
    }
    return (
        <div>
            <p>
                {position}
            </p>
            <p>
                {org}
            </p>
            {orgHomePageUrl && <p>
                <a href={orgHomePageUrl}>{orgHomePageUrl}</a>
            </p>}
            {orgLinkedInUrl && <p>
                LinkedIn: <a href={orgLinkedInUrl}>{orgLinkedInUrl}</a>
            </p>}
            {orgSrc && <Image src={orgSrc} alt='' width={50/96*98} height={50} />}
            <p>
                {dateSpanText}
            </p>
            <p>
                {description}
            </p>
            <p>
                {skills.join(', ')}
            </p>
        </div>
    )
}