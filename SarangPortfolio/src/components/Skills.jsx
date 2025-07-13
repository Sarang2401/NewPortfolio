import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger skill animations with staggered delays
          setTimeout(() => {
            skills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => new Set([...prev, skill.name]));
              }, index * 100);
            });
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React.js', level: 90, category: 'Web Dev' },
    { name: 'Flask', level: 88, category: 'Web_Dev' },
    { name: 'Python', level: 82, category: 'Web_Dev' },
    { name: 'OWASP', level: 90, category: 'CyberSecurity' },
    { name: 'Network Security', level: 88, category: 'CyberSecurity' },
    { name: 'IoT Security', level: 60, category: 'CyberSecurity' },
    { name: 'Windows', level: 80, category: 'Operating Systems' },
    { name: 'Linux', level: 80, category: 'Operating Systems' },
    { name: 'AWS', level: 80, category: 'Cloud' },
    { name: 'Azure', level: 50, category: 'Cloud' },
    { name: 'Docker', level: 78, category: 'DevOps' },
    { name: 'Kubernetes', level: 60, category: 'DevOps' },
    { name: 'Jenkins', level: 40, category: 'DevOps' },
    { name: 'Git', level: 92, category: 'Tools' },
    { name: 'VS Code', level: 92, category: 'Tools' }
    
  ];

  const categories = ['Web_Dev', 'CyberSecurity', 'Operating Systems', 'Cloud', 'DevOps', 'Tools'];

  const getCategorySkills = (category) => 
    skills.filter(skill => skill.category === category);

  return (
    <section id="skills" ref={sectionRef} className="skills">
      <div className="container">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2>
            My <span className="highlight">Skills</span>
          </h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            A comprehensive overview of my technical expertise and proficiency levels across different technologies.
          </p>
        </div>

        <div className="skills-categories-grid">
          {categories.map((category, categoryIndex) => (
            <div
              key={category}
              className={`skill-category-card ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 0.1 + 0.3}s` }}
            >
              <h3 className="skill-category-title">
                {category}
              </h3>
              
              <div className="skill-list">
                {getCategorySkills(category).map((skill) => (
                  <div key={skill.name} className="skill-progress-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">
                        {animatedSkills.has(skill.name) ? `${skill.level}%` : '0%'}
                      </span>
                    </div>
                    
                    <div className="skill-progress-bar">
                      <div
                        className={`skill-progress-fill ${
                          animatedSkills.has(skill.name) ? 'skill-glow' : ''
                        }`}
                        style={{
                          width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%',
                          transitionDelay: '0.2s'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className={`additional-skills-section ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          <h3 className="additional-skills-title">
            Additional Technologies & Tools
          </h3>
          
          <div className="additional-skills-grid">
            {[
              'MySQL', 'SaaS', 'InfoSec', 'Burp Suite', 'Nmap', 'IaC',
              'Java', 'Bash', 'CCNA', 'Vercel', 'Canva', 'Metasploit'
            ].map((tech, index) => (
              <div
                key={tech}
                className="additional-skill-item"
                style={{ animationDelay: `${index * 0.05 + 0.8}s` }}
              >
                <span className="additional-skill-name">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;