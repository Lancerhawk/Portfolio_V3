import React from 'react';
import { Code, Database, PenTool as Tool, Star } from 'lucide-react';
import type { Skill } from '../../types';
import './About.css';

const About: React.FC = () => {
  const skills: Skill[] = [


    //Languages
    { name: 'Javascript', level: 90, category: 'languages' },
    { name: 'C & C++ (DSA)', level: 80, category: 'languages' },
    { name: 'C#', level: 80, category: 'languages' },
    { name: 'Kotlin', level: 80, category: 'languages' },
    { name: 'Java', level: 60, category: 'languages' },

    //Softwares
    { name: 'Asprite', level: 90, category: 'softwares' },
    { name: 'Blender', level: 80, category: 'softwares' },
    { name: 'Adobe Photoshop', level: 80, category: 'softwares' },
    { name: 'Unity Game Engine', level: 90, category: 'softwares' },
    { name: 'Godot Game Engine', level: 70, category: 'softwares' },
    { name: 'Figma', level: 90, category: 'softwares' },

    // Frontend
    { name: 'React', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'HTML/CSS', level: 90, category: 'frontend' },
    { name: 'Tailwind', level: 80, category: 'frontend' },
    { name: 'Next.js', level: 85, category: 'frontend' },
    // { name: 'Nest.js', level: 85, category: 'frontend' },

    // Backend
    { name: 'Node.js', level: 90, category: 'backend' },
    { name: 'Python', level: 85, category: 'backend' },
    { name: 'Express.js', level: 85, category: 'backend' },
    { name: 'PostgreSQL', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 75, category: 'backend' },
    { name: 'Nest.js', level: 85, category: 'backend' },

    // Tools
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Docker', level: 80, category: 'tools' },
    { name: 'AWS', level: 75, category: 'tools' },
    { name: 'Webpack', level: 75, category: 'tools' },

  ];

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Code />;
      case 'backend':
        return <Database />;
      case 'tools':
        return <Tool />;
      case 'softwares':
        return <Star />;
      case 'languages':
        return <Star />;
      default:
        return <Star />;
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'Frontend Development';
      case 'backend':
        return 'Backend Development';
      case 'tools':
        return 'Tools & Technologies';
      case 'languages':
        return 'Languages';
      case 'softwares':
        return 'Softwares';
      default:
        return 'Other Skills';
    }
  };

  return (
    <div className="about">
      <div className="container">
        <section className="about-hero section">
          <div className="about-content">
            <div className="about-text fade-in">
              <h1 className="section-title">About Me</h1>
              <div className="about-description">
                <p>
                  I'm a passionate full-stack developer and game creator with over 2 years of experience
                  in building innovative digital solutions. My journey began with a fascination for both
                  web technologies and game development, leading me to master a diverse set of skills
                  across multiple platforms and frameworks.
                </p>
                <p>
                  I specialize in creating immersive user experiences, whether it's through responsive
                  web applications or engaging interactive games. My approach combines technical expertise
                  with creative problem-solving to deliver products that not only function flawlessly
                  but also captivate users.
                </p>
                <p>
                  When I'm not coding, you can find me exploring the latest gaming trends, contributing
                  to open-source projects, or experimenting with emerging technologies like VR/AR and
                  blockchain development.
                </p>
              </div>
            </div>
            <div className="about-visual fade-in">
              <div className="about-card">
                <h3>Quick Facts</h3>
                <div className="facts-list">
                  <div className="fact">
                    <span className="fact-label">Experience:</span>
                    <span className="fact-value">2+ Years</span>
                  </div>
                  <div className="fact">
                    <span className="fact-label">Projects Completed:</span>
                    <span className="fact-value">20+</span>
                  </div>
                  <div className="fact">
                    <span className="fact-label">Games Developed:</span>
                    <span className="fact-value">4+</span>
                  </div>
                  <div className="fact">
                    <span className="fact-label">Certifications:</span>
                    <span className="fact-value">25</span>
                  </div>
                  <div className="fact">
                    <span className="fact-label">Location:</span>
                    <span className="fact-value">Jabalpur, MP</span>
                  </div>
                  <div className="fact">
                    <span className="fact-label">Languages:</span>
                    <span className="fact-value">English, Hindi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section section">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-categories">
            {['languages', 'softwares', 'frontend', 'backend', 'tools'].map((category) => (
              <div key={category} className="skill-category card fade-in">
                <div className="category-header">
                  <div className="category-icon">
                    {getCategoryIcon(category)}
                  </div>
                  <h3>{getCategoryTitle(category)}</h3>
                </div>
                <div className="skills-list">
                  {getSkillsByCategory(category).map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-fill"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="experience-section section">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">

            
            <div className="timeline-item fade-in">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>President</h3>
                <div className="timeline-meta">
                  <span className="company">Coding Era!</span>
                  <span className="period">11/2024 - Present</span>
                </div>
                <p>
                  Founded Coding Era! , a city-level tech community
                  and startup aimed at fostering coding, innovation,
                  and peer learning.<br/>
                  <a href="https://www.codingera.site" target='_blank' style={{color:'green', textDecoration:'none'}}>www.codingera.site</a>
                </p>
                <div className="timeline-tech">
                  <span>React.js</span>
                  <span>JavaScript</span>
                  <span>SCSS</span>
                  <span>REST APIs</span>
                </div>
              </div>
            </div>

            <div className="timeline-item fade-in">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Treasurer</h3>
                <div className="timeline-meta">
                  <span className="company">IEEE Student Branch</span>
                  <span className="period">11/2024 - Present</span>
                </div>
                <p>
                Elected Treasurer of the IEEE Student Branch, responsible for managing budgets, organizing technical events, and ensuring smooth financial operations for workshops, seminars, and student activities.
                </p>
                <div className="timeline-tech">
                  <span>Funds Management</span>
                  <span>Technical Support</span>
                  <span>Event Management</span>
                  <span>Support Management</span>
                </div>
              </div>
            </div>

            
            <div className="timeline-item fade-in">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Javascript Developer</h3>
                <div className="timeline-meta">
                  <span className="company">Zoblik Internationals</span>
                  <span className="period">04/2024 - 06/2024</span>
                </div>
                <p>
                  <ul>
                    <li>Worked on multiple real-time client-facing web applications using React.js and Node.js.</li>
                    <li>Improved performance and UI responsiveness across key components by refactoring code
                      and optimizing state management.</li>
                    <li>Collaborated in Agile sprints with Git-based workflows and tools like Trello for task
                      management</li>
                    <li>Gained hands-on experience with full-stack project pipelines from planning to
                      deployment.
                    </li>
                  </ul>
                </p>
                <div className="timeline-tech">
                  <span>Javascript</span>
                  <span>ReactJS</span>
                  <span>NodeJS</span>
                  <span>ExpressJS</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>

            <div className="timeline-item fade-in">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>PHP Developer</h3>
                <div className="timeline-meta">
                  <span className="company">Atoms Group</span>
                  <span className="period">05/2023 - 06/2023</span>
                </div>
                <p>
                  <ul>
                    <li>Developed backend modules for internal tools and client platforms using PHP and MySQL.</li>
                    <li>Designed and optimized database queries and schemas, reducing query times by 30%.</li>
                    <li>Learned fundamentals of collaborative development using version control (Git) and task
                      management tools.</li>
                    <li>Implemented a modular RESTful API structure enabling seamless integration with frontend systems, improving development efficiency and reducing maintenance overhead.
                    </li>
                  </ul>
                </p>
                <div className="timeline-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Javascript</span>
                  <span>PHP</span>
                  <span>RESTful APIs</span>
                </div>
              </div>
            </div>


          </div>
        </section>
      </div>
    </div>
  );
};

export default About;