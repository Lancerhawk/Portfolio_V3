import React from 'react';
import { ExternalLink, Award, Calendar, Star } from 'lucide-react';
import type { Certification } from '../../types';
import './Certifications.css';
import ultronHackathonImg from '../../assets/Certifications_Images/UltronHackathon/Untitled design (3).png';
import sih2024Img from '../../assets/Certifications_Images/SIH2024/SIH 2024.jpg';
import progJsImg from '../../assets/Certifications_Images/Programming-with-JavaScript/Programming with JavaScript_page-0001.jpg';
import nodejsWebinarImg from '../../assets/Certifications_Images/NodeJS-webinar/NodeJS webinar_page-0001.png';
import mlTrainingImg from '../../assets/Certifications_Images/Machine Learning Training/Acmegrade_page-0001.jpg';
import jsEss2Img from '../../assets/Certifications_Images/Javascript-Essentials-2/Javascript Essentials 2_page-0001.jpg';
import jsEss1Img from '../../assets/Certifications_Images/JavaScript-Essentials-1/JavaScript Essentials 1_page-0001.jpg';
import istdImg from '../../assets/Certifications_Images/ISTDHackathon/ISTD.jpg';
import investRiskImg from '../../assets/Certifications_Images/Investiment-Risk-Management/Investiment Risk Management_page-0001.jpg';
import pktTracerImg from '../../assets/Certifications_Images/Introduction-to-Packet-Tracer/Introduction to Packet Tracer_page-0001.jpg';
import feDevImg from '../../assets/Certifications_Images/Introduction-to-Front-End-Development/Introduction to Front-End Development_page-0001.jpg';
import cybersecImg from '../../assets/Certifications_Images/Introduction-to-Cybersecurity/Introduction to Cybersecurity_page-0001.jpg';
import internImg from '../../assets/Certifications_Images/Intern/certi.jpg';
import inspironImg from '../../assets/Certifications_Images/Inpiron/Inspiron.jpg';
import ieeeImg from '../../assets/Certifications_Images/IEEEMemberCertificate-1-1/Ieee.jpg';
import ibmImg from '../../assets/Certifications_Images/IBM/IBMSKILLBUILD.jpg';
import hackjmiImg from '../../assets/Certifications_Images/HackJMI/Untitled design.png';
import googleCyberImg from '../../assets/Certifications_Images/Google-CyberSecurity-Professional-certificate/Google CyberSecurity Professional certificate_page-0001.jpg';
import gfgImg from '../../assets/Certifications_Images/GFG-FullstackdeveloperBootcamp/GFG FullstackdeveloperBootcamp_page-0001.jpg';
import fortinetTechImg from '../../assets/Certifications_Images/Fortinet/FCF-TechnicalIntroductionToCyberSecurity1.0_page-0001.jpg';
import fortinetThreatImg from '../../assets/Certifications_Images/Fortinet/FCF-IntroductionToTheThreatLandscape2.0_page-0001.jpg';
import fortinetGateImg from '../../assets/Certifications_Images/Fortinet/FCA-FortiGate7.4Operator_page-0001.jpg';
import fortinetStartImg from '../../assets/Certifications_Images/Fortinet/FCF-GettingStartedInCyberSecurity2.0_page-0001.jpg';
import eduskillsImg from '../../assets/Certifications_Images/ArinJainEduSkills/eduskill.png';
import aiHealthImg from '../../assets/Certifications_Images/AIforHealthCare/AI for HealthCare.jpg';
import wehackImg from '../../assets/Certifications_Images/Wehack/image.png';
import versionControlImg from '../../assets/Certifications_Images/Version Control_page-0001.jpg';
import jsBeginnersImg from '../../assets/Certifications_Images/JavaScript for Beginners_page-0001.jpg';
import progJsRootImg from '../../assets/Certifications_Images/Programming with JavaScript_page-0001.jpg';
import htmlImg from '../../assets/Certifications_Images/Introduction to HTML_page-0001.jpg';
import excelImg from '../../assets/Certifications_Images/Introduction to Microsoft Excel_page-0001.jpg';
import cyberEssentialsImg from '../../assets/Certifications_Images/Cybersecurity Essentials badge_pages-to-jpg-0001.jpg';
import govCertImg from '../../assets/Certifications_Images/Gov certification (1)_pages-to-jpg-0001.jpg';
import AchievementsCarousel from '../../components/AchievementsCarousel';

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 'auto-1',
      title: 'SIH 2024',
      issuer: 'Smart India Hackathon',
      date: '',
      description: 'Recognized for creative solutions and technical excellence at the Smart India Hackathon 2024, contributing to impactful real-world projects.',
      imageUrl: sih2024Img,
      credentialUrl: '',
      skills: ['Hackathon', 'Innovation', 'Software Development', 'Collaboration'],
      category: 'hackathon',
    },
    {
      id: 'auto-2',
      title: 'Ultron Hackathon',
      issuer: 'Ultron',
      date: '',
      description: 'Awarded for outstanding performance and innovation at the Ultron Hackathon, demonstrating advanced teamwork, coding, and problem-solving skills in a high-pressure environment.',
      imageUrl: ultronHackathonImg,
      credentialUrl: '',
      skills: ['Hackathon', 'Teamwork', 'Innovation', 'Problem Solving', 'Coding'],
      category: 'hackathon',
    },
    {
      id: 'auto-3',
      title: 'Programming with JavaScript',
      issuer: 'Course Provider',
      date: '',
      description: 'Completed a comprehensive course on JavaScript programming, mastering core concepts, ES6+, and building interactive web applications.',
      imageUrl: progJsImg,
      credentialUrl: '',
      skills: ['JavaScript', 'Web Development', 'ES6', 'DOM Manipulation'],
      category: 'course',
    },
    {
      id: 'auto-4',
      title: 'NodeJS Webinar',
      issuer: 'Webinar Host',
      date: '',
      description: 'Participated in a hands-on NodeJS webinar, learning about backend development, REST APIs, and real-time applications.',
      imageUrl: nodejsWebinarImg,
      credentialUrl: '',
      skills: ['NodeJS', 'Backend', 'APIs', 'JavaScript'],
      category: 'course',
    },
    {
      id: 'auto-5',
      title: 'Machine Learning Training',
      issuer: 'Acmegrade',
      date: '',
      description: 'Completed a practical training in Machine Learning, covering supervised/unsupervised learning, model evaluation, and Python-based ML libraries.',
      imageUrl: mlTrainingImg,
      credentialUrl: '',
      skills: ['Machine Learning', 'Python', 'Data Science', 'Model Evaluation'],
      category: 'training',
    },
    {
      id: 'auto-6',
      title: 'Javascript Essentials 2',
      issuer: 'Cisco Networking Academy',
      date: '',
      description: 'Earned the Javascript Essentials 2 badge, demonstrating proficiency in advanced JavaScript concepts and application development.',
      imageUrl: jsEss2Img,
      credentialUrl: '',
      skills: ['JavaScript', 'Functions', 'Objects', 'Web Apps'],
      category: 'course',
    },
    {
      id: 'auto-7',
      title: 'JavaScript Essentials 1',
      issuer: 'Cisco Networking Academy',
      date: '',
      description: 'Completed JavaScript Essentials 1, gaining foundational knowledge in programming logic, syntax, and web scripting.',
      imageUrl: jsEss1Img,
      credentialUrl: '',
      skills: ['JavaScript', 'Programming Basics', 'Web Scripting'],
      category: 'course',
    },
    {
      id: 'auto-8',
      title: 'ISTD Hackathon',
      issuer: 'ISTD',
      date: '',
      description: 'Recognized for innovative project development and teamwork at the ISTD Hackathon, excelling in rapid prototyping and creative problem-solving.',
      imageUrl: istdImg,
      credentialUrl: '',
      skills: ['Hackathon', 'Prototyping', 'Teamwork', 'Creativity'],
      category: 'hackathon',
    },
    {
      id: 'auto-9',
      title: 'Investment Risk Management',
      issuer: 'Course Provider',
      date: '',
      description: 'Completed a course in Investment Risk Management, learning about financial risk analysis, portfolio management, and investment strategies.',
      imageUrl: investRiskImg,
      credentialUrl: '',
      skills: ['Finance', 'Risk Analysis', 'Portfolio Management'],
      category: 'course',
    },
    {
      id: 'auto-10',
      title: 'Introduction to Packet Tracer',
      issuer: 'Cisco',
      date: '',
      description: 'Gained hands-on experience with Cisco Packet Tracer, simulating and troubleshooting network topologies and protocols.',
      imageUrl: pktTracerImg,
      credentialUrl: '',
      skills: ['Networking', 'Cisco', 'Simulation', 'Troubleshooting'],
      category: 'course',
    },
    {
      id: 'auto-11',
      title: 'Introduction to Front-End Development',
      issuer: 'Meta/Coursera',
      date: '',
      description: 'Completed an introductory course on front-end development, covering HTML, CSS, JavaScript, and responsive design.',
      imageUrl: feDevImg,
      credentialUrl: '',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      category: 'course',
    },
    {
      id: 'auto-12',
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      date: '',
      description: 'Learned the fundamentals of cybersecurity, including threat analysis, network security, and best practices for online safety.',
      imageUrl: cybersecImg,
      credentialUrl: '',
      skills: ['Cybersecurity', 'Network Security', 'Threat Analysis'],
      category: 'course',
    },
    {
      id: 'auto-13',
      title: 'Internship Certificate',
      issuer: 'Company/Organization',
      date: '',
      description: 'Awarded for successful completion of an internship, demonstrating professional growth, technical skills, and workplace collaboration.',
      imageUrl: internImg,
      credentialUrl: '',
      skills: ['Internship', 'Professionalism', 'Collaboration'],
      category: 'training',
    },
    {
      id: 'auto-14',
      title: 'Inspiron',
      issuer: 'Inspiron',
      date: '',
      description: 'Recognized for participation and achievement in the Inspiron event, showcasing creativity and technical expertise.',
      imageUrl: inspironImg,
      credentialUrl: '',
      skills: ['Creativity', 'Technical Skills', 'Event Participation'],
      category: 'hackathon',
    },
    {
      id: 'auto-15',
      title: 'IEEE Member Certificate',
      issuer: 'IEEE',
      date: '',
      description: 'Official IEEE membership certificate, reflecting commitment to professional development and engagement in the engineering community.',
      imageUrl: ieeeImg,
      credentialUrl: '',
      skills: ['IEEE', 'Professional Development', 'Networking'],
      category: 'course',
    },
    {
      id: 'auto-16',
      title: 'IBM SkillBuild',
      issuer: 'IBM',
      date: '',
      description: 'Completed IBM SkillBuild program, gaining practical skills in cloud computing, AI, and digital transformation.',
      imageUrl: ibmImg,
      credentialUrl: '',
      skills: ['IBM', 'Cloud', 'AI', 'Digital Skills'],
      category: 'training',
    },
    {
      id: 'auto-17',
      title: 'HackJMI',
      issuer: 'HackJMI',
      date: '',
      description: 'Awarded for innovative solutions and teamwork at HackJMI, excelling in rapid development and creative problem-solving.',
      imageUrl: hackjmiImg,
      credentialUrl: '',
      skills: ['Hackathon', 'Innovation', 'Teamwork'],
      category: 'hackathon',
    },
    {
      id: 'auto-18',
      title: 'Google CyberSecurity Professional',
      issuer: 'Google',
      date: '',
      description: 'Earned the Google CyberSecurity Professional certificate, demonstrating expertise in security analysis, risk management, and incident response.',
      imageUrl: googleCyberImg,
      credentialUrl: '',
      skills: ['Cybersecurity', 'Risk Management', 'Incident Response'],
      category: 'course',
    },
    {
      id: 'auto-19',
      title: 'GFG Fullstack Developer Bootcamp',
      issuer: 'GeeksforGeeks',
      date: '',
      description: 'Completed the GFG Fullstack Developer Bootcamp, mastering both frontend and backend technologies for web development.',
      imageUrl: gfgImg,
      credentialUrl: '',
      skills: ['Fullstack', 'Frontend', 'Backend', 'Web Development'],
      category: 'course',
    },
    {
      id: 'auto-20',
      title: 'Fortinet Technical Introduction To CyberSecurity',
      issuer: 'Fortinet',
      date: '',
      description: 'Completed Fortinet’s Technical Introduction to CyberSecurity, learning about threat landscapes, security protocols, and best practices.',
      imageUrl: fortinetTechImg,
      credentialUrl: '',
      skills: ['Cybersecurity', 'Threat Analysis', 'Security Protocols'],
      category: 'course',
    },
    {
      id: 'auto-21',
      title: 'Fortinet Introduction To The Threat Landscape',
      issuer: 'Fortinet',
      date: '',
      description: 'Gained insights into the evolving threat landscape and cybersecurity strategies with Fortinet.',
      imageUrl: fortinetThreatImg,
      credentialUrl: '',
      skills: ['Cybersecurity', 'Threat Landscape', 'Security Strategies'],
      category: 'course',
    },
    {
      id: 'auto-22',
      title: 'Fortinet FortiGate 7.4 Operator',
      issuer: 'Fortinet',
      date: '',
      description: 'Certified as a FortiGate 7.4 Operator, demonstrating skills in firewall management and network security.',
      imageUrl: fortinetGateImg,
      credentialUrl: '',
      skills: ['Firewall', 'Network Security', 'FortiGate'],
      category: 'course',
    },
    {
      id: 'auto-23',
      title: 'Fortinet Getting Started In CyberSecurity',
      issuer: 'Fortinet',
      date: '',
      description: 'Completed Fortinet’s Getting Started in CyberSecurity, covering foundational concepts and security essentials.',
      imageUrl: fortinetStartImg,
      credentialUrl: '',
      skills: ['Cybersecurity', 'Security Essentials'],
      category: 'course',
    },
    {
      id: 'auto-24',
      title: 'EduSkills',
      issuer: 'EduSkills',
      date: '',
      description: 'Recognized for completing the EduSkills program, focusing on employability skills and industry readiness.',
      imageUrl: eduskillsImg,
      credentialUrl: '',
      skills: ['Employability', 'Industry Readiness', 'Soft Skills'],
      category: 'training',
    },
    {
      id: 'auto-25',
      title: 'AI for HealthCare',
      issuer: 'Course Provider',
      date: '',
      description: 'Completed a specialized course in AI for HealthCare, applying artificial intelligence to medical data analysis and diagnostics.',
      imageUrl: aiHealthImg,
      credentialUrl: '',
      skills: ['AI', 'Healthcare', 'Medical Data', 'Diagnostics'],
      category: 'hackathon',
    },
    {
      id: 'auto-26',
      title: 'Wehack Hackathon',
      issuer: 'Wehack',
      date: '',
      description: 'Awarded for exceptional performance and teamwork at the Wehack Hackathon, showcasing rapid development and creative problem-solving skills.',
      imageUrl: wehackImg,
      credentialUrl: '',
      skills: ['Hackathon', 'Teamwork', 'Rapid Development', 'Problem Solving'],
      category: 'hackathon',
    },
    {
      id: 'auto-27',
      title: 'Version Control',
      issuer: 'Course Provider',
      date: '',
      description: 'Completed a course on Version Control, mastering Git fundamentals, branching, merging, and collaborative workflows.',
      imageUrl: versionControlImg,
      credentialUrl: '',
      skills: ['Git', 'Version Control', 'Collaboration'],
      category: 'course',
    },
    {
      id: 'auto-28',
      title: 'JavaScript for Beginners',
      issuer: 'Course Provider',
      date: '',
      description: 'Completed an introductory course on JavaScript, learning programming basics, syntax, and building simple web scripts.',
      imageUrl: jsBeginnersImg,
      credentialUrl: '',
      skills: ['JavaScript', 'Programming Basics', 'Web Scripting'],
      category: 'course',
    },
    {
      id: 'auto-29',
      title: 'Programming with JavaScript',
      issuer: 'Course Provider',
      date: '',
      description: 'Completed a hands-on course in JavaScript programming, focusing on ES6 features and interactive web development.',
      imageUrl: progJsRootImg,
      credentialUrl: '',
      skills: ['JavaScript', 'ES6', 'Web Development'],
      category: 'course',
    },
    {
      id: 'auto-30',
      title: 'Introduction to HTML',
      issuer: 'Course Provider',
      date: '',
      description: 'Completed a foundational course in HTML, learning to structure web pages and create semantic markup.',
      imageUrl: htmlImg,
      credentialUrl: '',
      skills: ['HTML', 'Web Development', 'Markup'],
      category: 'course',
    },
    {
      id: 'auto-31',
      title: 'Introduction to Microsoft Excel',
      issuer: 'Course Provider',
      date: '',
      description: 'Completed a course in Microsoft Excel, mastering spreadsheets, formulas, and data analysis tools.',
      imageUrl: excelImg,
      credentialUrl: '',
      skills: ['Excel', 'Spreadsheets', 'Data Analysis'],
      category: 'course',
    },
    {
      id: 'auto-32',
      title: 'Cybersecurity Essentials',
      issuer: 'Course Provider',
      date: '',
      description: 'Earned the Cybersecurity Essentials badge, demonstrating knowledge of security principles, threats, and best practices.',
      imageUrl: cyberEssentialsImg,
      credentialUrl: '',
      skills: ['Cybersecurity', 'Security Principles', 'Threat Analysis'],
      category: 'course',
    },
    {
      id: 'auto-33',
      title: 'Government Certification',
      issuer: 'Government',
      date: '',
      description: 'Received a government-issued certification for successful completion of a recognized training or course.',
      imageUrl: govCertImg,
      credentialUrl: '',
      skills: ['Certification', 'Professional Development'],
      category: 'course',
    },
  ];

  const [search, setSearch] = React.useState('');
  const [filter, setFilter] = React.useState<'all' | 'hackathon' | 'training' | 'course'>('all');
  const filters = [
    { value: 'all', label: 'All' },
    { value: 'hackathon', label: 'Hackathons' },
    { value: 'training', label: 'Trainings/Internships' },
    { value: 'course', label: 'Courses' },
  ];
  const filteredCerts = certifications.filter(cert => {
    const matchesFilter = filter === 'all' || cert.category === filter;
    const searchLower = search.toLowerCase();
    const matchesSearch =
      cert.title.toLowerCase().includes(searchLower) ||
      cert.issuer.toLowerCase().includes(searchLower) ||
      cert.skills.some(skill => skill.toLowerCase().includes(searchLower));
    return matchesFilter && matchesSearch;
  });

  const achievements = [
    {
      id: '1',
      title: 'AI in Healthcare Hackathon Winner',
      description: 'Won the “AI in Healthcare” hackathon organized by Baderia Global College for developing an innovative, health-focused AI solution.',
      icon: '🤖',
      date: '2024',
    },
    {
      id: '2',
      title: 'Smart India Hackathon (SIH) 2024 Finalist',
      description: 'Finalist at SIH 2024 for the problem statement: Drug Inventory and Supply Chain Management System.',
      icon: '🏆',
      date: '2024',
    },
    {
      id: '3',
      title: 'Founder – Coding Era!',
      description: 'Founded Coding Era!, a city-level tech community and startup aimed at fostering coding, innovation, and peer learning.',
      icon: '🚀',
      date: '2022-Present',
    },
    {
      id: '4',
      title: 'Hackathon Participant and Club Leader',
      description: 'Participated in 20+ hackathons, solved over 100 LeetCode problems, and served as a club leader and web development instructor.',
      icon: '💡',
      date: '2021-Present',
    },
    {
      id: '5',
      title: 'Treasurer – IEEE Student Branch',
      description: 'Elected Treasurer of the IEEE Student Branch, responsible for managing budgets, organizing technical events, and ensuring smooth financial operations for workshops, seminars, and student activities.',
      icon: '💼',
      date: '2023-2024',
    },
  ];

  return (
    <div className="certifications">
      <div className="container">
        <section className="certifications-header section">
          <h1 className="section-title">Certifications & Achievements</h1>
          <p className="certifications-subtitle">
            My commitment to continuous learning and professional development through 
            industry-recognized certifications and notable achievements in the tech community.
          </p>
        </section>

        <AchievementsCarousel />

        <section className="certifications-grid-section section">
          {/* Search bar */}
          <div className="certifications-search-bar-wrapper">
            <input
              type="text"
              className="certifications-search-bar"
              placeholder="Search certificates by title, issuer, or skill..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="certifications-filters">
            {filters.map(f => (
              <button
                key={f.value}
                className={`filter-btn ${filter === f.value ? 'active' : ''}`}
                onClick={() => setFilter(f.value as any)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="certifications-grid grid grid-3">
            {filteredCerts.map((cert, index) => (
              <div 
                key={cert.id} 
                className="certification-card card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="cert-image">
                  <img src={cert.imageUrl} alt={cert.title} />
                </div>
                <div className="cert-content">
                  <div className="cert-header">
                    <h3 className="cert-title">{cert.title}</h3>
                    <div className="cert-meta">
                      <span className="cert-issuer">{cert.issuer}</span>
                    </div>
                  </div>
                  <p className="cert-description">{cert.description}</p>
                  <div className="cert-skills">
                    <h4>Skills Demonstrated:</h4>
                    <div className="skills-tags">
                      {cert.skills.map((skill) => (
                        <span key={skill} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      className="cert-verify"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} /> Verify Credential
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="achievements-section section">
          <h2 className="subsection-title">
            <Star /> Notable Achievements
          </h2>
          <div className="achievements-grid grid grid-2">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.id} 
                className="achievement-card card fade-in"
                style={{ animationDelay: `${(index + certifications.length) * 0.1}s` }}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-content">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                  <span className="achievement-date">{achievement.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <section className="stats-section section">
          <div className="stats-container">
            <div className="stat-item fade-in">
              <div className="stat-number">12</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat-item fade-in">
              <div className="stat-number">5</div>
              <div className="stat-label">Major Providers</div>
            </div>
            <div className="stat-item fade-in">
              <div className="stat-number">500+</div>
              <div className="stat-label">Learning Hours</div>
            </div>
            <div className="stat-item fade-in">
              <div className="stat-number">4</div>
              <div className="stat-label">Achievements</div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Certifications;