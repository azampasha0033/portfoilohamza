import './Services.css';

const Services = () => {
    const services = [
        {
            icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            ),
            title: 'Web Development',
            description: 'Custom web applications built with modern technologies. From personal websites to complex business applications.',
            features: ['Responsive Design', 'Custom Content', 'Admin Panel Control', 'SEO Optimized'],
            gradient: 'var(--gradient-primary)'
        },
        {
            icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
            ),
            title: 'WordPress Development',
            description: 'Expert WordPress plugin development and theme customization for powerful, scalable websites.',
            features: ['Plugin Development', 'Theme Customization', 'WooCommerce Integration', 'Performance Optimization'],
            gradient: 'var(--gradient-secondary)'
        },
        {
            icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
            ),
            title: 'Shopify Development',
            description: 'Complete Shopify store setup, customization, and app development for e-commerce success.',
            features: ['Store Setup', 'Custom Apps', 'Theme Development', 'API Integration'],
            gradient: 'var(--gradient-accent)'
        },
        {
            icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
            ),
            title: 'POS Systems',
            description: 'User-friendly Point of Sale systems with inventory management and profit/loss tracking.',
            features: ['User-Friendly GUI', 'Inventory Management', 'Profit/Loss Tracking', 'User Roles'],
            gradient: 'var(--gradient-success)'
        },
        {
            icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
            ),
            title: 'PWA Development',
            description: 'Progressive Web Apps that work on every device - Android, iOS, tablets, laptops & PCs.',
            features: ['Cross-Platform', 'Offline Support', 'Push Notifications', 'App-Like Experience'],
            gradient: 'var(--gradient-primary)'
        },
        {
            icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
            ),
            title: 'API Integration',
            description: 'Seamless integration of payment gateways and third-party APIs into your applications.',
            features: ['Stripe Payment', 'PayPal', 'JazzCash', 'EasyPaisa'],
            gradient: 'var(--gradient-accent)'
        }
    ];

    return (
        <section id="services" className="section services">
            <div className="bg-gradient-radial blue" style={{ top: '40%', left: '10%' }}></div>
            <div className="bg-gradient-radial pink" style={{ bottom: '20%', right: '15%' }}></div>

            <div className="container">
                <div className="section-title">
                    <h2>Services I Offer</h2>
                    <p>Comprehensive development solutions tailored to your business needs</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card glass-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="service-icon" style={{ background: service.gradient }}>
                                {service.icon}
                            </div>

                            <h3>{service.title}</h3>
                            <p className="service-description">{service.description}</p>

                            <ul className="service-features">
                                {service.features.map((feature, i) => (
                                    <li key={i}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="service-btn" onClick={() => {
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                Get Started
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                <div className="services-cta">
                    <div className="cta-content glass-card">
                        <h2>Need a Custom Solution?</h2>
                        <p>
                            Every project is unique. Let's discuss your specific requirements and create a
                            tailored solution that perfectly fits your business needs.
                        </p>
                        <div className="cta-buttons">
                            <button className="btn btn-primary" onClick={() => {
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                Start a Project
                            </button>
                            <a href="https://api.whatsapp.com/send?phone=923090230074&text=Hello%20Sir%20I%20have%20a%20Query%20regarding%20Development"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline">
                                WhatsApp Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
