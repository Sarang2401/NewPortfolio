import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Magnetic from './Magnetic';

/* ─────────────────────────────────────────────────────────
   Replace these three values after you set up EmailJS:
   https://www.emailjs.com/docs/tutorial/overview/
───────────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

const validate = (data) => {
  const errors = {};
  if (!data.name.trim())    errors.name    = 'Name is required';
  if (!data.email.trim())   errors.email   = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Invalid email address';
  if (!data.message.trim()) errors.message = 'Message is required';
  else if (data.message.trim().length < 10)  errors.message = 'Too short — say a bit more!';
  return errors;
};

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors,   setErrors]   = useState({});
  const [status,   setStatus]   = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus('loading');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >

          {/* ── Left: CTA column ── */}
          <div className="contact-left">
            <span className="section-label">Get in Touch</span>

            <h2 className="contact-title">
              Have a project<br />
              <span className="gradient-text">in mind?</span>
            </h2>

            <p className="contact-desc" style={{ textAlign: 'left', marginLeft: 0 }}>
              I'm currently available for freelance projects and full-time opportunities.
              Drop me a message and I'll get back to you within 24 hours.
            </p>

            {/* Social links */}
            <div className="contact-socials">
              <Magnetic strength={0.4}>
                <a
                  href="https://github.com/Sarang2401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <a
                  href="https://www.linkedin.com/in/sarang-shigwan-9a9668266/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <a
                  href="mailto:sarang2401@gmail.com"
                  className="social-link"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </a>
              </Magnetic>
            </div>
          </div>

          {/* ── Right: Form column ── */}
          <div className="contact-right">
            {status === 'success' ? (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <CheckCircle size={48} color="var(--accent)" strokeWidth={1.5} />
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button
                  className="btn btn-outline"
                  style={{ marginTop: '1.5rem' }}
                  onClick={() => setStatus('idle')}
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="contact-form"
                noValidate
              >
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Elon Musk"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="elon@spacex.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                {status === 'error' && (
                  <div className="form-alert">
                    <AlertCircle size={16} />
                    Something went wrong. Try emailing me directly at sarang2401@gmail.com
                  </div>
                )}

                <Magnetic strength={0.2}>
                  <button
                    type="submit"
                    className="btn btn-primary form-submit"
                    disabled={status === 'loading'}
                    id="contact-submit-btn"
                  >
                    {status === 'loading' ? (
                      <><Loader size={18} className="spin-icon" /> Sending…</>
                    ) : (
                      <><Send size={18} /> Send Message</>
                    )}
                  </button>
                </Magnetic>
              </form>
            )}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;