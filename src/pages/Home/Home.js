
import ejbOrangeLogo from '../../assets/images/ejb-orange-logo-v1.png';
import './Home.scss';

const PARAGRAPHS = [
  {
    id: 0,
    value: `
      Hey there! My name is <strong>Erik</strong>. I am a full-stack software developer that
      is focused on the <em>MERN</em> stack.
    `
  },
  {
    id: 1,
    value: `
      What do I mean by <strong>MERN</strong> stack? I mean <em>React</em> for building web clients,
      <em>Node.js</em> with <em>Express.js</em> for servers &amp; backend APIs,
      and <em>MongoDB</em> with <i>Mongoose</i> for databases.
    `
  },
  {
    id: 2,
    value: `
      My work is focused on leveraging <strong>AWS</strong> services. I use <em>AWS Amplify</em>
      to manage my frontend environments, and I include the <em>Admin UI</em> if I'm using it to
      build a small project. This helps me save time and reduce costs to both myself and my clients.
    `
  },
  {
    id: 3,
    value: `
      Lately I have been working on ways to automate deployments for backend services as well,
      but I haven't settled on a solution. For now, I have been using the <em>eb cli</em> to
      manage my backend deployments and environments.
    `
  },
  {
    id: 4,
    value: `
      My primary <strong>tools</strong> are <em>Visual Studio Code</em>, <em>MongoDB Compass</em>,
      <em>Sqlectron</em>, <em>Postman</em>, and <em>Docker Desktop</em>. I use WSL2 with
      Ubuntu on Windows Terminal for my shell. <em>Vim</em> all the way.
    `
  },
  {
    id: 5,
    value: `
      Additional <strong>software</strong> used in my process includes <em>Jira</em> with kanban boards,
      <em>Confluence</em> for project documentation, <em>Lucidchart</em> for flowcharts, and
      <em>Everhour</em> for tracking both time and budget.
    `
  },
  {
    id: 6,
    value: `
      I have a life outside of coding as well. Some of the things I enjoy include mountain biking,
      video games, a little exercise, and custom PCs.
    `
  },
  {
    id: 7,
    value: `
      To contact me regarding job opportunities or for networking, you can find me
      on <a href="https://www.linkedin.com/in/erkjbro/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      , <a href="https://www.upwork.com/freelancers/~01820d75b9551f9eea" target="_blank" rel="noopener noreferrer">Upwork</a>
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
          href="https://burger.erkjbro.io"
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