export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  screenshots: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  status?: 'completed' | 'in-progress';
}

export interface Game {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  screenshots: string[];
  playUrl: string;
  githubUrl: string;
  genre: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl: string;
  credentialUrl: string;
  skills: string[];
  category: 'hackathon' | 'training' | 'course';
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other' | 'languages' | 'softwares';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}