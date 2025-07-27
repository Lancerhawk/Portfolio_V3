import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import Modal from '../../components/Modal/Modal';
import type { Project } from '../../types';
import './Projects.css';
import medic1 from '../../assets/Projects/MedicKit/1.jpg';
import medic2 from '../../assets/Projects/MedicKit/2.jpg';
import medic3 from '../../assets/Projects/MedicKit/3.jpg';
import medic4 from '../../assets/Projects/MedicKit/4.jpg';
import medic5 from '../../assets/Projects/MedicKit/5.jpg';
import vital1 from '../../assets/Projects/VitalCheck/1.jpg';
import vital2 from '../../assets/Projects/VitalCheck/2.jpg';
import vital3 from '../../assets/Projects/VitalCheck/3.jpg';
import vital4 from '../../assets/Projects/VitalCheck/4.jpg';
import vital5 from '../../assets/Projects/VitalCheck/5.jpg';
import taskflow1 from '../../assets/Projects/TaskFlow/1.jpg';
import taskflow2 from '../../assets/Projects/TaskFlow/2.jpg';
import taskflow3 from '../../assets/Projects/TaskFlow/3.jpg';
import taskflow4 from '../../assets/Projects/TaskFlow/4.png';
import taskflow5 from '../../assets/Projects/TaskFlow/5.png';
import VD1 from '../../assets/Projects/Video downloader/1.jpg';
import VD2 from '../../assets/Projects/Video downloader/2.jpg';
import logomaking1 from '../../assets/Projects/IEEE Logo/1.png';
import logomaking2 from '../../assets/Projects/IEEE Logo/2.png';
import logomaking3 from '../../assets/Projects/IEEE Logo/3.png';
import logomaking4 from '../../assets/Projects/IEEE Logo/4.png';
import logomaking5 from '../../assets/Projects/IEEE Logo/5.png';
import codingera1 from '../../assets/Projects/CodingEra!/1.png';
import codingera2 from '../../assets/Projects/CodingEra!/2.png';
import codingera3 from '../../assets/Projects/CodingEra!/3.png';
import codingera4 from '../../assets/Projects/CodingEra!/4.png';
import codingera5 from '../../assets/Projects/CodingEra!/5.png';
import LMS1 from '../../assets/Projects/LMS/1.png';
import LMS2 from '../../assets/Projects/LMS/2.png';
import LMS3 from '../../assets/Projects/LMS/3.png';
import LMS4 from '../../assets/Projects/LMS/4.jpg';
import LMS5 from '../../assets/Projects/LMS/5.jpg';
import expense1 from '../../assets/Projects/Expense/1.png';
import expense2 from '../../assets/Projects/Expense/2.png';
import expense3 from '../../assets/Projects/Expense/3.png';
import expense4 from '../../assets/Projects/Expense/4.png';
import expense5 from '../../assets/Projects/Expense/5.png';
import gametournament1 from '../../assets/Projects/GameTournament/1.png';
import gametournament2 from '../../assets/Projects/GameTournament/2.png';
import gametournament3 from '../../assets/Projects/GameTournament/3.png';
import gametournament4 from '../../assets/Projects/GameTournament/4.png';
import gametournament5 from '../../assets/Projects/GameTournament/5.png';
import fest1 from '../../assets/Projects/YouthFest/1.png';
import fest2 from '../../assets/Projects/YouthFest/2.png';
import fest3 from '../../assets/Projects/YouthFest/3.png';
import fest4 from '../../assets/Projects/YouthFest/4.png';
import fest5 from '../../assets/Projects/YouthFest/5.png';
import grammerAI1 from '../../assets/Projects/AIgrammer/1.png';
import artemis1 from '../../assets/Projects/aRTEMIS/1.png';
import artemis2 from '../../assets/Projects/aRTEMIS/2.png';
import artemis3 from '../../assets/Projects/aRTEMIS/3.png';
import artemis4 from '../../assets/Projects/aRTEMIS/4.png';
import artemis5 from '../../assets/Projects/aRTEMIS/5.png';
import homedesigner1 from '../../assets/Projects/homedesigner/1.png';
import CancerAI1 from '../../assets/Projects/CancerAI/1.png';
import CancerAI2 from '../../assets/Projects/CancerAI/2.png';
import CancerAI3 from '../../assets/Projects/CancerAI/3.png';
import CancerAI4 from '../../assets/Projects/CancerAI/4.png';
import CancerAI5 from '../../assets/Projects/CancerAI/5.png';
import Skillmorph1 from '../../assets/Projects/Skillmorph/1.png';
import Skillmorph2 from '../../assets/Projects/Skillmorph/2.png';
import Skillmorph3 from '../../assets/Projects/Skillmorph/3.png';
import Skillmorph4 from '../../assets/Projects/Skillmorph/4.png';
import Skillmorph5 from '../../assets/Projects/Skillmorph/5.png';
import EMS1 from '../../assets/Projects/EMS/1.png';
import EMS2 from '../../assets/Projects/EMS/2.png';
import EMS3 from '../../assets/Projects/EMS/3.png';
import EMS4 from '../../assets/Projects/EMS/4.png';
import timer1 from '../../assets/Projects/Timer/1.png';
import timer2 from '../../assets/Projects/Timer/2.png';
import timer3 from '../../assets/Projects/Timer/3.png';
import timer4 from '../../assets/Projects/Timer/4.png';
import timer5 from '../../assets/Projects/Timer/5.png';
import insight1 from '../../assets/Projects/InSightAI/1.png'
import insight2 from '../../assets/Projects/InSightAI/2.png'
import insight3 from '../../assets/Projects/InSightAI/3.png'
import insight4 from '../../assets/Projects/InSightAI/4.png'
import insight5 from '../../assets/Projects/InSightAI/5.png'

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [selectedScreenshot, setSelectedScreenshot] = useState<number>(0);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Taskflow: Kanban Board',
      status: 'completed',
      description: 'TaskFlow, a fully responsive and beautifully designed Kanban web app to manage tasks and projects with ease and elegance.',
      longDescription: '<strong>TaskFlow</strong> is a modern, collaborative Kanban-style task management web app designed to simplify project planning, boost productivity, and enhance team collaboration. With a sleek, cozy UI and real-time features, TaskFlow brings together powerful project tracking tools and an intuitive user experience across desktop and mobile.<br><br>Built with <strong>React</strong>, <strong>Tailwind CSS</strong>,<strong> WebSockets</strong>, and <strong>Python (Flask/FastAPI)</strong>, it combines performance and aesthetics into one seamless productivity platform.<br><br><strong>Key Features:</strong><br><ul><li><strong>Dashboard Overview:</strong> Visualize deadlines, priorities, recent activity, productivity scores, and motivational quotes.</li><li><strong>Kanban Board:</strong> Smooth drag-and-drop task management by project and status.</li><li><strong>Advanced Task & Project Manager:</strong> Filter, edit, delete, and organize tasks in color-coded projects.</li><li><strong>Real-Time Collaboration:</strong> Collaborate on projects, tasks, whiteboards, and chats with live updates.</li><li><strong>Interactive Whiteboard:</strong> Brainstorm visually with your team in real-time.</li><li><strong>Project Chat System:</strong> Exchange text, file, and voice messages with full message control.</li><li><strong>Invite & Team Management:</strong> Search, invite, manage collaborators with server-side validation and live feedback.</li><li><strong>Notification System:</strong> Instant toasts and popups for invites, messages, and updates with full notification management.</li><li><strong>Mobile-First Navigation:</strong> Optimized sidebar, burger menu, and touch-friendly layout.</li><li><strong>Accessibility & UX:</strong> Keyboard navigation, semantic HTML, modern cards, modals, and smooth transitions.</li><li><strong>Security & Deployment Ready:</strong> Authenticated routes, secure backend with SSL/TLS, and cloud-friendly structure.</li></ul><br><strong><strong>TaskFlow</strong> is more than a Kanban board. it’s your team’s all-in-one productivity space.<br><br><em>✨ Plan better. Work smarter. Build together.</em>',
      technologies: ['React','Context API','WebSockets','CRACO','@hello-pangea/dnd','JWT Authentication', 'TailwindCSS', 'Python(Flask)', 'MongoDB', 'Axios'],
      imageUrl: taskflow1,
      screenshots: [
        taskflow1, taskflow2, taskflow3, taskflow4, taskflow5
      ],
      liveUrl: 'https://kanban-board-git-main-lancerhawks-projects.vercel.app',
      githubUrl: 'https://github.com/Lancerhawk/Kanban_Board',
      category: 'webapp'
    },
    {
      id: '2',
      title: 'InSight AI : Revolutionizing Technical Interview Preparation with AI',
      status: 'completed',
      description: 'InSight AI is a modern web application that allows users to take simulated job interviews, receive dynamic AI-generated questions, and get detailed, real-time feedback, all in a smooth, voice-based environment.',
      longDescription: '<strong>InSight AI</strong> is a full-stack, AI-powered interview preparation platform designed to help students, job-seekers, and developers simulate real interviews, receive intelligent AI-generated questions, and get detailed voice-based feedback in real time. Built using <strong>Next.js App Router</strong>, <strong>MongoDB</strong>, <strong>NextAuth.js</strong>, and integrated AI APIs like <strong>Gemini</strong> and <strong>OpenAI</strong>, it delivers a seamless experience across devices with a modern UI and responsive features. <strong>Key Features:</strong> <ul><li><strong>Secure Authentication:</strong> Email/password login using NextAuth.js and bcrypt.</li><li><strong>Voice-Based Interviews:</strong> Real-time mock interviews with Vapi voice agents.</li><li><strong>AI-Generated Questions:</strong> Dynamic question generation and evaluation via Gemini & OpenAI APIs.</li><li><strong>Smart Feedback:</strong> Persistent user-specific feedback that evolves with every attempt.</li><li><strong>Responsive Dashboard:</strong> Visualizes interview history, feedback, and user performance.</li><li><strong>Tech Stack Visualizer:</strong> Automatically displays icons and metadata per interview session.</li><li><strong>Modern UI/UX:</strong> Animated transitions, sticky navbar, loaders, and accessible design.</li></ul> <strong>InSight AI</strong> bridges intelligence and simulation into one powerful interview assistant, empowering users with real-time insights, voice interaction, and structured preparation. <em>🎯 Practice smarter. Interview confidently. Level up with AI.</em>',
      technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'MongoDB', 'NextAuth.js','Vapi AI', 'GOogle Gemini API', 'OpenAI API'],
      imageUrl: insight1,
      screenshots: [ insight1, insight2, insight3, insight4, insight5],
      liveUrl: 'https://in-sight-ai-mock-interview-proj-git-2654e2-lancerhawks-projects.vercel.app',
      githubUrl: 'https://github.com/Lancerhawk/InSight_AI_MockInterview_Project',
      category: 'webapp'
    },
    {
      id: '3',
      title: 'Vital Check',
      status: 'in-progress',
      description: 'VitalCheck is an AI-powered diagnostic platform that enables real-time, multi-disease detection through medical imaging and smart reports — built for doctors and patients alike.',
      longDescription: '<strong>VitalCheck</strong> is an AI-powered healthcare platform built to assist doctors in managing patients, registering cases, and leveraging deep learning for disease prediction and medical report analysis. With a secure, role-based system and intuitive UI, VitalCheck enhances diagnostic support and patient care through intelligent automation.<br><br>Developed with a modern stack including <strong>React</strong>, <strong>Vite</strong>, <strong>MUI</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and integrated AI services via <strong>Python</strong>, it offers seamless performance and advanced medical features.<br><br><strong>Key Features:</strong><br><ul><li><strong>Doctor Dashboard:</strong> Secure panel for managing patients, appointments, and AI results.</li><li><strong>AI Disease Prediction:</strong> Detects brain tumors (MRI), lung cancer (CT), chest tuberculosis (X-ray), skin diseases (image), and heart disease (blood report PDF).</li><li><strong>Appointment Calendar:</strong> Integrated calendar for scheduling and managing consultations.</li><li><strong>Patient Management:</strong> Register, update, delete patients with image upload and preview.</li><li><strong>Authentication:</strong> JWT-based login, role-based access control, and auto-generated patient credentials.</li><li><strong>AI Integration:</strong> REST endpoints for image and PDF-based predictions with class output and confidence score.</li><li><strong>Security:</strong> All patient data linked to the registering doctor; strict backend validation and secure storage.</li><li><strong>PDF Parsing:</strong> Extracts structured data from blood reports for heart disease risk prediction.</li></ul><br><strong>AI Models:</strong><br><ul><li><strong>Brain Tumor:</strong> MRI-based, 4 classes — glioma, meningioma, pituitary, no tumor.</li><li><strong>Lung Cancer:</strong> CT scan-based, 3 classes — benign, malignant, normal.</li><li><strong>Chest Tuberculosis:</strong> X-ray-based, 2 classes — tuberculosis, normal.</li><li><strong>Skin Disease:</strong> Multi-class image classification via MobileNetV2 transfer learning.</li><li><strong>Heart Disease:</strong> Blood report (PDF) analysis via structured data parsing.</li></ul><br><strong>Backend & Frontend Highlights:</strong><br><ul><li><strong>Node.js + Express Backend:</strong> Auth, patient CRUD, appointment routes, and email integration with Nodemailer.</li><li><strong>React Frontend:</strong> Vite-powered SPA with role-based UI, calendar, AI prediction modules, and image fallback handling.</li></ul><br><strong>VitalCheck</strong> bridges AI and healthcare into one intelligent ecosystem, empowering doctors with fast, data-driven diagnostic tools.<br><br><em>🩺 Predict smarter. Care better. Automate diagnosis with AI.</em>',
      technologies: ['React', 'NodeJS with ExpressJS', 'Flask', 'AWS', 'ML & DL'],
      imageUrl: vital1,
      screenshots: [
        vital1, vital2, vital3, vital4, vital5
      ],
      liveUrl: 'https://project-vital-check-git-main-lancerhawks-projects.vercel.app',
      githubUrl: 'https://github.com/Lancerhawk/Project-VitalCheck',
      category: 'webapp'
    },
    {
      id: '4',
      title: 'MedicKit Inventory System',
      status: 'in-progress',
      description: 'A full-featured Supply Chain platform with real-time Inventory Management System for Hospitals and Local Pharmacies.',
      longDescription: 'Built a web application to streamline pharmaceutical supply chain management with realtime inventory tracking, automated stock updates, and order forecasting enhancing coordination, reducing errors, and ensuring timely drug delivery.',
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Express.js', 'AWS'],
      imageUrl: medic1,
      screenshots: [ medic1, medic2, medic3, medic4, medic5],
      liveUrl: 'https://project-medic-kit-sih.vercel.app/',
      githubUrl: 'https://github.com/Lancerhawk/Project-MedicKit',
      category: 'webapp'
    },
    
    {
      id: '5',
      title: 'Video Downloader',
      status: 'completed',
      description: 'Video Downloader Pro is a full-stack web app that lets users download YouTube and Instagram videos in various qualities with a smooth, glassmorphic UI.',
      longDescription: 'Video Downloader Pro is a full-stack web application that lets users download videos from YouTube and Instagram, with support for quality selection and a sleek glassmorphic UI. Built using React, Flask, yt-dlp, and instaloader, it handles media processing, conversion, and downloads with smooth performance. This project helped me explore real-world fullstack architecture, file handling, and deployment pipelines and it’s just the beginning, with real-time features on the way!',
      technologies: ['React', 'TailwindCSS', 'Python(Flask)', 'yt-dlp', 'instaloader', 'ffmpeg'],
      imageUrl: VD1,
      screenshots: [
        VD1, VD2
      ],
      liveUrl: 'https://video-downloader-project-git-main-lancerhawks-projects.vercel.app',
      githubUrl: 'https://github.com/Lancerhawk/Video_Downloader_Project',
      category: 'webapp'
    },
    {
      id: '6',
      title: 'IEEE Logo Making Competition Website',
      status: 'completed',
      description: 'A creative competition inviting BGIEM students to design the official logo for the IEEE Student Branch, showcasing originality, aesthetic skill, and alignment with IEEE’s core values.',
      longDescription: 'The IEEE Student Branch Logo Design Competition is a creative platform for BGIEM students to craft a unique and meaningful visual identity for their branch. It encourages participants to showcase their design skills while aligning with IEEE’s values of innovation, integrity, and service to humanity. The winning design will be officially adopted and recognized, offering students an opportunity to leave a lasting legacy.',
      technologies: ['Reactjs', 'TypeScript', 'Lucid Icons'],
      imageUrl: logomaking1,
      screenshots: [
        logomaking1, logomaking2, logomaking3, logomaking4, logomaking5
      ],
      liveUrl: 'https://ieee-logo-competition-website-git-main-lancerhawks-projects.vercel.app',
      githubUrl: 'https://github.com/Lancerhawk/IEEE_Logo_Competition_Website',
      category: 'website'
    },
    {
      id: '7',
      title: 'Coding Era! Community Website',
      status: 'completed',
      description: 'A student-powered tech and innovation ecosystem dedicated to transforming college learners into builders, startup founders, and industry-ready professionals through real-world projects, mentorship, and community-driven growth.',
      longDescription: 'The Coding Era! is a student-led tech innovation ecosystem that empowers learners to become builders, innovators, and startup founders while still in college. It offers mentorship, real-world projects, funding, and collaborative opportunities to bridge the gap between college and industry. Rooted in a strong community culture, it fosters learning by doing and aims to make launching startups as normal as passing exams.',
      technologies: ['React', 'NodeJS with ExpressJS', 'MongoDB', 'Railways', 'Vercel'],
      imageUrl: codingera1,
      screenshots: [
        codingera1, codingera2, codingera3, codingera4, codingera5
      ],
      liveUrl: 'https://www.codingera.site/',
      githubUrl: 'https://github.com/Lancerhawk/Community',
      category: 'webapp'
    },
    {
      id: '8',
      title: 'Project LMS Portal',
      status: 'in-progress',
      description: 'A centralized Learning Management System (LMS) portal designed to streamline course management, assignments, and student-faculty interaction in a seamless digital environment.',
      longDescription: 'This LMS portal is a comprehensive platform that enables students and faculty to manage courses, assignments, grades, and resources all in one place. It supports interactive learning through discussion forums, real-time notifications, and progress tracking. Designed for ease of use, it enhances academic collaboration and streamlines the educational workflow.',
      technologies: ['React', 'NodeJS with ExpressJS', 'MongoDB', 'Railways', 'Vercel'],
      imageUrl: LMS1,
      screenshots: [
        LMS1, LMS2, LMS3, LMS4, LMS5
      ],
      liveUrl: 'https://lms-portal-git-main-lancerhawks-projects.vercel.app',
      githubUrl: 'https://github.com/Lancerhawk/LMS-Portal',
      category: 'webapp'
    },
    {
      id: '9',
      title: 'Expense Management System',
      status: 'in-progress',
      description: 'A MERN-stack-based Transaction Management System that enables users to securely track income and expenses with detailed analytics and interactive financial dashboards.',
      longDescription: 'The Transaction Management System is a MERN-stack web app that helps users efficiently track their income and expenses with secure JWT-based authentication. It features transaction logging, editing, and deletion, along with interactive dashboards and analytics using Chart.js. Designed for personal finance management, it offers a clear visual overview of spending habits and financial trends.',
      technologies: ['React', 'NodeJS with ExpressJS', 'MongoDB', 'ChartJS', 'JWT'],
      imageUrl: expense1,
      screenshots: [
        expense1, expense2, expense3, expense4, expense5
      ],
      liveUrl: 'https://github.com/Lancerhawk/Expense-Management-System',
      githubUrl: 'https://github.com/Lancerhawk/Expense-Management-System',
      category: 'webapp'
    },
    {
      id: '10',
      title: 'Game Tournament Website',
      status: 'completed',
      description: 'A dynamic game tournament website that allows users to register, join matches, view leaderboards, and track real-time results across competitive gaming events.',
      longDescription: 'This game tournament website enables users to register for events, join matches, and view live scores and rankings. It offers a seamless experience for both players and organizers with features like leaderboards, schedules, and result tracking.',
      technologies: ['HTML', 'CSS', 'Javascript', 'PHP'],
      imageUrl: gametournament1,
      screenshots: [
        gametournament1, gametournament2, gametournament3, gametournament4, gametournament5
      ],
      liveUrl: 'https://lancerhawk.github.io/GameTournament_Website/',
      githubUrl: 'https://github.com/Lancerhawk/GameTournament_Website',
      category: 'website'
    },
    {
      id: '11',
      title: 'Global Youth Fest 2025 Website',
      status: 'completed',
      description: 'A vibrant website for Youth Fest 2025, showcasing event schedules, registrations, highlights, and celebrations of talent and culture across the college campus.',
      longDescription: 'The Youth Fest 2025 website is the official hub for all cultural, technical, and artistic events happening during the colleges grand annual fest. It features event schedules, registrations, results, galleries, and live updates to keep participants and attendees engaged. Designed for excitement and ease, the site celebrates student talent and fosters campus-wide enthusiasm.',
      technologies: ['React', 'React Router', 'Hooks'],
      imageUrl: fest1,
      screenshots: [
        fest1, fest2, fest3, fest4, fest5
      ],
      liveUrl: 'https://global-youth-fest2025-jw2lxp98t-lancerhawks-projects.vercel.app/',
      githubUrl: 'https://github.com/Lancerhawk/GlobalYouthFest2025-New',
      category: 'website'
    },
    {
      id: '12',
      title: 'AI Grammer Corrector',
      status: 'completed',
      description: 'A server-side web application that leverages OpenAIs API to help users improve their writing.',
      longDescription: 'The AI Grammar Corrector is a server-side web application that uses OpenAIs API to enhance users writing by identifying and correcting grammatical errors. Built with Node.js, Express, and EJS, it features secure API integration, server-side rendering, and a smooth user experience. This project highlights practical use of AI in writing tools while strengthening backend and API development skills.',
      technologies: ['HTML', 'CSS', 'EJS', 'Vercel'],
      imageUrl: grammerAI1,
      screenshots: [
        grammerAI1
      ],
      liveUrl: 'https://github.com/Lancerhawk/AI_Grammer_Corrector',
      githubUrl: 'https://github.com/Lancerhawk/AI_Grammer_Corrector',
      category: 'webapp'
    },
    {
      id: '13',
      title: 'Project Artemis',
      status: 'in-progress',
      description: 'An all-in-one AI-powered platform that unifies learning, development, business intelligence, and creative tools into a personalized, collaborative, and adaptive digital workspace.',
      longDescription: 'Project Artemis is a unified AI-powered ecosystem that integrates tools for learning, development, business intelligence, and creative tasks into one customizable platform. It offers domain-specific features, real-time collaboration, and cross-domain automation to boost productivity and decision-making. With adaptive AI, personalized dashboards, and secure infrastructure, it aims to be the ultimate hub for smart digital transformation.',
      technologies: ['React', 'NodeJS with ExpressJS', 'MongoDB', 'Vercel', 'Railway'],
      imageUrl: artemis1,
      screenshots: [
        artemis1, artemis2, artemis3, artemis4, artemis5
      ],
      liveUrl: 'https://project-artemis-1ylxj24t5-lancerhawks-projects.vercel.app/',
      githubUrl: 'https://github.com/Lancerhawk/Project-Artemis',
      category: 'webapp'
    },
    {
      id: '14',
      title: 'Home Designer AI',
      status: 'completed',
      description: 'This project is a Streamlit-based application that generates home design layouts using Google Gemini AI and fetches design inspiration from Lexica.art.',
      longDescription: 'The AI Home Design Generator is a Streamlit-based web app that uses Google Gemini AI to generate custom home layouts and fetches visual inspirations from Lexica.art. It offers a simple, interactive interface for users to explore AI-generated interior and architectural design ideas. With easy setup and real-time rendering, it’s a creative tool for designers and homeowners alike.',
      technologies: ['Python', 'Streamlit', 'Lexica art'],
      imageUrl: homedesigner1,
      screenshots: [
        homedesigner1
      ],
      liveUrl: 'https://github.com/Lancerhawk/Project_DesignerAI',
      githubUrl: 'https://github.com/Lancerhawk/Project_DesignerAI',
      category: 'webapp'
    },
    {
      id: '15',
      title: 'Cancer Detection AI',
      status: 'in-progress',
      description: 'An AI-powered web app for early cancer detection using scans and medical reports, featuring personalized dashboards and doctor-patient management, winner of an internal hackathon on AI for Healthcare.',
      longDescription: 'Our award-winning project is an AI-powered early cancer detection web app that analyzes MRI, CT, mammograms, and blood/DNA reports to identify cancer at its earliest stages. It features personalized dashboards for patients and a comprehensive doctor management system for scheduling, precautions, and health plans. Built for real-world healthcare impact, the solution earned us top honors at our institute’s AI for Healthcare Hackathon.',
      technologies: ['React', 'Python', 'ChartJS', 'Material UI'],
      imageUrl: CancerAI1,
      screenshots: [
        CancerAI1, CancerAI2, CancerAI3, CancerAI4, CancerAI5
      ],
      liveUrl: 'https://cancer-detection-d57r83ul8-lancerhawks-projects.vercel.app/',
      githubUrl: 'https://github.com/Lancerhawk/Cancer-DetectionAI',
      category: 'webapp'
    },
    {
      id: '16',
      title: 'SkillMorph Website',
      status: 'completed',
      description: 'A gamified professional learning website that visually simulates AI-driven skill development and personalized learning journeys, with future plans for full backend and AI integration.',
      longDescription: 'The Professional Learning Platform is a front-end prototype of a gamified skill-building site that guides users through personalized learning paths, challenges, and progress tracking. While AI features and backend logic are not yet implemented, the interface showcases a vision for an interactive, AI-powered upskilling experience. It aims to make career learning fun, engaging, and tailored to individual growth goals.',
      technologies: ['React', 'Material UI', 'React Router'],
      imageUrl: Skillmorph1,
      screenshots: [
        Skillmorph1, Skillmorph2, Skillmorph3, Skillmorph4, Skillmorph5
      ],
      liveUrl: 'https://isbt-hackathon-project-skill-morph-p5vbzpd0c.vercel.app/',
      githubUrl: 'https://github.com/Lancerhawk/ISBT-Hackathon-Project-SkillMorph-AI',
      category: 'website'
    },
    {
      id: '17',
      title: 'Employee Management System',
      status: 'completed',
      description: 'A simple Employee Management System created with React, offering a login and dashboard experience for both employees and admins all without a backend! This project demonstrates file system storage for managing user data locally and provides a clean, responsive interface for users to interact with tasks and deadlines.',
      longDescription: 'This project started as an experiment to enhance my React skills while diving into the world of file system storage. With a growing interest in backend development and curiosity about file storage, I challenged myself to build an Employee Management System. Here, users can log in as either an employee or admin, access personalized dashboards, and manage tasks all without relying on external databases.',
      technologies: ['React', 'Local Storage', 'React Router', 'MaterialUI'],
      imageUrl: EMS1,
      screenshots: [
        EMS1, EMS2, EMS3, EMS4
      ],
      liveUrl: 'https://employee-management-system-4s1y-ex5ps0ppl-lancerhawks-projects.vercel.app/',
      githubUrl: 'https://github.com/Lancerhawk/Employee-Management-System',
      category: 'website'
    },
    {
      id: '18',
      title: 'Competition Timer',
      status: 'completed',
      description: 'Built a real-time timer and leaderboard web app for managing coding or quiz competitions at IEEE events. Allowed event hosts to set timers, display live scores, and control session flow with admin privileges. Designed for accuracy, visibility, and ease of use during technical contests.',
      longDescription: 'Built a real-time timer and leaderboard web app for managing coding or quiz competitions at events. Allowed event hosts to set timers, display live scores, and control session flow with admin privileges. Designed for accuracy, visibility, and ease of use during technical contests.',
      technologies: ['React', 'Local Storage', 'React Router', 'MaterialUI'],
      imageUrl: timer1,
      screenshots: [
        timer1, timer2, timer3, timer4, timer5
      ],
      liveUrl: 'https://timer-competition-ieee-git-main-lancerhawks-projects.vercel.app',
      githubUrl: 'https://github.com/Lancerhawk/Timer_Competition_IEEE',
      category: 'website'
    },
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'webapp', label: 'Web Apps' },
    { value: 'website', label: 'Websites' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Reset selectedScreenshot when opening a new project
  React.useEffect(() => {
    setSelectedScreenshot(0);
  }, [selectedProject]);

  return (
    <div className="projects">
      <div className="container">
        <section className="projects-header section">
          <h1 className="section-title">My Projects</h1>
          <p className="projects-subtitle">
            Explore my portfolio of web applications, mobile apps, and digital solutions. 
            Each project represents a unique challenge and innovative solution.
          </p>
          
          <div className="projects-filters">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`filter-btn ${filter === category.value ? 'active' : ''}`}
                onClick={() => setFilter(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        <section className="projects-grid-section">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`project-status-badge ${project.status === 'completed' ? 'completed' : 'inprogress'}`}>
                  {project.status === 'completed' ? 'Completed' : 'Under Development'}
                </div>
                <div className="project-image">
                  <img src={project.imageUrl} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  <div className="project-actions">
                    <button
                      className="btn btn-primary"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye /> Details
                    </button>
                    <a
                      href={project.liveUrl}
                      className="btn btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink /> Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="project-modal">
            <div className="modal-gallery">
              <div className="gallery-main">
                <img 
                  src={selectedProject.screenshots[selectedScreenshot]} 
                  alt={selectedProject.title}
                />
              </div>
              <div className="gallery-thumbs">
                {selectedProject.screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`${selectedProject.title} screenshot ${index + 1}`}
                    className={index === selectedScreenshot ? 'active' : ''}
                    onClick={() => setSelectedScreenshot(index)}
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              </div>
            </div>
            
            <div className="modal-info">
              <div 
                className="modal-description" 
                dangerouslySetInnerHTML={{ __html: selectedProject.longDescription }}
              />
              
              <div className="modal-tech">
                <h4>Technologies Used:</h4>
                <div className="tech-list">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="modal-actions">
                <a
                  href={selectedProject.liveUrl}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink /> View Live Project
                </a>
                <a
                  href={selectedProject.githubUrl}
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

export default Projects;