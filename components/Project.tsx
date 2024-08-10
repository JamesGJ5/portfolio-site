import { ProjectProps } from "@/types"
import Image from "next/image";
import styles from "./Project.module.css";

function makeRepoURL(repoName: string): string {
    return `https://github.com/${repoName}`;
}

export default function Project({ project }: ProjectProps) {
    const { repoName, repoDescripion, deploymentURL, projectImageSrc } = project;
    const repoURL = makeRepoURL(repoName);
    return (
        <>
            <h3>
                <a aria-label='Link to code (opens in new tab)' href={repoURL} target='_blank'><strong>{repoName}</strong></a>
            </h3>
            {repoDescripion && <p>{repoDescripion}</p>}
            {deploymentURL && <p>
                Try at <a aria-label='Link to deployment (opens in new tab)' href={deploymentURL} target='_blank'>{deploymentURL}</a>
            </p>}
            {projectImageSrc && <Image src={projectImageSrc} alt={`Image of Project in ${repoName}`} width={50/96*98} height={50} />}
        </>
    );
}
