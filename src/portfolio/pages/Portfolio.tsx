// import { ImagePreview } from '../components';

import { Div } from 'shared/uiKit';

const Portfolio = () => (
  <Div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Div>
      <h1>Erik J Brown Tech LLC</h1>
    </Div>
    <Div
      sx={{
        maxWidth: '800px',
        margin: '0 5rem',
        display: 'flex',
        flexDirection: 'column',
        'p': { textAlign: 'left' },
      }}
    >
      <p>
        Welcome to my site! I'm in the process of rebuilding it with TypeScript, MUI, Storybook, etc.
        Since you're here already, I'll provide some basic info about me.
      </p>

      <p>
        I'm a software engineer! My current role involves eCommerce platforms.
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
        by these ids and ETL that data into the new system.
      </p>

      <h3>Contact Info</h3>
      <ul>
        <li><a href="mailto:erkjbro@erikjbrown.tech">E-Mail</a></li>
        <li><a href="https://www.linkedin.com/in/erkjbro/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/erkjbro" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://twitter.com/erkjbro" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://www.upwork.com/fl/erkjbro" target="_blank" rel="noopener noreferrer">Upwork</a></li>
      </ul>
    </Div>
  </Div>
);

export default Portfolio;
