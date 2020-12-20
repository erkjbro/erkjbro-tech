
import ejbOrangeLogo from '../../assets/images/ejb-orange-logo-v1.png';
import './Home.scss';

const PARAGRAPHS = [
  {
    id: 1,
    value: `
      Hey there! My name is Erik. I am a full-stack web developer that is passionate about the MERN stack.
    `
  },
  {
    id: 2,
    value: `
      Lately I have been using Digital Ocean to host my VMs, Google Firebase
      for web client hosting, MongoDB Atlas for a cloud DBaaS, GitHub for a code repo, and just Namecheap
      for domains. The VM simply uses Nginx and PM2 for running the Node apps.
    `
  },
  {
    id: 3,
    value: `
      I have yet to decided between AWS or DO for an S3 solution for images. I also have been working
      with Docker Swarm nodes hosted on DO, but I need more Docker experience before changing my workflow.
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
      For projects I have been using Jira with kanban boards, Confluence for project documentation,
      and Lucidchart for charts. I haven't settled on a time tracking app yet.
    `
  },
  {
    id: 6,
    value: `
      I have a life outside of coding as well. Some of the things
      I spend time on include mountain biking, video games, a little weight lifting, and custom PCs.
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
          If you're interested in contacting me about freelance opportunities or wish to network, you can find me
          on <a href="https://https://www.linkedin.com/in/erkjbro/">LinkedIn</a>
          , <a href="https://www.upwork.com/freelancers/~01820d75b9551f9eea">Upwork</a>
          , <a href="https://github.com/erkjbro">GitHub</a>
          , or email me at <a href="mailto:erkjbro@erikjbrown.tech">erkjbro@erikjbrown.tech</a>
        </p>
      </div>
    </div>
  </>
);

export default Home;