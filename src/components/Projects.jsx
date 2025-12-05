import { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'YooztApp',
            category: 'web',
            description: 'E-commerce website with main motive to find used tires to the nearest Location. Where Shop keepers Buy space to list there Tires & People find them Visit them and Buy the tires.',
            image: '/yoozt.png',
            technologies: ['PHP', 'HTML/CSS', 'Bootstrap', 'jQuery', 'MySQL'],
            link: 'https://yoozt.app/',
            github: null,
            features: [
                'Location-based tire search',
                'Shop management system',
                'User & vendor portals',
                'Real-time inventory'
            ]
        },
        {
            id: 2,
            title: 'Graphics POS',
            category: 'desktop',
            description: 'Accounting software for Graphics Industry which manages their Sales, Profit/Purchases, Expanses etc. Developed with PHP Desktop Application.',
            image: '/graphics-pos.png',
            technologies: ['PHP', 'CSS', 'Bootstrap', 'jQuery', 'MySQL'],
            link: null,
            github: null,
            features: [
                'Sales & inventory management',
                'Profit/Loss tracking',
                'Expense management',
                'Desktop application'
            ]
        },
        {
            id: 3,
            title: 'Coach Finder',
            category: 'mobile',
            description: 'Application for Coach Finder for Football, Basketball etc. which display the Location of Coach Parents Pay them Online and Teachings.',
            image: '/coach-finder.png',
            technologies: ['PHP', 'HTML/CSS', 'Bootstrap', 'jQuery', 'Google Maps'],
            link: null,
            github: null,
            features: [
                'Coach location mapping',
                'Online payment integration',
                'Booking system',
                'Multi-sport support'
            ]
        },
        {
            id: 4,
            title: 'Mobiles Ghar',
            category: 'mobile',
            description: 'Android application for buying and selling used mobile phones. Web to Android conversion with full e-commerce functionality.',
            image: null,
            technologies: ['PHP', 'Android', 'MySQL', 'REST API'],
            link: 'https://play.google.com/store/apps/details?id=com.cu4soft.v1.mobilesghar.mobilesghar',
            github: null,
            features: [
                'Mobile marketplace',
                'User authentication',
                'Product listings',
                'In-app messaging'
            ]
        },
        {
            id: 5,
            title: '7th Sky Digital Marketing',
            category: 'web',
            description: 'Complete digital marketing agency website with portfolio showcase, service listings, and client management.',
            image: null,
            technologies: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
            link: 'https://www.panaflex.7thsky.com.pk/',
            github: null,
            features: [
                'Portfolio showcase',
                'Service management',
                'Contact forms',
                'SEO optimized'
            ]
        },
        {
            id: 6,
            title: 'AllSimchas',
            category: 'web',
            description: 'Digital invitation platform for events and celebrations with customizable templates and RSVP management.',
            image: null,
            technologies: ['PHP', 'MySQL', 'jQuery', 'Bootstrap'],
            link: 'https://allsimchas.com/shop.php',
            github: null,
            features: [
                'Event management',
                'Custom invitations',
                'RSVP tracking',
                'Payment integration'
            ]
        }
    ];

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'web', label: 'Web Apps' },
        { id: 'mobile', label: 'Mobile Apps' },
        { id: 'desktop', label: 'Desktop Apps' },
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className="section projects">
            <div className="bg-gradient-radial purple" style={{ top: '10%', right: '20%' }}></div>

            <div className="container">
                <div className="section-title">
                    <h2>Featured Projects</h2>
                    <p>A showcase of my recent work and successful projects</p>
                </div>

                <div className="project-filters">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                            onClick={() => setFilter(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card glass-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-image">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ) : (
                                    <div className="project-placeholder">
                                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                            <line x1="8" y1="21" x2="16" y2="21"></line>
                                            <line x1="12" y1="17" x2="12" y2="21"></line>
                                        </svg>
                                    </div>
                                )}
                                <div className="project-overlay">
                                    <div className="project-links">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link-btn"
                                                title="View Live"
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                    <polyline points="15 3 21 3 21 9"></polyline>
                                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                                </svg>
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link-btn"
                                                title="View Code"
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <div className="project-header">
                                    <h3>{project.title}</h3>
                                    <span className={`project-badge ${project.category}`}>
                                        {project.category}
                                    </span>
                                </div>

                                <p className="project-description">{project.description}</p>

                                <div className="project-features">
                                    {project.features.map((feature, i) => (
                                        <span key={i} className="feature-tag">
                                            ✓ {feature}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-tech">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
