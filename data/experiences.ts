import { Experience } from "@/types";

export const notableExperiences: Experience[] = [
    {
        position: 'Technical Consultant',
        org: 'WSD',
        startDate: new Date(2023, 8),
        endDate: new Date(2024, 7),
        descriptions: [
            'Programmed in PHP and JavaScript to automate the generation of legal documents for structured investment products for JP Morgan, Goldman Sachs, Bank of America, RBC, BBVA, RBI AG and Marex, collaborating with them in Jira and meetings.',
            'While trialing an in-house Node.js framework under tight deadlines, I used it to play a pivotal role in rapidly and successfully developing a demo product for Deutsche Bank.',
            'Assisted in engineering prompts to train a novel chatbot in structured investment products.'
        ],
        orgLinkedInUrl: 'https://www.linkedin.com/company/wsdgroup',
        orgHomePageUrl: 'https://www.wsd.com/',
    },
    {
        position: 'Full Stack Web Developer',
        org: 'tocco',
        startDate: new Date(2023, 7),
        endDate: new Date (2023, 7),
        descriptions: [
            'Used TypeScript at a pre-seed startup to help build an online marketplace for sustainable materials at tocco.earth.', // TODO: make tocco.earth into a link
            'Refactored a data scraping pipeline featuring Python, Beautiful Soup, the OpenAI API and a PostgreSQL database, using Supabase and SQL to redesign the database’s schema and Prisma to modify the API accordingly.',
            'Ideated on the product and wrote detailed documentation about it for onboarding future hires.'
        ],
        orgLinkedInUrl: 'https://www.linkedin.com/company/tocco/',
        orgHomePageUrl: 'https://tocco.earth/',

    },
    {
        position: 'Student and Open Source Contributor',
        org: 'The Odin Project',
        startDate: new Date(2022, 7),
        endDate: new Date(2023, 7),
        descriptions: [
            'Learned full-stack web development in the MERN tech stack using an open educational curriculum–see github.com/JamesGJ5 for 30 projects through which I consolidated my learning.',
            'Made multiple contributions to enhance the curriculum. Example involving binary search trees: github.com/TheOdinProject/curriculum/pull/25540.'
        ],
        skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript ES6+', 'HTML', 'CSS', 'Responsive Design', 'Accessibility', 'REST APIs', 'Jest', 'API Testing (SuperTest)', 'React Testing Library', 'Linux', 'Git', 'VS Code', 'Passport.js', 'PugJS', 'Babel.js', 'Webpack', 'Google Cloud Platform'],
        orgHomePageUrl: 'https://www.theodinproject.com/',
    },
];

export const educationalExperiences: Experience[] = [
    {
        position: 'MEng Materials Science Student',
        org: 'University of Oxford',
        startDate: new Date(2017, 9),
        endDate: new Date(2022, 6),
        descriptions: [
            'Built an ML pipeline with Git, Python, PyTorch, Linux, MPI, Matplotlib and an EfficientNet CNN for multi-output regression on microscopic images. Code: github.com/JamesGJ5/machine-learning-masters. Thesis: github.com/JamesGJ5/meng-thesis.',
            'Awarded student sponsorship by EDF Energy and a 2-year academic scholarship.'
        ],
    },
];