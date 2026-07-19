import artemis from '../assets/artemis.png';
import devdock from '../assets/devdock.png';
import ResponseForge from '../assets/ResponseForge.png';

const projects = [
  {
    name: 'TraceLens',
    category: 'Observability / Systems',
    tagline: 'Root cause analysis tool for distributed system failures.',
    description:
      'Built a failure analysis pipeline using vector embeddings to correlate distributed system logs and surface recurring failure patterns. Deployed as a FastAPI microservice on AWS Lambda for stateless, scalable inference, with cosine similarity scoring to rank potential root causes.',
    outcomes: ['Automated debugging', 'Serverless AWS deployment', 'Similarity-based scoring'],
    tech: ['FastAPI', 'AWS Lambda', 'Sentence-Transformers', 'PostgreSQL', 'Vector Search'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    githubLink: 'https://github.com/Sarang2401',
    featured: true,
  },
  {
    name: 'LexVault',
    category: 'Full-Stack / Document Intelligence',
    tagline: 'Legal document manager with semantic search capabilities.',
    description:
      'Engineered a document management system with version tracking, audit history, and a complex PostgreSQL schema for efficient retrieval. Built REST APIs and a React dashboard, with the backend wired for embedding-based semantic search on document content.',
    outcomes: ['Full audit history', 'Complex Relational Schema', 'React + FastAPI Stack'],
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Embeddings', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop',
    githubLink: 'https://github.com/Sarang2401',
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
      'Unified cybersecurity platform integrating real-time threat intelligence, automated incident response, and red-teaming capabilities. Engineered for enterprise scalability - cutting mean time-to-detect by 60% vs manual workflows.',
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
      'Fully automated DevOps pipeline for cloud-native applications. Integrates AWS, Docker, Terraform, and GitHub Actions to deliver end-to-end CI/CD - eliminating manual deployment steps and reducing release cycles from hours to minutes.',
    outcomes: ['Zero manual deployments', 'Infrastructure-as-Code with Terraform', 'Multi-env support'],
    tech: ['AWS', 'Docker', 'Terraform', 'GitHub Actions', 'Jenkins'],
    image: devdock,
    githubLink: 'https://github.com/Sarang2401/DevDock',
    featured: false,
  },
  {
    name: 'Response Forge',
    category: 'GRC Automation',
    tagline: 'Auto-generate NIST-aligned incident response plans.',
    description:
      'Streamlines Governance, Risk & Compliance operations by generating NIST 800-series aligned Incident Response plans from structured inputs. Reduces compliance planning time significantly, producing audit-ready playbooks as PDF exports.',
    outcomes: ['NIST 800 aligned output', 'Faster planning cycles', 'Audit-ready PDFs'],
    tech: ['Python', 'LLM Integration', 'FastAPI', 'React', 'NIST Framework'],
    image: ResponseForge,
    githubLink: 'https://github.com/Sarang2401/ResponseForge',
    featured: false,
  },
];

export default projects;