import Image from "next/image"
import Experience from "@/components/Experience/Experience"
import { notableExperiences, educationalExperiences } from "@/data/experiences";
import ComponentList from "@/components/ComponentList/ComponentList";
import Skills from "@/components/Skills/Skills";
import styles from "./page.module.css";

export default function IndexPage() {
  return (
    <main>
      <section className={styles.aboutMeSection}>
        <div className={styles.aboutMeDescription}>
          <h2 className={styles.aboutMeSectionHeading}>About me...</h2>
          <p>
          An Oxford MEng graduate with a deep interest in technology and finance. I have a year of work experience in providing financial legal software to the largest investment banks.
          </p>
        </div>
        <Image className={styles.headshot} src="/headshot.jpeg" alt="Head Shot of James Graca-Jones" width={200/96*98} height={200} priority/> {/* TODO: discover why height is required given that it's being overridden */}
      </section>
      <section>
        <h2 className={styles.sectionHeading}>Notable Experience...</h2>
        <ol>
          <ComponentList dataList={notableExperiences.map(experience => ({experience}))} ListedComponent={Experience}/>
        </ol>
      </section>
      <section>
        <h2 className={styles.sectionHeading}>Education...</h2>
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
