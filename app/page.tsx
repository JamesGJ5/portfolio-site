import Image from "next/image"
import Experience from "@/components/Experience/Experience"
import { notableExperiences, educationalExperiences } from "@/data/experiences";
import ComponentList from "@/components/ComponentList/ComponentList";
import Skills from "@/components/Skills/Skills";

export default function IndexPage() {
  return (
    <main>
      <h1>Welcome!</h1>
      <section>
        <h2>About me...</h2>
        <p>
        An Oxford MEng graduate with a deep interest in technology and finance. I have a year of work experience in providing financial legal software to the largest investment banks.
        </p>
        <Image src="/headshot.jpeg" alt="Head Shot of James Graca-Jones" width={50/96*98} height={50} priority/>
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
        <h2>More Skills...</h2>
        <Skills skills={
          ['AWS Identity and Access Management', 'AWS Lambda', 'Amazon DynamoDB', 'Amazon API Gateway', 'AWS Amplify', 'Docker', 'Material-UI', 'Web Scraping (Puppeteer)', 'Data Structures & Algorithms']
        }/>
      </section>
    </main>
  )
}
