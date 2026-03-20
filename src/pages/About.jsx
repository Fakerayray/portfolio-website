import '../components/ui/About.css';
import workImage from '../assets/work.jpg';
import hikeImage from '../assets/hike.jpg';
import rabbitImage from '../assets/rabbit.jpg';

function About() {
  return (
    <div className="about-container">
      {/* Introduction Section */}
      <section className="about-intro">
        <h1 className="page-title">About Me</h1>
        <p className="lead-text">
          I'm a proactive Computer Science working professional with a passion for building production-ready solutions to complex problems. Currently, I am an Associate Digital Specialist at Red Alpha Cybersecurity, deployed to ST Engineering. I specialize in bridging the gap between rigorous, low-level system architecture and modern, scalable web experiences.
        </p>
      </section>

      {/* Photo Gallery */}
      <section className="about-photos">
        <div className="photo-placeholder">
          <img src={rabbitImage} alt="rabbit" className='rabbit-image' loading="lazy"/>
        </div>
        <div className="photo-placeholder">
          <img src={workImage} alt="work" className='work-image' loading="lazy"/>
        </div>
        <div className="photo-placeholder">
          <img src={hikeImage} alt="hike" className='hike-image' loading="lazy"/>
        </div>
      </section>

      {/* Skills Section */}
      <section className="about-skills">
        <h2>Technical Arsenal</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages & Core</h3>
            <div className="skill-pills">
              <span>C</span>
              <span>C++</span>
              <span>Python</span>
              <span>C#</span>
              <span>JavaScript</span>
              <span>SQL</span>
              <span>Swift / Kotlin</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Frameworks & Tools</h3>
            <div className="skill-pills">
              <span>React</span>
              <span>React Native</span>
              <span>Node.js</span>
              <span>ASP.NET</span>
              <span>Flask</span>
              <span>Git</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Specialized Tech</h3>
            <div className="skill-pills">
              <span>AI/ML Systems</span>
              <span>JUCE (Audio)</span>
              <span>IoT / Arduino</span>
              <span>WebSockets</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline">
        <h2>Experience & Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Associate Digital Specialist</h3>
              <span className="timeline-date">Feb 2026 - Present</span>
              <p>Red Alpha Cybersecurity</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Bachelor of Computer Science</h3>
              <span className="timeline-date">Graduated Dec 2025</span>
              <p>University of London (SIMGE)</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Diploma in Information Technology</h3>
              <span className="timeline-date">Graduated Mar 2021</span>
              <p>Nanyang Polytechnic</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Web Developer & IT Support Intern</h3>
              <span className="timeline-date">Sep 2020 – Nov 2020</span>
              <p>CFM Holdings Pte Ltd: Optimized corporate WordPress sites and grew e-commerce sales on Shopee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Projects Section */}
      <section className="about-projects-brief">
        <h2>Key Technical Projects</h2>
        <div className="projects-summary">
          <p><strong>AI Agent Development:</strong> Architected a 5-metric weighted Fitness Function for evolutionary training.</p>
          <p><strong>OTTO-DJ (C++/JUCE):</strong> Developed a dual-deck virtual DJ application featuring real-time audio processing.</p>
          <p><strong>Khanfused (Python/React):</strong> Engineered a full-stack social deduction game using React, WebSockets and SQLite.</p>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="about-personal">
        <h2>Beyond the Screen</h2>
        <p>
          When I'm not coding, I would go for runs, cycling or swimming. 
        </p>
        <p>
          I'm also a huge anime fan, and a proud fan of THE "legendary" cat.
        </p>
      </section>
    </div>
  );
}

export default About;