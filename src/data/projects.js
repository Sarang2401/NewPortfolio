import artemis from '../assets/artemis.png';
import devdock from '../assets/devdock.png';
import ResponseForge from '../assets/ResponseForge.png';

const projects = [
  {
    name: 'TraceLens',
    category: 'AI / Observability',
    tagline: 'AI-powered root cause analysis using RAG and vector search.',
    description:
      'Built a RAG pipeline with vector embeddings to analyze distributed system failures. Designed a FastAPI-based microservice deployed on AWS Lambda for scalable, stateless inference. Implemented vector similarity search with cosine scoring to identify failure patterns.',
    outcomes: ['Automated debugging', 'Serverless AWS deployment', 'High-confidence AI scoring'],
    tech: ['FastAPI', 'AWS Lambda', 'Sentence-Transformers', 'RAG', 'Vector Search'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop', // Data visualization placeholder
    githubLink: 'https://github.com/Sarang2401', // Replace with actual link
    featured: true,
  },
  {
    name: 'LexVault',
    category: 'Full-Stack / GenAI',
    tagline: 'Smart Legal Document Manager with AI-based search.',
    description:
      'Engineered a document intelligence system featuring rigorous version tracking and audit history. Designed a complex PostgreSQL schema for efficient retrieval. Built out REST APIs with a React dashboard, establishing the foundation for embedding-based semantic search.',
    outcomes: ['Full audit history', 'Complex Relational Schema', 'React + FastAPI Stack'],
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Embeddings', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop', // Law/document placeholder
    githubLink: 'https://github.com/Sarang2401', // Replace with actual link
    featured: false,
  },
  {
    name: 'HFT Latency Platform',
    category: 'Systems / DevOps',
    tagline: 'Sub-millisecond UDP ingestion pipeline for high-frequency trading.',
    description:
      'Architected a low-latency UDP ingestion pipeline tracking P50/P95/P99 latency metrics. Containerized a multi-service Go architecture using Docker and Kubernetes, paired with Prometheus histograms and Grafana dashboards for real-time observability.',
    outcomes: ['Sub-millisecond tracking', 'Real-time Grafana dashboards', 'K8s Orchestration'],
    tech: ['Go', 'Kubernetes', 'Docker', 'Prometheus', 'Grafana', 'UDP'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop', // Trading/dashboard placeholder
    githubLink: 'https://github.com/Sarang2401', // Replace with actual link
    featured: false,
  },
  {
    name: 'ARTEMIS',
    category: 'Security Platform',
    tagline: 'Enterprise-grade threat detection & response framework.',
    description:
      'Unified cybersecurity platform integrating real-time threat intelligence, automated incident response, and red-teaming capabilities. Engineered for enterprise scalability — cutting mean time-to-detect by 60% vs manual workflows.',
    outcomes: ['60% faster threat detection', 'Automated IR playbooks', 'Red-team ready'],
    tech: ['Python', 'FastAPI', 'Docker', 'OWASP', 'ML Anomaly Detection'],
    image: artemis,
    githubLink: 'https://github.com/Sarang2401/Artemis',
    featured: false,
  },
  {
    name: 'DevDock',
    category: 'DevOps Pipeline',
    tagline: 'Zero-touch CI/CD from commit to production.',
    description:
      'Fully automated DevOps pipeline for cloud-native applications. Integrates AWS, Docker, Terraform, and GitHub Actions to deliver end-to-end CI/CD — eliminating manual deployment steps and reducing release cycles from hours to minutes.',
    outcomes: ['Zero manual deployments', 'Infrastructure-as-Code with Terraform', 'Multi-env support'],
    tech: ['AWS', 'Docker', 'Terraform', 'GitHub Actions', 'Jenkins'],
    image: devdock,
    githubLink: 'https://github.com/Sarang2401/DevDock',
    featured: false,
  },
  {
    name: 'Response Forge',
    category: 'GRC Automation',
    tagline: 'AI-generated incident response plans in minutes.',
    description:
      'Streamlines Governance, Risk & Compliance operations by auto-generating NIST 800-series aligned Incident Response plans. Reduces compliance planning time from weeks to minutes, producing audit-ready playbooks at scale.',
    outcomes: ['NIST 800 aligned output', 'Minutes vs weeks planning time', 'Audit-ready PDFs'],
    tech: ['Python', 'LLM Integration', 'FastAPI', 'React', 'NIST Framework'],
    image: ResponseForge,
    githubLink: 'https://github.com/Sarang2401/ResponseForge',
    featured: false,
  },
];

export default projects;