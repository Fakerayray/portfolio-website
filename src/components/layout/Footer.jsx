import '/src/components/ui/Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();

  // Scroll to top logic
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Navigation */}
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Raymond Singlaire</p>
          <a href="mailto:raymond.singlaire@redalphacyber.com" className="email-link">
            raymond.singlaire@redalphacyber.com
          </a>
        </div>

        {/* Social & Scroll to Top */}
        <div className="footer-section">
          <h4>Social</h4>
          <div className="social-wrapper">
            <div className="social-icons">
              <a href="https://github.com/Fakerayray" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/raymond-singlaire-912105185/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            
            {/* Scroll Button */}
            <button 
              className="scroll-top-btn" 
              onClick={scrollToTop} 
              aria-label="Scroll to top"
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;