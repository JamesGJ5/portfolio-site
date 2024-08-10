import React from "react";
import Project from "@/components/Project/Project";
import Skills from "@/components/Skills/Skills";
import { OpenSourceProjectProps } from "@/types";

function makeContributionElement(type: string, url: string, index: number): React.ReactElement {
    return <li key={index}><p>{type}: <a aria-label={`Link to ${type} (opens in new tab)`} href={url} target='_blank'>{url}</a></p></li>;
}

export default function OpenSourceProject({ openSourceProject }: OpenSourceProjectProps) {
    const {contributions, languagesUsed, ...project} = openSourceProject;
    return (
        <>
            <Project project={project}/>
            <Skills skills={languagesUsed}/>
            <ul>
                {Object.entries(contributions).map(([type, url], index) => makeContributionElement(type, url, index))}
            </ul>
        </>
    );
}
