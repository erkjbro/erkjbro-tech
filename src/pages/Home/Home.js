
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
      Lately I have been using Digital Ocean to host my VMs, Google Firebase
      for web client hosting, MongoDB Atlas for a cloud DBaaS, GitHub for a code repo, and then just Namecheap
      for domains. The VMs simply use Nginx and PM2 for running Node apps.
    `
  },
  {
    id: 3,
    value: `
      However, I'm in the process of studying content relating to the AWS Certified Developer Associate Exam
      and becoming more familiar with their ecosystem. Also trying out Amplify for a Firebase substitute. Additionally
      I'm working with Redis a bit, spending time on headless browser testing, learning to utilize S3 for assets in a
      scalable way, and reviewing other "advanced" nodejs concepts.
    `
  },
  {
    id: 4,
    value: `
      My primary tools are Visual Studio Code, MongoDB Compass, Postman, and Docker Desktop.
      I like to use WSL2 w/ Ubuntu on Windows Terminal for my shell.
    `
  },
  {
    id: 5,
    value: `
      Some other apps I utilize include Jira with kanban boards, Confluence for project documentation,
      and Lucidchart for flowcharts. I haven't settled on a time tracking app yet.
    `
  },
  {
    id: 6,
    value: `
      I have a life outside of coding as well. Some of the things I enjoy include mountain biking,
      video games, a little exercise, and custom PCs.
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
        {PARAGRAPHS.map(p => <p key={p.id}>{p.value}</p>)}

        <p>
          To contact me regarding job opportunities or for networking, you can find me
          on <a href="https://https://www.linkedin.com/in/erkjbro/">LinkedIn</a>
          , <a href="https://www.upwork.com/freelancers/~01820d75b9551f9eea">Upwork</a>
          , <a href="https://github.com/erkjbro">GitHub</a>
          , <a href="https://twitter.com/erkjbro">Twitter</a>
          , or email me at <a href="mailto:erkjbro@erikjbrown.tech">erkjbro@erikjbrown.tech</a>
          .
        </p>

        <code>
          I need to make a portfolio page for projects and courses, but I'll share a couple
          course projects for reference. These links might break because I am migrating to
          AWS soon.

          <ul>
            <li>
              <a href="https://places.erkjbro.io">MERN Places</a>
              - Academind course: The MERN Fullstack Guide
            </li>
            <li>
              <a href="https://css.erkjbro.app">CSS Course Project</a>
              - Academind course: CSS - The Complete Guide
            </li>
            <li>
              <a href="https://burger.erkjbro.io">Burger Builder</a>
              - Academind course: React - The Complete Guide
            </li>
          </ul>
        </code>
      </div>
    </div>
  </>
);

export default Home;