import Image from "next/image"
import Experience from "@/components/Experience"
import { notableExperiences, educationalExperiences } from "@/data/experiences";
import ComponentList from "@/components/ComponentList";
import Skills from "@/components/Skills";

export default function IndexPage() {
  return (
    // TODO: link skills with certifications to their certifications
    <main>
      <h1>Welcome to my Portfolio Site!</h1>
      <section>
        <h2>About me...</h2>
        <p>
          My name is <strong>James Graca-Jones</strong> and I am a <strong>software developer</strong> living in <strong>London</strong>.
        </p>
        {/* TODO: decide which Image elements should be given the priority tag */}
        <Image src="/headshot.jpeg" alt="" width={50/96*98} height={50} priority/>
      </section>
      <section>
        <h2>Notable Experience...</h2>
        <ol>
          <ComponentList dataList={notableExperiences.map(experience => ({experience}))} ListedComponent={Experience}/>
        </ol>
      </section>
      <section>
        <h2>Education...</h2>
        <ol>
          <ComponentList dataList={educationalExperiences.map(experience => ({experience}))} ListedComponent={Experience}/>
        </ol>
      </section>
      <section>
        <h2>Further Knowledge and Skills...</h2>
        {/* TODO: link skills below to projects in which they're used */}
        <Skills skills={
          ['AWS Identity and Access Management', 'AWS Lambda', 'Amazon DynamoDB', 'Amazon API Gateway', 'AWS Amplify', 'Docker', 'Material-UI', 'Web Scraping (Puppeteer)', 'Data Structures & Algorithms', 'Operating Systems', 'Networking', 'System Design']
        }/>
      </section>
    </main>
  )
}
