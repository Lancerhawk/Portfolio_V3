import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import type { ContactFormData } from '../../types';
import './Contact.css';
import emailjs from 'emailjs-com';

const SuccessDialog: React.FC<{ open: boolean }> = ({ open }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  React.useEffect(() => {
    if (open) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!open) return null;
  return (
    <div className="success-dialog-overlay">
      <div className="success-dialog-modal">
        <h2>Congratulations!</h2>
        <p>Your message was sent.</p>
        {showConfetti && <ConfettiParticles />}
      </div>
    </div>
  );
};

const ConfettiParticles: React.FC = () => {
  const confetti = Array.from({ length: 20 }).map((_, i) => {
    const left = 5 + i * 4.5 + Math.random() * 2;
    const color = [
      "#00fff0",
      "#ff00ea",
      "#ffe600",
      "#00ff57",
      "#ff5e00",
      "#00aaff"
    ][Math.floor(Math.random() * 6)];
    const rotate = Math.random() * 40 - 20;
    return (
      <div
        key={i}
        className="confetti-piece static"
        style={{
          left: `${left}%`,
          background: color,
          top: '-18px',
          transform: `rotate(${rotate}deg)`
        }}
      />
    );
  });
  return <div className="confetti-container static-confetti">{confetti}</div>;
};


const Contact: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showButtonSuccess, setShowButtonSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');
    if (!formRef.current) return;
    emailjs
      .sendForm('service_pivtd7k', 'template_u3rvont', formRef.current, '95Tqso_9dbgvMvhVq')
      .then(
        () => {
          setIsSubmitting(false);
          setSuccessMessage('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setShowSuccess(true);
          setShowButtonSuccess(true);
          setTimeout(() => setShowSuccess(false), 3000);
          setTimeout(() => setShowButtonSuccess(false), 4000);
        },
        () => {
          setIsSubmitting(false);
          setErrorMessage('Failed to send message, please try again later.');
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail />,
      label: 'Email',
      value: '70001933arin@gmail.com',
      href: 'mailto:70001933arin@gmail.com'
    },
    {
      icon: <Phone />,
      label: 'Phone',
      value: '+91 9301459291',
      href: 'tel:+91 7000193320'
    },
    {
      icon: <MapPin />,
      label: 'Location',
      value: 'Madhya Pradesh / Jabalpur',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github />,
      label: 'GitHub',
      href: 'https://github.com/Lancerhawk',
      color: 'var(--text-primary)'
    },
    {
      icon: <Linkedin />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/arin-jain-782098258/',
      color: '#0077b5'
    },
    {
      icon: <Twitter />,
      label: 'Twitter',
      href: 'https://x.com/Arin_Jain420',
      color: '#1da1f2'
    }
  ];

  return (
    <div className="contact">
      <div className="container">
        <section className="contact-header section">
          <h1 className="section-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Ready to bring your ideas to life? I'm always excited to collaborate on new projects 
            and discuss innovative solutions. Let's create something amazing together!
          </p>
        </section>

        <section className="contact-content section">
          <div className="contact-grid">
            <div className="contact-info fade-in">
              <h2>Let's Connect</h2>
              <p className="info-description">
                Whether you have a project in mind, need technical consultation, 
                or just want to say hello, I'd love to hear from you.
              </p>

              <div className="contact-methods">
                {contactInfo.map((info) => (
                  <div key={info.label} className="contact-method">
                    <div className="method-icon">{info.icon}</div>
                    <div className="method-content">
                      <span className="method-label">{info.label}</span>
                      {info.href ? (
                        <a href={info.href} className="method-value">
                          {info.value}
                        </a>
                      ) : (
                        <span className="method-value">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <h3>Follow Me</h3>
                <div className="social-grid">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ '--social-color': social.color } as React.CSSProperties}
                    >
                      {social.icon}
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="availability">
                <div className="availability-status">
                  <div className="status-indicator available"></div>
                  <span>Available for new projects</span>
                </div>
                <p className="availability-note">
                  Typically responds within 24 hours
                </p>
              </div>
            </div>

            <div className="contact-form-container fade-in">
              <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                <h2>Send a Message</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type="submit"
                  className={`btn btn-primary submit-btn${showButtonSuccess ? ' btn-success' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : showButtonSuccess ? (<><CheckCircle size={20} style={{marginRight: 8}}/> Sent!</>) : 'Send Message'}
                </button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
              </form>
            </div>
          </div>
        </section>

        <section className="contact-cta section">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              From concept to deployment, I'll help you build exceptional digital experiences 
              that engage users and drive results.
            </p>
            <div className="cta-features">
              <div className="feature">
                <span className="feature-icon_contact">⚡</span>
                <span>Fast Turnaround</span>
              </div>
              <div className="feature">
                <span className="feature-icon_contact">🎯</span>
                <span>Goal-Oriented</span>
              </div>
              <div className="feature">
                <span className="feature-icon_contact">🚀</span>
                <span>Modern Solutions</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <SuccessDialog open={showSuccess} />
    </div>
  );
};

export default Contact;