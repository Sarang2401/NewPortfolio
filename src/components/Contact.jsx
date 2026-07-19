import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Twitter, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Home',   href: '#hero'     },
  { label: 'Work',   href: '#projects' },
  { label: 'Skills', href: '#skills'   },
  { label: 'About',  href: '#about'    },
];

const socials = [
  { icon: <Github   size={16} />, href: 'https://github.com/Sarang2401',                         label: 'GitHub'   },
  { icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/sarang-shigwan-9a9668266/', label: 'LinkedIn' },
  { icon: <Mail size={16} />,     href: 'mailto:sarangshigwan@gmail.com',                            label: 'Email'    },
];

const Contact = () => (
  <footer id="contact" className="site-footer">

    {/* ═══ BODY ═══ */}
    <div className="footer-body">
      <div className="container footer-body-inner">

        {/* ── LEFT: contact block ── */}
        <div className="footer-left">

          <h2 className="footer-impact-heading">
            Let's build something<br />
            <em>impactful</em> together.
          </h2>

          <a
            href="mailto:sarangshigwan@gmail.com"
            className="footer-send-btn"
            aria-label="Send email"
          >
            Send Message
            <ArrowUpRight size={18} strokeWidth={2} />
          </a>

          <div className="footer-meta-row">
            <span className="footer-meta-item">
              <MapPin size={13} />
              Pune, India
            </span>
            <span className="footer-meta-sep">·</span>
            <span className="footer-meta-item">IST  UTC+5:30</span>
          </div>
        </div>

        {/* ── RIGHT: link columns ── */}
        <div className="footer-right">
          <div className="footer-link-col">
            <p className="footer-col-head">Pages</p>
            <ul className="footer-link-list">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="footer-link-item">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-link-col">
            <p className="footer-col-head">Connect</p>
            <ul className="footer-link-list">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link-item footer-link-social"
                  >
                    {s.icon}
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="mailto:sarangshigwan@gmail.com" className="footer-link-item footer-link-social">
                  <Mail size={16} />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>

    {/* ═══ BASE BAR ═══ */}
    <div className="footer-base">
      <div className="container footer-base-inner">
        <span className="footer-base-text">Made with 💻, ☕ and ❤️ by Sarang Shigwan</span>
        <span className="footer-base-text">© {new Date().getFullYear()} Sarang Shigwan. All rights reserved.</span>
      </div>
    </div>

  </footer>
);

export default Contact;