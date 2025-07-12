import React, { useState } from 'react';
import { ExternalLink, Github, Play, Eye } from 'lucide-react';
import Modal from '../../components/Modal/Modal';
import type { Game } from '../../types';
import './Games.css';
import dungeon1 from '../../assets/Games/DungeonHunters/1.png';
import dungeon2 from '../../assets/Games/DungeonHunters/2.png';
import dungeon3 from '../../assets/Games/DungeonHunters/3.png';
import dungeon4 from '../../assets/Games/DungeonHunters/4.png';
import TTT1 from '../../assets/Games/TicTacToe/1.png';
import TTT2 from '../../assets/Games/TicTacToe/2.png';
import TTT3 from '../../assets/Games/TicTacToe/3.png';
import snake1 from '../../assets/Games/SnakeGame/1.png';
import snake2 from '../../assets/Games/SnakeGame/2.png';
import snake3 from '../../assets/Games/SnakeGame/3.png';
import simon1 from '../../assets/Games/SimonSays/1.png';
import simon2 from '../../assets/Games/SimonSays/2.png';
import simon3 from '../../assets/Games/SimonSays/3.png';
import dandelion1 from '../../assets/Games/Dandelions/1.png';
import dandelion2 from '../../assets/Games/Dandelions/2.png';
import dandelion3 from '../../assets/Games/Dandelions/3.png';

const Games: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [selectedScreenshot, setSelectedScreenshot] = useState<number>(0);

  const games: Game[] = [
    {
      id: '1',
      title: 'Dungeon Hunter',
      description: 'Developed a web-based role-playing game that blends classic dungeon exploration with math-based combat and puzzles.',
      longDescription: 'Developed a web-based role-playing game that blends classic dungeon exploration with math-based combat and puzzles. Players navigate a grid-based dungeon, battle monsters using arithmetic-powered attacks, and solve math equations to progress through doors and earn points. Designed with responsive mobile UI, immersive audio, strategic combat mechanics, and modular puzzle logic, the game offers an engaging, educational experience.',
      technologies: ['Javascript', 'HTML5', 'CSS3'],
      imageUrl: dungeon1,
      screenshots: [
        dungeon1, dungeon2, dungeon3, dungeon4
      ],
      playUrl: 'https://dungeon-hunters-maths-b62p-git-main-lancerhawks-projects.vercel.app',
      githubUrl: 'https://github.com/Lancerhawk/Dungeon_Hunters_Maths',
      genre: 'rpg'
    },
    {
      id: '2',
      title: 'TicTacToe: Disappearing Moves Edition',
      description: 'A strategic twist on the classic Tic-Tac-Toe game where every fifth move makes the oldest active mark vanish from the board.',
      longDescription: 'A strategic twist on the classic Tic-Tac-Toe game where every fifth move makes the oldest active mark vanish from the board. Designed to break the stalemate patterns of traditional gameplay, this version introduces dynamic tension, evolving strategy, and fast-paced decision-making. Players must adapt quickly as their earlier moves can vanish, opening the board back up for game-changing plays.',
      technologies: ['Typescript', 'Vite', 'Tailwind'],
      imageUrl: TTT1,
      screenshots: [
        TTT1, TTT2, TTT3
      ],
      playUrl: 'https://tic-tac-toe-dme-git-main-lancerhawks-projects.vercel.app',
      githubUrl: 'https://github.com/Lancerhawk/TicTacToe-DME/tree/main',
      genre: 'puzzle'
    },
    {
      id: '3',
      title: 'Snake Game',
      description: 'Recreated the nostalgic Snake game with modern web technologies, featuring smooth movement, dynamic scoring, etc',
      longDescription: 'Recreated the nostalgic Snake game with modern web technologies, featuring smooth movement, dynamic scoring, game-over animations, and responsive design. Designed for a pixel-perfect retro aesthetic while offering a fast, lightweight, and mobile-friendly gaming experience all playable directly in the browser with no dependencies.',
      technologies: ['JavaScript', 'Yarn', 'Pixel Art'],
      imageUrl: snake1,
      screenshots: [
        snake1, snake2, snake3
      ],
      playUrl: 'https://retro-snake-game-git-main-lancerhawks-projects.vercel.app',
      githubUrl: 'https://github.com/Lancerhawk/Retro_Snake_Game',
      genre: 'arcade'
    },
    {
      id: '4',
      title: 'Simon Says Game',
      description: 'Developed a fast-paced memory game inspired by the classic "Simon Says" challenge.',
      longDescription: 'Developed a fast-paced memory game inspired by the classic "Simon Says" challenge. Players must memorize and replicate an increasingly long sequence of flashing colors and sounds. With each round, the difficulty scales up, testing reaction time, pattern recognition, and short-term memory. Designed with smooth animations, responsive feedback, and sound integration to create an engaging and interactive experience.',
      technologies: ['Typescript', 'Vite', 'Tailwind'],
      imageUrl: simon1,
      screenshots: [
        simon1, simon2, simon3
      ],
      playUrl: 'https://simon-says-game-git-main-lancerhawks-projects.vercel.app',
      githubUrl: 'https://github.com/Lancerhawk/Simon-Says_Game',
      genre: 'puzzle'
    },
    {
      id: '5',
      title: 'Dande-Lions',
      description: 'Designed and developed a soothing arcade-style browser game where players guide dandelion seeds through dynamic wind currents to reach safe ground.',
      longDescription: 'Designed and developed a soothing arcade-style browser game where players guide dandelion seeds through dynamic wind currents to reach safe ground. Inspired by nature, the game combines fluid movement mechanics, obstacle avoidance, and subtle atmospheric design to create a relaxing and visually appealing experience. Built for both desktop and mobile with smooth controls and responsive visuals.',
      technologies: ['Unity', 'C#'],
      imageUrl: dandelion1,
      screenshots: [
        dandelion1, dandelion2, dandelion3
      ],
      playUrl: 'https://lancerhawk.itch.io/dande-lions',
      githubUrl: 'https://github.com/Lancerhawk/Dande-Lions-Game',
      genre: 'adventure'
    }
  ];

  const genres = [
    { value: 'all', label: 'All Games' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'puzzle', label: 'Puzzle' },
    { value: 'arcade', label: 'Arcade' },
    { value: 'rpg', label: 'RPG' },
  ];

  const filteredGames = filter === 'all' 
    ? games 
    : games.filter(game => game.genre === filter);

  // Reset selectedScreenshot when opening a new game
  React.useEffect(() => {
    setSelectedScreenshot(0);
  }, [selectedGame]);

  return (
    <div className="games">
      <div className="container">
        <section className="games-header section">
          <h1 className="section-title">My Games</h1>
          <p className="games-subtitle">
            Dive into my collection of interactive games spanning multiple genres and platforms. 
            Each game showcases different aspects of game development and creative storytelling.
          </p>
          
          <div className="games-filters">
            {genres.map((genre) => (
              <button
                key={genre.value}
                className={`filter-btn ${filter === genre.value ? 'active' : ''}`}
                onClick={() => setFilter(genre.value)}
              >
                {genre.label}
              </button>
            ))}
          </div>
        </section>

        <section className="games-grid-section">
          <div className="games-grid">
            {filteredGames.map((game, index) => (
              <div 
                key={game.id} 
                className="game-card card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                  <div className="game-genre">{game.genre}</div>

                <div className="game-image">
                  <img src={game.imageUrl} alt={game.title} />
                </div>
                <div className="game-content">
                  <h3 className="game-title">{game.title}</h3>
                  <p className="game-description">{game.description}</p>
                  <div className="game-tech">
                    {game.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    {game.technologies.length > 3 && (
                      <span className="tech-more">+{game.technologies.length - 3}</span>
                    )}
                  </div>
                  <div className="game-actions">
                    <button
                      className="btn btn-primary"
                      onClick={() => setSelectedGame(game)}
                    >
                      <Eye /> Details
                    </button>
                    <a
                      href={game.playUrl}
                      className="btn btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play /> Play Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Modal
        isOpen={!!selectedGame}
        onClose={() => setSelectedGame(null)}
        title={selectedGame?.title}
      >
        {selectedGame && (
          <div className="game-modal">
            <div className="modal-gallery">
              <div className="gallery-main">
                <img 
                  src={selectedGame.screenshots[selectedScreenshot]} 
                  alt={selectedGame.title}
                />
              </div>
              <div className="gallery-thumbs">
                {selectedGame.screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`${selectedGame.title} screenshot ${index + 1}`}
                    className={index === selectedScreenshot ? 'active' : ''}
                    onClick={() => setSelectedScreenshot(index)}
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              </div>
            </div>
            
            <div className="modal-info">
              <div className="game-genre-badge">{selectedGame.genre}</div>
              <p className="modal-description">{selectedGame.longDescription}</p>
              
              <div className="modal-tech">
                <h4>Technologies Used:</h4>
                <div className="tech-list">
                  {selectedGame.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="modal-actions">
                <a
                  href={selectedGame.playUrl}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play /> Play Game
                </a>
                <a
                  href={selectedGame.githubUrl}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github /> View Source Code
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Games;