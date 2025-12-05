import { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            name: 'IMA',
            company: 'International Media Advertising',
            role: 'Marketing Director',
            content: 'Hamza delivered an outstanding website for our advertising agency. His attention to detail and technical expertise exceeded our expectations. Highly recommended!',
            rating: 5,
            avatar: '🎯'
        },
        {
            name: 'All Simchas',
            company: 'Digital Invitation Platform',
            role: 'Founder',
            content: 'Working with Hamza was a pleasure. He built our digital invitation platform with excellent functionality and beautiful design. The project was completed on time and within budget.',
            rating: 5,
            avatar: '🎉'
        },
        {
            name: '7th Sky',
            company: 'Digital Marketing Agency',
            role: 'CEO',
            content: 'Hamza developed multiple projects for us including our panaflex printing website. His PHP expertise and problem-solving skills are exceptional. A true professional!',
            rating: 5,
            avatar: '🌟'
        },
        {
            name: 'Fatima Food',
            company: 'Food Makers Industry',
            role: 'Operations Manager',
            content: 'The POS system Hamza developed for us has streamlined our entire operation. Inventory management, sales tracking - everything works perfectly. Excellent work!',
            rating: 5,
            avatar: '🍽️'
        },
        {
            name: 'MobilesGhar',
            company: 'Used Mobiles Marketplace',
            role: 'Product Manager',
            content: 'Hamza converted our web application into a fully functional Android app. The app is smooth, user-friendly, and has received great feedback from our users.',
            rating: 5,
            avatar: '📱'
        },
        {
            name: 'YooztApp',
            company: 'International Tire Finder',
            role: 'Co-Founder',
            content: 'Hamza built our international tire marketplace from scratch. The location-based search and vendor management system work flawlessly. Outstanding developer!',
            rating: 5,
            avatar: '🚗'
        },
        {
            name: 'FF Traders',
            company: 'Dry Food Trading Company',
            role: 'Business Owner',
            content: 'Professional, reliable, and skilled. Hamza created a comprehensive inventory management system for our trading business. Couldn\'t be happier with the results!',
            rating: 5,
            avatar: '📦'
        }
    ];

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="section testimonials">
            <div className="bg-gradient-radial purple" style={{ top: '20%', right: '5%' }}></div>

            <div className="container">
                <div className="section-title">
                    <h2>Happy Clients</h2>
                    <p>What my clients say about working with me</p>
                </div>

                <div className="testimonials-container">
                    <button className="testimonial-nav prev" onClick={prevTestimonial} aria-label="Previous testimonial">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    <div className="testimonials-slider">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`testimonial-card glass-card ${index === activeIndex ? 'active' : ''
                                    } ${index < activeIndex ? 'prev' : ''} ${index > activeIndex ? 'next' : ''}`}
                            >
                                <div className="quote-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                    </svg>
                                </div>

                                <div className="testimonial-rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className="testimonial-content">{testimonial.content}</p>

                                <div className="testimonial-author">
                                    <div className="author-avatar">{testimonial.avatar}</div>
                                    <div className="author-info">
                                        <h4>{testimonial.name}</h4>
                                        <p>{testimonial.role}</p>
                                        <p className="company">{testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="testimonial-nav next" onClick={nextTestimonial} aria-label="Next testimonial">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>

                <div className="testimonial-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="clients-grid">
                    <h3 className="clients-title gradient-text">Trusted By</h3>
                    <div className="clients-logos">
                        {testimonials.map((client, index) => (
                            <div key={index} className="client-logo glass-card">
                                <div className="client-icon">{client.avatar}</div>
                                <span>{client.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
