import { useState, useEffect, useRef } from 'react';
import '../components/ui/Game.css';
import OIIAI_IMG from '../assets/oiiaicat.jpg'

const Game = () => {
  const [activeSquare, setActiveSquare] = useState(null);
  const [score, setScore] = useState(0);
  // Initialize highScore from localStorage if it exists
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('oiiai_highscore');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [lives, setLives] = useState(3);
  const [gameState, setGameState] = useState('waiting');
  // Ref tracks the timer without causing re-renders
  const timerRef = useRef(null); 

  const clearCurrentTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  // Function to handle High Score updates
  const updateHighScore = (currentScore) => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
      localStorage.setItem('oiiai_highscore', currentScore.toString());
    }
  };

 const spawnOiiai = () => {
    if (gameState !== 'playing') return;
    clearCurrentTimer();
    
    // Select a random square (0-3)
    const randomIndex = Math.floor(Math.random() * 4);
    setActiveSquare(randomIndex);

    // DYNAMIC DIFFICULTY LOGIC:
    // Start at 1000ms. Subtract 50ms for every point scored. 
    // Set a "floor" (minimum speed) of 350ms so it doesn't become impossible.
    const baseSpeed = 1500;
    const speedReduction = score * 20; 
    const currentInterval = Math.max(350, baseSpeed - speedReduction);

    // If user doesn't click within the dynamic interval, it's a miss
    timerRef.current = setTimeout(() => {
      handleMiss();
    }, currentInterval); 
  };

  const handleMiss = () => {
    setLives((prev) => {
      const newLives = prev - 1;
      if (newLives <= 0) {
        endGame();
        return 0;
      }
      spawnOiiai();
      return newLives;
    });
  };

  const handleWhack = (index) => {
    // Only register a hit if the game is active and the correct square is clicked
    if (gameState === 'playing' && index === activeSquare) {
      clearCurrentTimer();
      
      const newScore = score + 1;
      setScore(newScore);
      
      // Check if this whacks the high score
      updateHighScore(newScore);
      
      setActiveSquare(null);
      // Brief delay before next spawn for better game feel
      setTimeout(spawnOiiai, 100); 
    }
  };

  const startGame = () => {
    clearCurrentTimer();
    setScore(0); // Reset current session score
    setLives(3);
    setGameState('playing');
  };

  const endGame = () => {
    setGameState('lost');
    updateHighScore(score); // Final check on death
    setActiveSquare(null);
    clearCurrentTimer();
  };

  useEffect(() => {
    if (gameState === 'playing') {
      spawnOiiai();
    }
    return () => clearCurrentTimer();
  }, [gameState]);

  return (
    <div className="game-page">
      <h1 className="game-title">WHACK A <span>OIIAI</span></h1>
      
      <div className="game-layout">
        <div className="game-grid">
          {[0, 1, 2, 3].map((index) => (
            <div 
              key={index} 
              className={`square ${activeSquare === index ? 'active' : ''}`}
              onClick={() => handleWhack(index)}
            >
              {activeSquare === index && (
                <img src={OIIAI_IMG} alt="OIIAI" className="oiiai-sprite" style={{ pointerEvents: 'none' }}/>
              )}
            </div>
          ))}
          
          {(gameState === 'lost' || gameState === 'waiting') && (
            <div className="game-overlay">
              {gameState === 'lost' && (
                <>
                  <h2 className="lose-text">YOU LOSE!</h2>
                  <p className="final-score">High Score: {highScore}</p>
                </>
              )}
              <button className="restart-btn" onClick={startGame}>
                {gameState === 'lost' ? 'Restart Game' : 'Start Game'}
              </button>
            </div>
          )}
        </div>

        <div className="game-stats">
          <div className="stat-card">
            <span className="label">SCORE</span>
            <span className="value">{score}</span>
          </div>
          <div className="stat-card">
            <span className="label">LIVES</span>
            <span className="value heart">{"❤️".repeat(lives) || "💀"}</span>
          </div>
          <div className="stat-card high-score">
            <span className="label">BEST</span>
            <span className="value">{highScore}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;