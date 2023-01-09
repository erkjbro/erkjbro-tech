import { Projects } from '@erkjbro-tech/projects';
import styles from './portfolio.module.css';

/* eslint-disable-next-line */
export interface PortfolioProps {}

export function Portfolio(props: PortfolioProps) {
  return (
    <div className={styles['container']}>
      <div>
        <h1>Erik J Brown Tech LLC</h1>
      </div>
      <div className={styles['main']}>
        <p>
          Welcome to my site! I'm rebuilding it with TypeScript, MUI, Storybook, &amp; etc.
          Since you're here already, I'll provide some basic info about me.
        </p>

        <p>
          I'm a software engineer! My current role involves e-commerce platforms. I'm known for working on UIs and ETLs.
        </p>

        <h3>Languages</h3>
        <p>
          JavaScript, TypeScript, &amp; Python
        </p>

        <h3>Frontend Tech</h3>
        <p>
          I work with React. Usually I deploy these apps with Amplify, but we're using SAM at my workplace.
          Also, we work with Next.js, Storybook, Eslint, TypeScript, Prettier, Cypress, etc. No Redux because
          it's 2022 and no longer necessary. Also we're using Contentful for static content. It's cool.
        </p>

        <h3>Backend Tech</h3>
        <p>
          I've built some monolithic Node.js apps as REST APIs, but lately I'm working with Python for a
          SAM-based ETL that takes care of data migration. It extracts data ids from the old platform
          and loads it into an SQS queue. From there, concurrent lambdas pick up the messages to query data
          by these ids and ETL the full data into the new system.
        </p>

        <h3>Where to Find Me</h3>
        <ul>
          <li><a href="mailto:erkjbro@erikjbrown.tech">E-Mail</a></li>
          <li><a href="https://www.linkedin.com/in/erkjbro/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/erkjbro" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://twitter.com/erkjbro" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.upwork.com/fl/erkjbro" target="_blank" rel="noopener noreferrer">Upwork</a></li>
        </ul>
      </div>
      <div className={styles['projects']}>
        <Projects />
      </div>
    </div>
  );
}

export default Portfolio;
