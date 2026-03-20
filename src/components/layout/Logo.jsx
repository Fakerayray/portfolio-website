import { useState } from 'react';
import '../ui/Logo.css';
import oiiaiImage from '../../assets/oiiaicat.jpg';

function Logo() {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleLogoClick = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      // Reset the animation state after it finishes (0.8s matches your CSS)
      setTimeout(() => setIsSpinning(false), 800);
    }
  };

  return (
    <div className="logo-container">
      <img
        src={oiiaiImage} // Ensure this exists in public/oiiaicat/
        alt="Oiiai Cat Logo"
        className={`oiiai-cat-logo ${isSpinning ? 'spin-active' : ''}`}
        onClick={handleLogoClick}
      />
    </div>
  );
}

export default Logo;