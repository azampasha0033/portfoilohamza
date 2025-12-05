import './Portfolio.css'

const Portfolio = () => {
    const projects = [
        {
            title: 'WhatsApp AI Chatbot Platform',
            description: 'Built 50+ AI chatbot assistants for clients across education (Edarabia), wellness (Organicles), fashion (Vanya, Quiz Clothing), tours (Ibex Global), and more. Features include automated customer journeys, product catalogs, flow builders, and WhatsApp Business Cloud API integration.',
            tags: ['Node.js', 'WhatsApp API', 'AI Automation', 'MongoDB', 'React'],
            image: '/whatsapp-chatbot.png',
            badge: 'AI/SaaS Platform'
        },
        {
            title: 'WebRTC Voice Calling System',
            description: 'Engineered complete WebRTC-based WhatsApp call handling with multi-call support, live duration tracking, and real-time event flows. Features include mute/hangup controls, minimized UI, Socket.io-based updates, and browser audio stream processing.',
            tags: ['WebRTC', 'Socket.io', 'Node.js', 'React', 'Signaling Server'],
            image: '/webrtc-calling.png',
            badge: 'Real-Time System'
        },
        {
            title: 'SaaS Monitoring & DevOps Platform',
            description: 'Built comprehensive monitoring system using Prometheus, Grafana, and Loki for multi-client WhatsApp automation server. Includes real-time metrics, log aggregation, webhook alerts, APM integrations, Docker container monitoring, and session tracking.',
            tags: ['Prometheus', 'Grafana', 'Loki', 'Docker', 'CI/CD'],
            image: '/monitoring-dashboard.png',
            badge: 'DevOps/Monitoring'
        },
        {
            title: 'Multi-Industry AI Assistant Platform',
            description: 'Designed SaaS-level agent systems with user permissions, company/client hierarchy, and customer segmentation CRM similar to Respond.io. Built for education, wellness, finance, and retail industries with automated workflows and flow-driven interfaces.',
            tags: ['Next.js', 'MongoDB', 'AI/ML', 'Multi-Tenant', 'CRM Logic'],
            image: '/ai-platform.png',
            badge: 'AI/CRM Platform'
        },
        {
            title: 'Byrne Equipment Rental',
            description: 'Custom WordPress theme for Middle East\'s largest equipment rental company. Converted HTML designs to fully functional theme with equipment catalog, rental booking system, multi-location support, and advanced custom post types.',
            tags: ['WordPress', 'Custom Theme', 'PHP', 'ACF Pro'],
            image: '/byrne-rental-real.png',
            link: 'https://byrnerental.com/',
            badge: 'WordPress Theme'
        },
        {
            title: 'DialogPay Payment Gateway',
            description: 'Comprehensive WooCommerce payment gateway plugin with Apple Pay, Google Pay, and WhatsApp Commerce integration. Published on WordPress.org with active installations and 5-star reviews. Features automated customer journeys and payment flows.',
            tags: ['WordPress', 'WooCommerce', 'Payment APIs', 'WhatsApp API'],
            image: '/dialogpay.png',
            link: 'https://wordpress.org/plugins/dialogpay-payment-gateway-for-woocommerce/',
            badge: 'WordPress Plugin'
        },
        {
            title: 'Spacemaker UAE',
            description: 'Modern WordPress theme for modular building solutions company. Features custom post types, advanced filtering system, project gallery, and business system integrations. Built with responsive design and optimized performance.',
            tags: ['WordPress', 'Custom Theme', 'PHP', 'MySQL'],
            image: '/spacemaker-real.png',
            link: 'https://spacemaker.ae/',
            badge: 'WordPress Theme'
        },
        {
            title: 'Byrne Technical Services',
            description: 'Complete WordPress theme development from HTML mockups. Implemented responsive design, custom post types, solutions showcase, and service management functionality. Optimized for performance and SEO.',
            tags: ['WordPress', 'HTML to WP', 'PHP', 'Responsive'],
            image: '/byrne-technical-real.png',
            link: 'https://byrnetechnical.com/',
            badge: 'WordPress Theme'
        },
        {
            title: 'Custom POS & Inventory Systems',
            description: 'Developed multiple Point of Sale systems for retail and restaurants using Electron + React. Features include real-time inventory management, sales tracking, FIFO profit calculation, multi-user support, and payment gateway integration.',
            tags: ['Electron', 'React', 'Node.js', 'MySQL'],
            image: '/pos-system.png',
            badge: 'Desktop App'
        }
    ]

    return (
        <section className="section portfolio-section" id="portfolio">
            <div className="container">
                <div className="section-header">
                    <h2 className="gradient-text">Featured Projects</h2>
                    <p>Showcasing expertise in AI, SaaS, real-time systems, and enterprise solutions</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-badge">{project.badge}</div>
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="tech-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                        Visit Website →
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
