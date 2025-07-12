import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Games from './pages/Games/Games';
import Certifications from './pages/Certifications/Certifications';
import Contact from './pages/Contact/Contact';
import './styles/globals.css';
import { ArrowUp } from 'lucide-react';
import MusicMenu from './components/MusicMenu';
import tracks from './components/musicTracks';
import { Play, Pause, Volume, Volume2, VolumeX } from 'lucide-react';
import clsx from 'clsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function ScrollUpButton() {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      className="scroll-up-btn"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <ArrowUp size={28} />
    </button>
  );
}

function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const lines = [
    'Initializing terminal...',
    'Resolving modules...',
    'Compiling source files...',
    'Building project...',
    'Downloading Coffee...',
  ];
  const [currentLine, setCurrentLine] = useState(0);
  const [typed, setTyped] = useState('');
  const [finished, setFinished] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Typing effect for each line (slower, stable interval)
  useEffect(() => {
    if (currentLine < lines.length) {
      let char = 0;
      setTyped('');
      const type = () => {
        if (char <= lines[currentLine].length) {
          setTyped(lines[currentLine].slice(0, char));
          char++;
          setTimeout(type, 55);
        } else {
          setTimeout(() => setCurrentLine(l => l + 1), 700);
        }
      };
      type();
    } else {
      setTimeout(() => setFinished(true), 1200);
    }
    // eslint-disable-next-line
  }, [currentLine]);

  // Progress bar percent
  const percent = Math.min((currentLine / lines.length) * 100, 100);

  // Fade out and call onFinish
  useEffect(() => {
    if (finished) {
      setFadeOut(true);
      setTimeout(onFinish, 900);
    }
  }, [finished, onFinish]);

  return (
    <div className={`loading-screen${fadeOut ? ' loading-fade-out' : ''}`}>
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-body">
          <pre style={{margin: 0, minHeight: 180}}>
            {lines.slice(0, currentLine).map((l, i) => (
              <div key={i}>{l}</div>
            ))}
            {currentLine < lines.length && <span>{typed}<span className="terminal-cursor">█</span></span>}
            {currentLine === lines.length && <span>Loading complete! <span className="terminal-cursor">█</span></span>}
          </pre>
        </div>
        <div className="terminal-progress-bar">
          <div className="terminal-progress" style={{width: percent + '%'}} />
        </div>
      </div>
    </div>
  );
}

// Music consent screen
const MusicConsentScreen: React.FC<{
  onChoice: (playMusic: boolean, trackIdx: number, volume: number) => void
}> = ({ onChoice }) => {
  const [selected, setSelected] = React.useState<number | null>(null);
  const [previewIdx, setPreviewIdx] = React.useState<number | null>(null);
  const [previewing, setPreviewing] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [fading, setFading] = React.useState(false);
  const [volume, setVolume] = React.useState(0.8);
  const [showWarning, setShowWarning] = React.useState(false);

  const handlePreview = (idx: number) => {
    if (previewIdx === idx && previewing) {
      audioRef.current?.pause();
      setPreviewing(false);
    } else {
      setPreviewIdx(idx);
      setPreviewing(true);
      setTimeout(() => audioRef.current?.play(), 50);
    }
  };
  React.useEffect(() => {
    if (!previewing) audioRef.current?.pause();
  }, [previewing]);
  React.useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const handleStart = (play: boolean) => {
    if (selected === null && play) {
      setShowWarning(true);
      return;
    }
    setFading(true);
    setTimeout(() => {
      onChoice(play, selected ?? 0, volume);
    }, 900);
  };

  return (
    <div className={`music-consent-overlay${fading ? ' fade' : ''}`}>
      <div className="music-consent-modal">
        <div className="music-consent-content">
          <h2><span className="music-consent-gradient">Would you like to start background music?</span></h2>
          <div className="music-consent-tracks">
            {tracks.map((track, idx) => (
              <div
                key={track.title}
                className={`music-consent-track${selected === idx ? ' selected' : ''}`}
                onClick={() => { setSelected(idx); setShowWarning(false); }}
              >
                <span className="music-consent-track-title">{track.title}</span>
                <button
                  className="music-consent-preview"
                  onClick={e => { e.stopPropagation(); handlePreview(idx); }}
                  aria-label={previewIdx === idx && previewing ? 'Pause preview' : 'Play preview'}
                >
                  {previewIdx === idx && previewing ? <Pause /> : <Play />}
                </button>
              </div>
            ))}
            <audio
              ref={audioRef}
              src={previewIdx !== null ? tracks[previewIdx].src : undefined}
              onEnded={() => setPreviewing(false)}
              onPause={() => setPreviewing(false)}
              style={{ display: 'none' }}
            />
          </div>
          <div className="music-consent-volume">
            <button className="music-consent-volume-icon" tabIndex={-1} aria-label="Volume">
              {volume === 0 ? <VolumeX size={18}/> : volume < 0.5 ? <Volume size={18}/> : <Volume2 size={18}/>}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={e => setVolume(Number(e.target.value))}
              className="music-consent-volume-slider"
              aria-label="Music volume"
            />
          </div>
          {showWarning && (
            <div className="music-consent-warning">Please choose a music track.</div>
          )}
          <div className="music-consent-actions">
            <button
              className="btn btn-primary"
              onClick={() => handleStart(true)}
              disabled={selected === null}
            >
              Start Music
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleStart(false)}
            >
              Continue Without Music
            </button>
          </div>
          <p className="music-consent-note">You can always control music from the menu at the bottom right.</p>
        </div>
      </div>
      {fading && <div className="music-consent-fade" />}
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [showApp, setShowApp] = useState(false);
  const [musicConsent, setMusicConsent] = useState<null | { play: boolean, track: number, volume: number }>(null);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => setShowApp(true), 400);
    }
  }, [loading]);

  if (loading)
    return <LoadingScreen onFinish={() => setLoading(false)} />;

  if (musicConsent === null) {
    return <MusicConsentScreen onChoice={(play, track, volume) => setMusicConsent({ play, track, volume })} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <ScrollUpButton />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/games" element={<Games />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <MusicMenu playOnMount={musicConsent.play} initialTrack={musicConsent.track} initialVolume={musicConsent.volume} />
      </div>
    </Router>
  );
}

export default App;