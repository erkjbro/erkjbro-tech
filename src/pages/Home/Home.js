
import ejbOrangeLogo from '../../assets/images/ejb-orange-logo-v1.png';
import './Home.scss';

const Home = () => (
  <>
    <div className="Header">
      <img src={ejbOrangeLogo} alt="Erik J Brown" />
    </div>
    <div className="Home">
      <h1>Erik J Brown Tech LLC</h1>

      <p>
        I'm a full-stack web app developer who's passionate about the <b>MERN</b> stack. This involves
        MongoDB, Express.js, React, and Node.js.
      </p>

      <p>
        Lately I have been using Digital Ocean to host my droplets (ec2 instances), Google Firebase
        for web client hosting, MongoDB Atlas for a cloud DBaaS, GitHub for a code repo, and then Namecheap
        for domains. The droplet simply uses Nginx and PM2 for running the Node app.
      </p>

      <p>
        I haven't decided between AWS or DO for an S3 solution to host images. I also have been working with a
        Docker Swarm of three droplets on DO, but I'd like to improve my Docker understanding further before
        containerizing my apps.
      </p>

      <p>
        My primary tools are <b>Visual Studio Code</b>, MongoDB Compass, Postman, & Docker Desktop.
        I like to use WSL2 w/ Ubuntu on Windows Terminal for my shell.
      </p>

      <p>
        For project management I have been using Jira with kanban boards and also trying Confluence for project documentation.
        I haven't settled on a time tracking app yet, and just use a pen and a time tracking journal like a savage.
      </p>

      <p>
        I have a life outside of coding as well. Some of the things
        I spend time on include mountain biking, bowling, video games, RC cars, & PCs.
      </p>

      <p>
        If you're interested in contacting me about freelance opportunities or wish to network,
        you can find me on LinkedIn, Upwork, GitHub, or email me
        at <a href="mailto:erkjbro@erikjbrown.tech">erkjbro@erikjbrown.tech</a>
      </p>
    </div>
  </>
);

export default Home;