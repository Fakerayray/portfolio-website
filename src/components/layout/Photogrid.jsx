import { useState, useMemo } from 'react';
import '../ui/Photogrid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

// Assets
import coinImage from '../../assets/coin.webp';
import KhafusedImage from '../../assets/sus.jpg';
import ArduinoImage from '../../assets/arduino.jpg';
import OtodeckImage from '../../assets/Otodeck.jpg';
import SnookerImage from '../../assets/snooker.jpg';
import detectImage from '../../assets/face.jpg';

// Crewmate Assets
import Red from '../../assets/Red.webp';
import Blue from '../../assets/Blue.webp';
import Green from '../../assets/Green.webp';
import Orange from '../../assets/Orange.webp';
import Black from '../../assets/Black.webp';
import Pink from '../../assets/Pink.webp';

function Photogrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [showStream, setShowStream] = useState(false);

  const crewmates = [Red, Blue, Green, Orange, Black, Pink];

  const handleImageClick = (projectId) => {
    if (projectId === 1) {
      setShowStream(true);
      // Animation lasts 3 seconds
      setTimeout(() => {
        setShowStream(false);
      }, 3000);
    }
  };

  const renderCrewmateStream = () => {
    const stream = [];
    // Creating 50 crewmates for a "Live Stream" effect
    for (let i = 0; i < 50; i++) {
      const randomCrew = crewmates[Math.floor(Math.random() * crewmates.length)];
      const randomX = Math.floor(Math.random() * 300) - 150; 
      const randomRotate = Math.floor(Math.random() * 80) - 40;
      const delay = Math.random() * 2; // Staggered entry over 2 seconds

      stream.push(
        <div 
          key={i} 
          className="floating-crewmate" 
          style={{ 
            left: `${Math.random() * 90 + 5}%`,
            animationDelay: `${delay}s`,
            '--random-x': `${randomX}px`,
            '--random-rotate': `${randomRotate}deg`
          }}
        >
          <img src={randomCrew} className="crewmate-stream-img" alt="crewmate" loading="lazy"/>
        </div>
      );
    }
    return stream;
  };

  const getSkillClass = (skill) => {
    const s = skill.toLowerCase();
    if (['c', 'c++', 'c#', 'sql', 'algorithms', 'juce (audio)', 'iot / arduino'].includes(s)) return 'pill-systems';
    if (['react', 'javascript', 'vite', 'css3', 'html5', 'websockets'].includes(s)) return 'pill-web';
    if (['python', 'sqlite', 'node.js', 'flask', 'asp.net', 'git', 'aws', 'ai/ml systems'].includes(s)) return 'pill-logic';
    return 'pill-default';
  };

  const projects = [
    {
      id: 1,
      image: KhafusedImage,
      title: "Khanfused Social Deduction Game",
      description: "KHANFUSED is a social deduction game for 6-18 players, similar to Werewolf or Mafia, where social interaction and bluffing are key.",
      technologies: ["react", "python", "javascript", "html5", "css3", "websockets"],
      link: "https://github.com/Fakerayray/khanfused-main"
    },
    {
      id: 2,
      image: ArduinoImage,
      title: "IoT Home Security & Access Control System",
      description: "A two-node, ESP8266-based home security system featuring real-time monitoring, intrusion detection, and RFID access control managed via a web dashboard.",
      technologies: ["C++", "iot / arduino"],
      link: "https://github.com/Fakerayray/IoT-Home-Security---Access-Control-Systemy"
    },
    {
      id: 3,
      image: OtodeckImage,
      title: "OTTO-DJ: A C++ JUCE DJ Application",
      description: "OTTO-DJ is a dual-deck virtual DJ application built in C++ using the JUCE framework. It allows users to load audio tracks, control playback, mix between two decks, and visualize the audio waveform.",
      technologies: ["juce (audio)", "c++"],
      link: "https://github.com/Fakerayray/OTODECK"
    },
    {
      id: 4,
      image: coinImage,
      title: "Cryptocurrency Trading Simulator",
      description: "Created a command-line cryptocurrency trading application written in C++. It simulates a real-world trading environment by reading historical market data from CSV files. .",
      technologies: ["C++", "algorithms"],
      link: "https://github.com/Fakerayray/Cryptocurrency_Trading_Simulator"
    },
    {
      id: 5,
      image: SnookerImage,
      title: "p5.js Physics Snooker Application",
      description: "This project is a web-based snooker game built using p5.js for visuals and the Matter.js physics engine for realistic ball interactions. The game offers multiple modes and unique gameplay mechanics that challenge the player.",
      technologies: ["javascript", "algorithms"],
      link: "https://github.com/Fakerayray/p5.js-Physics-Game"
    },
    {
      id: 6,
      image: detectImage,
      title: "p5.js Face Detection Drawing Application",
      description: "This is a web-based creative coding project that uses your webcam to perform real-time face detection. It draws rectangles over any faces it detects in the video feed.",
      technologies: ["javascript", "ai/ml systems"],
      link: "https://github.com/Fakerayray/p5.js-Face-Detection-Drawing-Application"
    }
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.technologies.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = filterCategory === "All" || 
        project.technologies.some(tech => getSkillClass(tech) === filterCategory);
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, filterCategory]);

  return (
    <div className="projects-wrapper">
      {/* Animation Overlay */}
      {showStream && (
        <div className="live-stream-overlay">
          {renderCrewmateStream()}
        </div>
      )}

      <div className="projects-header">
        <h1 className="projects-title">Featured Projects</h1>
        <div className="filter-controls">
          <div className="search-input-wrapper">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search projects..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="project-search-bar"
            />
          </div>
          <div className="select-wrapper">
            <FontAwesomeIcon icon={faFilter} className="filter-icon" />
            <select 
              value={filterCategory} 
              onChange={(e) => setFilterCategory(e.target.value)}
              className="category-select"
            >
              <option value="All">All Categories</option>
              <option value="pill-systems">Systems / Low-Level</option>
              <option value="pill-web">Web / Frontend</option>
              <option value="pill-logic">Logic / Backend</option>
            </select>
          </div>
        </div>
      </div>

      <div className="photo-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="photo-item">
              <div 
                className="image-wrapper" 
                onClick={() => handleImageClick(project.id)}
                style={{ cursor: project.id === 1 ? 'pointer' : 'default' }}
              >
                <img src={project.image} alt={project.title} className="photo-img" loading="lazy"/>
              </div>
              <div className="photo-content">
                <div className="title-row">
                  <h3>{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noreferrer" className="github-link">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
                <p className="photo-description">{project.description}</p>
                <div className="tech-pills">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={`tech-pill ${getSkillClass(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No projects match your search.</p>
        )}
      </div>
    </div>
  );
}

export default Photogrid;