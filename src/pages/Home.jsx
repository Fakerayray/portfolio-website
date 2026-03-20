import '../components/ui/Home.css';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/pic.jpg';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <div className="profile-area">
            <img src={profileImage} alt="Raymond" className="profile-pic" loading="lazy"/>
            <div className="intro-text">
              <p className="job-title">Associate Digital Specialist @ RedAlpha Cybersecurity</p>
              <p className="philosophy">"Passionate about deconstructing complex systems and understanding the 'why' behind architectural decisions."</p>
            </div>
          </div>

          <h1 className="glitch-text">
            Backend Focused. <br />
            <span>Secure by Design.</span> <br />
            Scalable by Default.
          </h1>

          <button className="learn-more-btn" onClick={() => navigate('/About')}>
            Learn More
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>

        <div className="hero-image">
          <img src="/src/assets/pcImg.png" alt="Workstation" className="main-pc-img" />
        </div>
      </section>
    </div>
  );
}

export default Home;