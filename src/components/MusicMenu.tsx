import React, { useState, useRef, useEffect } from 'react';
import { Music, X, Play, Pause, Volume2, Volume, VolumeX } from 'lucide-react';
import './MusicMenu.css';
import tracks from './musicTracks';


interface MusicMenuProps {
  playOnMount?: boolean;
  initialTrack?: number;
  initialVolume?: number;
}
const MusicMenu: React.FC<MusicMenuProps> = ({ playOnMount, initialTrack = 0, initialVolume = 0.8 }) => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [current, setCurrent] = useState(initialTrack);
  const [playing, setPlaying] = useState(false);
  const [trackTime, setTrackTime] = useState({ current: 0, duration: 0 });
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(initialVolume);

  useEffect(() => {
    if (playOnMount) {
      if (audioRef.current) {
        const playPromise = audioRef.current.play();
        if (playPromise) {
          playPromise.then(() => setPlaying(true)).catch(() => {});
        } else {
          setPlaying(true);
        }
      }
    }
  }, [playOnMount]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const update = () => setTrackTime({ current: audio.currentTime, duration: audio.duration || 0 });
    audio.addEventListener('timeupdate', update);
    audio.addEventListener('loadedmetadata', update);
    return () => {
      audio.removeEventListener('timeupdate', update);
      audio.removeEventListener('loadedmetadata', update);
    };
  }, [current]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const handleTrackSelect = (idx: number) => {
    setCurrent(idx);
    setPlaying(true);
    setTimeout(() => {
      if (audioRef.current) audioRef.current.play();
    }, 100);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Number(e.target.value);
    setTrackTime(t => ({ ...t, current: Number(e.target.value) }));
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  const formatTime = (s: number) => {
    if (isNaN(s) || !isFinite(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const handleOpen = () => {
    setOpen(true);
    setClosing(false);
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 300); 
  };

  return (
    <div className={`music-menu${open ? ' open' : ''}`}>  
      {!open && (
        <button className="music-menu-toggle" onClick={handleOpen} aria-label="Open music menu">
          <Music />
        </button>
      )}
      <audio
        ref={audioRef}
        src={tracks[current].src}
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        loop
        style={{ display: 'none' }}
      />
      {(open || closing) && (
        <div className={`music-menu-panel${closing ? ' closing' : ''}`}>
          <button className="music-menu-close" onClick={handleClose} aria-label="Close music menu">
            <X />
          </button>
          <div className="music-menu-header">
            <Volume2 size={20} />
            <span>Music Player</span>
          </div>
          <ul className="music-menu-list">
            {tracks.map((track, idx) => (
              <li key={track.title} className={idx === current ? 'active' : ''}>
                <button onClick={() => handleTrackSelect(idx)}>
                  <span className="music-menu-track-number">{idx + 1}.</span>
                  {track.title}
                  {idx === current && playing && <span className="music-menu-playing">●</span>}
                </button>
              </li>
            ))}
          </ul>
          <div className="music-menu-controls">
            <button onClick={handlePlayPause} className="music-menu-play">
              {playing ? <Pause /> : <Play />}
            </button>
            <span className="music-menu-current">{tracks[current].title}</span>
          </div>
          <div className="music-menu-progress">
            <span className="music-menu-time">{formatTime(trackTime.current)}</span>
            <input
              type="range"
              min={0}
              max={trackTime.duration || 0}
              value={trackTime.current}
              onChange={handleSeek}
              step={0.01}
              className="music-menu-slider"
              aria-label="Seek music"
            />
            <span className="music-menu-time">{formatTime(trackTime.duration)}</span>
          </div>
          <div className="music-menu-volume">
            <button className="music-menu-volume-icon" tabIndex={-1} aria-label="Volume">
              {volume === 0 ? <VolumeX size={18}/> : volume < 0.5 ? <Volume size={18}/> : <Volume2 size={18}/>}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolume}
              className="music-menu-volume-slider"
              aria-label="Music volume"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicMenu; 