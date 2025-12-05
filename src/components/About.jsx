import './About.css';

const About = () => {
    const experiences = [
        {
            company: 'CutSoft',
            role: 'Web Developer',
            period: '10/2022 - Present',
            location: 'Multan, Pakistan',
            highlights: [
                'Working as a developer using PHP for creating company\'s product',
                'Developing Point of Sales Software',
                'Developing Desktop application',
                'Web application to Android',
                'Progressive Web application'
            ]
        },
        {
            company: 'CodingIron',
            role: 'Back-end Developer / WordPress Developer',
            period: '09/2020 - 09/2022',
            location: 'Multan, Pakistan',
            highlights: [
                'Worked as a back-end developer editing PHP to develop company\'s new features',
                'WordPress theme customization',
                'WordPress Plugin Development',
                'Collaborated with cross-functional teams to implement various features'
            ]
        },
        {
            company: 'GENT Tec',
            role: 'Web Developer',
            period: '03/2019 - 09/2020',
            location: 'Multan, Pakistan',
            highlights: [
                'Working as a back-end developer using PHP to design and create different types of Software',
                'Designing & Collaboration with the Team Member',
                'Diagnosing Error and offer multiple better Solution'
            ]
        }
    ];

    const education = [
        {
            degree: 'Bachelor of Science in Information Technology (BS-IT)',
            institution: 'BZU (Bahauddin Zakariya University)',
            period: '2018 - 2022',
            location: 'Multan, Pakistan'
        },
        {
            degree: 'ICS',
            institution: 'Muslim College',
            period: '2016 - 2018',
            location: 'Multan, Pakistan'
        }
    ];

    return (
        <section id="about" className="section about">
            <div className="bg-gradient-radial purple" style={{ top: '20%', right: '10%' }}></div>

            <div className="container">
                <div className="section-title">
                    <h2>About Me</h2>
                    <p>Get to know more about my background and experience</p>
                </div>

                <div className="about-content">
                    <div className="about-intro glass-card">
                        <div className="about-intro-icon">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <h3>Muhammad Hamza Saleemi</h3>
                        <p className="about-location">📍 Mumtazabad, Multan, Pakistan</p>
                        <p className="about-bio">
                            I am a professional Back-end developer (PHP), who has been working in the industry for over 3.5 years.
                            I aim to gain experience and exposure using my skill sets, and be constantly challenged in order to
                            enhance and demonstrate my fullest potential.
                        </p>
                        <div className="about-contact-info">
                            <div className="contact-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <span>+92 309 0230074</span>
                            </div>
                            <div className="contact-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <span>muhammadhamzasaleemi5@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-details">
                        <div className="experience-section">
                            <h3 className="gradient-text">💼 Experience</h3>
                            <div className="timeline">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="timeline-item glass-card">
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h4>{exp.role}</h4>
                                            <p className="company">{exp.company} • {exp.location}</p>
                                            <p className="period">{exp.period}</p>
                                            <ul className="highlights">
                                                {exp.highlights.map((highlight, i) => (
                                                    <li key={i}>{highlight}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="education-section">
                            <h3 className="gradient-text">🎓 Education</h3>
                            <div className="education-grid">
                                {education.map((edu, index) => (
                                    <div key={index} className="education-card glass-card">
                                        <div className="education-icon">
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                            </svg>
                                        </div>
                                        <h4>{edu.degree}</h4>
                                        <p className="institution">{edu.institution}</p>
                                        <p className="period">{edu.period}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
