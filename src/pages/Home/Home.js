
import ejbOrangeLogo from '../../assets/images/ejb-orange-logo-v1.png';
import './Home.scss';

const PARAGRAPHS = [
  {
    id: 0,
    value: `
      Greetings! My name is <strong>Erik</strong>. I am a <em>Full-Stack Software Developer</em>.
      I mainly do work around web applications and a JavaScript stack (MERN).
    `
  },
  {
    id: 1,
    value: `
      At the frontend, I mostly build web apps using React with Redux or Context,
      and I prefer working with SCSS. Then I manage these SPAs using AWS Amplify since it's
      both powerful and straightforward to utilize. It also enables me to quickly build a backend
      for prototypes and small projects through the Admin UI.
    `
  },
  {
    id: 2,
    value: `
      On the backend, I lean towards NodeJS/Express and MongoDB, typically as a REST API with
      an MVC architecture. These environments then get managed using AWS Elastic Beanstalk,
      the EB CLI, and MongoDB Atlas for the DBaaS.
    `
  },
  {
    id: 3,
    value: `
      I began working with TypeScript in April of 2021 as well, and now I'm making use of it for
      full-stack development. If interested, you can view an example of my workflow on GitHub. I
      had a take-home project to build an admin panel in one week, and so I created the EDU
      Platform app and deployed it in the same manner as described above.
    `
  },
  {
    id: 44,
    value: `
      Some of this could, should, and will evolve with time. I'm researching microservice architecture
      using this same tech and reviewing AWS SAM as a lower-cost and cleaner solution for backend
      development and deployment.
    `
  },
  {
    id: 55,
    value: `
      I also find it crucial to align expectations by creating project documentation and tracking tasks
      with a Kanban board. With Confluence, I use a template to put together some product requirements,
      which serve as a source of truth for a project.
    `
  },
  {
    id: 6,
    value: `
      My primary tools are Visual Studio Code, MongoDB Compass, Sqlectron, Postman, and Docker Desktop.
      I use WSL2 with Ubuntu on Windows Terminal for my shell.
    `
  },
  {
    id: 7,
    value: `
      Additional software used in my process includes Jira with kanban boards, Confluence for project
      documentation, Lucidchart for flowcharts, and Everhour for tracking both time and budget.
    `
  },
  {
    id: 8,
    value: `
      I have a life outside of coding as well. Some of the things I enjoy include mountain biking,
      video games, a little exercise, and custom PCs.
    `
  },
  {
    id: 9,
    value: `
      To contact me regarding job opportunities or for networking, you can find me
      on <a href="https://www.linkedin.com/in/erkjbro/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      , <a href="https://www.upwork.com/fl/erkjbro" target="_blank" rel="noopener noreferrer">Upwork</a>
      , <a href="https://github.com/erkjbro" target="_blank" rel="noopener noreferrer">GitHub</a>
      , <a href="https://twitter.com/erkjbro" target="_blank" rel="noopener noreferrer">Twitter</a>
      , or email me at <a href="mailto:erkjbro@erikjbrown.tech">erkjbro@erikjbrown.tech</a>.
    `
  }
];

const TempFooter = () => (
  <code>
    I still need to make a portfolio page for projects and courses, but here
    are a few for reference. These links might break because I am migrating to AWS.

    <ul>
      <li>
        <a
          href="https://mern-places.erkjbro.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          MERN Places
        </a>
        &nbsp;- Academind course: The MERN Fullstack Guide
      </li>
      <li>
        <a
          href="https://uhost.erkjbro.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          uHost
        </a>
        &nbsp;- Academind course: CSS - The Complete Guide
      </li>
      <li>
        <a
          href="https://burger.erkjbro.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Burger Builder
        </a>
        &nbsp;- Academind course: React - The Complete Guide
      </li>
      <li>
        <a
          href="https://superm.erkjbro.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          SuperM
        </a>
        &nbsp;- Learn React - Guide by Jad Joubran
      </li>
      <br />
      <li>
        <a
          href="https://github.com/erkjbro/verbose-octo-blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          VOB
        </a>
        &nbsp;- An open-source blogging app that I'm developing.
      </li>
      <li>
        <a
          href="https://github.com/erkjbro/edu-platform"
          target="_blank"
          rel="noopener noreferrer"
        >
          EDU Platform
        </a>
        &nbsp;- A take-home project. MERN &amp; TypeScript.
      </li>
    </ul>
  </code>
)


const Home = () => (
  <>
    <div className="Header">
      <img src={ejbOrangeLogo} alt="ejb logo" />
    </div>
    <div className="Home">
      <h1>Erik J Brown Tech LLC</h1>
      <div className="Home__Content">
        {PARAGRAPHS.map(p => <p key={p.id} dangerouslySetInnerHTML={{ __html: p.value }} />)}
        <TempFooter />
      </div>
    </div>
  </>
);

export default Home;