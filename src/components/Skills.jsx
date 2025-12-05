import { useState } from 'react';
import './Skills.css';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const skillsData = {
        languages: [
            { name: 'PHP', level: 95, icon: '🐘' },
            { name: 'JavaScript', level: 85, icon: '⚡' },
            { name: 'HTML', level: 95, icon: '🌐' },
            { name: 'CSS', level: 90, icon: '🎨' },
            { name: 'MySQL', level: 90, icon: '🗄️' },
            { name: 'C & C++', level: 75, icon: '💻' },
        ],
        frameworks: [
            { name: 'WordPress', level: 95, icon: '📝' },
            { name: 'Shopify', level: 90, icon: '🛍️' },
            { name: 'React', level: 80, icon: '⚛️' },
            { name: 'jQuery', level: 85, icon: '📜' },
            { name: 'Bootstrap', level: 90, icon: '🅱️' },
            { name: 'Slim Framework', level: 80, icon: '🔧' },
        ],
        tools: [
            { name: 'Git', level: 85, icon: '🔀' },
            { name: 'Google Maps API', level: 85, icon: '🗺️' },
            { name: 'Jazz Cash API', level: 90, icon: '💳' },
            { name: 'Send Cloud API', level: 85, icon: '☁️' },
            { name: 'WP Plugin Dev', level: 95, icon: '🔌' },
            { name: 'REST API', level: 90, icon: '🔗' },
        ],
        other: [
            { name: 'PWA Development', level: 85, icon: '📱' },
            { name: 'Desktop Apps (PHP)', level: 80, icon: '🖥️' },
            { name: 'POS Systems', level: 90, icon: '💰' },
            { name: 'E-commerce', level: 90, icon: '🛒' },
            { name: 'Database Design', level: 90, icon: '🗃️' },
            { name: 'API Integration', level: 95, icon: '🔄' },
        ]
    };

    const categories = [
        { id: 'all', label: 'All Skills', icon: '🎯' },
        { id: 'languages', label: 'Languages', icon: '💬' },
        { id: 'frameworks', label: 'Frameworks', icon: '🏗️' },
        { id: 'tools', label: 'Tools & APIs', icon: '🛠️' },
        { id: 'other', label: 'Specializations', icon: '⭐' },
    ];

    const getSkillsToDisplay = () => {
        if (activeCategory === 'all') {
            return Object.values(skillsData).flat();
        }
        return skillsData[activeCategory] || [];
    };

    return (
        <section id="skills" className="section skills">
            <div className="bg-gradient-radial pink" style={{ top: '30%', left: '5%' }}></div>
            <div className="bg-gradient-radial blue" style={{ bottom: '20%', right: '5%' }}></div>

            <div className="container">
                <div className="section-title">
                    <h2>Skills & Expertise</h2>
                    <p>Technologies and tools I work with to build amazing solutions</p>
                </div>

                <div className="skills-categories">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <span className="category-icon">{category.icon}</span>
                            <span>{category.label}</span>
                        </button>
                    ))}
                </div>

                <div className="skills-grid">
                    {getSkillsToDisplay().map((skill, index) => (
                        <div
                            key={`${skill.name}-${index}`}
                            className="skill-card glass-card"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="skill-header">
                                <div className="skill-icon">{skill.icon}</div>
                                <div className="skill-info">
                                    <h4>{skill.name}</h4>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                            </div>
                            <div className="skill-bar">
                                <div
                                    className="skill-progress"
                                    style={{
                                        width: `${skill.level}%`,
                                        background: skill.level >= 90
                                            ? 'var(--gradient-success)'
                                            : skill.level >= 80
                                                ? 'var(--gradient-primary)'
                                                : 'var(--gradient-accent)'
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-summary">
                    <div className="summary-card glass-card">
                        <div className="summary-icon">
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                        </div>
                        <h3>Full Stack Expertise</h3>
                        <p>Proficient in both frontend and backend technologies with a strong focus on PHP development, WordPress, and Shopify platforms.</p>
                    </div>

                    <div className="summary-card glass-card">
                        <div className="summary-icon">
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                            </svg>
                        </div>
                        <h3>Performance Focused</h3>
                        <p>Building high-performance applications with optimized code, efficient database queries, and best practices.</p>
                    </div>

                    <div className="summary-card glass-card">
                        <div className="summary-icon">
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <h3>Team Collaboration</h3>
                        <p>Experienced in working with cross-functional teams, code reviews, and agile development methodologies.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
