import React from 'react';

const items = [
  'FastAPI', 'AWS Lambda', 'RAG Pipelines', 'Vector Search',
  'Python', 'CI/CD', 'LLMs', 'Docker', 'Kubernetes', 'GenAI',
  'System Design', 'PostgreSQL',
];

const Marquee = () => {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <span className="marquee-sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
