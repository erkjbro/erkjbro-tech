
import ejbOrangeLogo from '../../assets/images/ejb-orange-logo-v1.png';
import './Home.scss';

const Home = () => (
  <div className="Home">
    <div className="Header">
      <img src={ejbOrangeLogo} alt="Erik J Brown" />
    </div>

    <h1>Erik J Brown Tech LLC</h1>

    <p>
      I'm a freelance web app developer that mainly works with the <b>MERN</b> stack. I deploy
      web clients using Firebase, and I have been working on migrating my apps to a Docker Swarm
      droplet cluster that's hosted on Digital Ocean.
    </p>

    <p>
      My primary tools are <b>Visual Studio Code</b>, MongoDB Compass, & Postman.
      I use WSL2 w/ Ubuntu for my shell.
    </p>

    <p>
      I have a life outside of coding as well. Some of the things
      I spend time on include mountain biking, bowling, video games, & PCs.
    </p>
  </div>
);

export default Home;