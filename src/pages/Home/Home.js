
import ejbOrangeLogo from '../../assets/images/ejb-orange-logo-v1.png';
import './Home.scss';

const PARAGRAPHS = [
  {
    id: 0,
    value: `
      Hey there! My name is Erik. I am a full-stack web developer that is passionate about the MERN stack.
    `
  },
  {
    id: 1,
    value: `
      What do I mean by the "MERN" stack? I mean React.js for building web clients, Node.js and Express.js for
      servers or backend APIs, and MongoDB with the Mongoose ODM for a database. For a better breakdown of tech
      details, please visit the tech page.
    `
  },
  {
    id: 2,
    value: `
      My work is done on <b>AWS</b>. Currently I am using AWS Amplify to manage my frontend environments. I'm
      also testing Elastic Beanstalk as a solution for apps with servers. Have yet to decided if I like using
      CodeStar or if I'd prefer to use the <b>eb cli</b> along with CodePipeline for automated deployments.
      I am looking at SAM and ways to deploy containers for lambdas.
    `
  },
  {
    id: 4,
    value: `
      My primary tools are <b>Visual Studio Code</b>, MongoDB Compass, Postman, and Docker Desktop.
      I like to use WSL2 w/ Ubuntu on Windows Terminal for my shell.
    `
  },
  {
    id: 5,
    value: `
      Other apps I utilize include Jira with kanban boards, Confluence for project documentation,
      Lucidchart for flowcharts, and Everhour for time tracking and budgeting.
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
      on <a href="https://www.linkedin.com/in/erkjbro/">LinkedIn</a>
      , <a href="https://www.upwork.com/freelancers/~01820d75b9551f9eea">Upwork</a>
      , <a href="https://github.com/erkjbro">GitHub</a>
      , <a href="https://twitter.com/erkjbro">Twitter</a>
      , or email me at <a href="mailto:erkjbro@erikjbrown.tech">erkjbro@erikjbrown.tech</a>.
    `
  }
];


const Home = () => (
  <>
    <div className="Header">
      <img src={ejbOrangeLogo} alt="ejb logo" />
    </div>
    <div className="Home">
      <h1>Erik J Brown Tech LLC</h1>

      <div className="Home__Content">
        {PARAGRAPHS.map(p => <p key={p.id} dangerouslySetInnerHTML={{ __html: p.value }} />)}

        <code>
          I need to make a portfolio page for projects and courses, but I'll share a couple
          course projects for reference. These links might break because I am migrating to
          AWS.

          <ul>
            <li>
              <a href="https://mern-places.erkjbro.com">MERN Places</a>
              - Academind course: The MERN Fullstack Guide
            </li>
            <li>
              <a href="https://uhost.erkjbro.com">uHost</a>
              - Academind course: CSS - The Complete Guide
            </li>
            <li>
              <a href="https://burger.erkjbro.io">Burger Builder</a>
              - Academind course: React - The Complete Guide
            </li>
            <li>
              <a href="https://superm.erkjbro.com">SuperM</a>
              - Learn React - Guide by Jad Joubran
            </li>
          </ul>
        </code>
      </div>
    </div>
  </>
);

export default Home;