import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Gamepad2, Award, Mail, Download } from 'lucide-react';
import './Home.css';
import photo from '../../assets/profile/photo.jpg';

const roles = [
  'Full Stack Developer',
  'Software Engineer',
  'Game Creator',
];

const TYPING_SPEED = 70;
const DELETING_SPEED = 40;
const DELAY_BETWEEN = 1200;

const Home: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentRole = roles[roleIndex];
    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setTyping(false), DELAY_BETWEEN);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length - 1));
        }, DELETING_SPEED);
      } else {
        setTyping(true);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-bg">
          <div className="blob blob1"></div>
          <div className="blob blob2"></div>
          <div className="blob blob3"></div>
          <div className="blob blob4"></div>
          <div className="blob blob5"></div>
          <div className="blob-dark blob-dark1"></div>
          <div className="blob-dark blob-dark2"></div>
          <div className="blob-dark blob-dark3"></div>
          <div className="blob-dark blob-dark4"></div>
          <div className="blob-dark blob-dark5"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text fade-in">
              <h1 className="hero-title">
                <span className="mono">Hello, I'm</span>
                <span className="hero-name glow-text">Arin Jain</span>
                <span className="hero-role">{displayed}<span className="typing-cursor">|</span></span>
              </h1>
              <p className="hero-description">
                Crafting immersive digital experiences through code and creativity. 
                Specialized in web development and game design with a passion for 
                cutting-edge technologies.
              </p>
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">
                  View My Work <ArrowRight />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get In Touch <Mail />
                </Link>
                <a 
                  href="/ArinJainFullstack.pdf" 
                  download="ArinJainFullstack.pdf"
                  className="btn btn-accent btn-resume"
                >
                  <Download /> Download Resume
                </a>
              </div>
            </div>
            <div className="hero-visual fade-in">
              <div className="hero-image-card">
                <img 
                  src={photo} 
                  alt="Arin Jain portrait" 
                  className="hero-image"
                />
                <div className="hero-stats">
                  <div className="stat">
                    <span className="stat-number">40+</span>
                    <span className="stat-label">Repo</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">2+</span>
                    <span className="stat-label">Years</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">20+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features section">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="features-grid grid grid-3">
            <div className="feature-card card fade-in">
              <div className="feature-icon">
                <Code />
              </div>
              <h3>Web Development</h3>
              <p>Building responsive, modern web applications with React, TypeScript, and cutting-edge technologies.</p>
              <Link to="/projects" className="feature-link">
                View Projects <ArrowRight />
              </Link>
            </div>
            <div className="feature-card card fade-in">
              <div className="feature-icon">
                <Gamepad2 />
              </div>
              <h3>Game Development</h3>
              <p>Creating engaging games with Unity, Unreal Engine, and web technologies for multiple platforms.</p>
              <Link to="/games" className="feature-link">
                Play Games <ArrowRight />
              </Link>
            </div>
            <div className="feature-card card fade-in">
              <div className="feature-icon">
                <Award />
              </div>
              <h3>Professional Growth</h3>
              <p>Continuously learning and earning certifications to stay ahead in the ever-evolving tech landscape.</p>
              <Link to="/certifications" className="feature-link">
                View Credentials <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work Together?</h2>
            <p>Let's create something amazing. I'm always excited to take on new challenges and collaborate on innovative projects.</p>
            <Link to="/contact" className="btn btn-primary">
              Start a Project <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;