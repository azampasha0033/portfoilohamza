import './Portfolio.css'

const Portfolio = () => {
    const projects = [
        {
            title: 'Custom Shopify Store',
            description:
                'A fully customized Shopify store with advanced product filtering, custom checkout flow, and integrated inventory management.',
            tags: ['Shopify', 'E-Commerce', 'JavaScript'],
            link: '#',
        },
        {
            title: 'WooCommerce Integration Plugin',
            description:
                'Custom WordPress plugin for seamless WooCommerce integration with WhatsApp Business API for order management.',
            tags: ['WordPress', 'Plugin', 'PHP'],
            link: '#',
        },
        {
            title: 'Full-Stack Web Application',
            description:
                'Modern web application with React frontend and Node.js backend, featuring real-time updates and comprehensive admin dashboard.',
            tags: ['React', 'Node.js', 'MongoDB'],
            link: '#',
        },
    ]

    return (
        <section className="section portfolio-section" id="portfolio">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">My work</span>
                    <h2 className="section-title">Featured Projects</h2>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="portfolio-item">
                            <div className="portfolio-image">
                                <div className="image-placeholder">
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                                        <rect width="100" height="100" fill="url(#projectGradient)" />
                                        <defs>
                                            <linearGradient id="projectGradient" x1="0" y1="0" x2="100" y2="100">
                                                <stop offset="0%" stopColor="#667eea" />
                                                <stop offset="100%" stopColor="#764ba2" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="image-overlay">
                                    <a href={project.link} className="view-project">
                                        View Project →
                                    </a>
                                </div>
                            </div>

                            <div className="portfolio-info">
                                <div className="portfolio-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="portfolio-title">{project.title}</h3>
                                <p className="portfolio-description">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
