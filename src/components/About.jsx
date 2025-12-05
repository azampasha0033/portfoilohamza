import './About.css'

function About() {
    const experiences = [
        {
            title: "Senior Full Stack Developer",
            company: "DialogPay & Grafdom",
            period: "Oct 2024 - Present",
            description: "Leading WordPress and Shopify development for international clients at Grafdom. Developed DialogPay payment gateway plugin with WhatsApp Commerce integration, published on WordPress.org. Built custom themes for Byrne Equipment Rental, Spacemaker, and Byrne Technical Services. Created AI chatbot assistants and automation solutions for multiple industries."
        },
        {
            title: "WordPress Developer",
            company: "Visemtion",
            period: "Jul 2024 - Oct 2024",
            description: "Specialized in WordPress theme and plugin development. Built custom solutions for clients, implemented advanced features, and optimized website performance. Worked on e-commerce platforms and business websites with complex requirements."
        },
        {
            title: "Back-end Developer + WordPress Developer",
            company: "Codingtron - Multan, Pakistan",
            period: "Jul 2023 - Jul 2024",
            description: "Developed backend systems using Node.js and PHP. Built WordPress custom themes and plugins, WooCommerce customizations, and REST API integrations. Created ERP modules, inventory management systems, and automated workflows for various clients."
        },
        {
            title: "IT Support Officer",
            company: "Pepsi Shamim & CO - Multan, Pakistan",
            period: "Sep 2022 - Jul 2023",
            description: "Provided comprehensive IT support and system administration. Managed network infrastructure, troubleshot technical issues, and maintained business systems. Developed internal tools and automation scripts to improve operational efficiency."
        },
        {
            title: "Web Developer",
            company: "Cu4Soft - Multan, Pakistan",
            period: "Sep 2020 - Sep 2022",
            description: "Developed custom web applications, e-commerce platforms, and business management systems. Built POS systems for retail and restaurants, inventory management solutions, and customer portals. Gained expertise in full-stack development and database design."
        },
        {
            title: "Web Developer",
            company: "GENTec - Multan, Pakistan",
            period: "Mar 2019 - Sep 2020",
            description: "Started professional journey building WordPress websites, custom plugins, and themes. Developed solutions for real estate, directories, and business websites. Learned modern web development practices, PHP, MySQL, JavaScript, and responsive design principles."
        }
    ]

    return (
        <section id="experience" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="gradient-text">Professional Journey</h2>
                    <p>Building exceptional digital solutions across AI, SaaS, and enterprise systems</p>
                </div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>{exp.title}</h3>
                                <span className="company">{exp.company}</span>
                                <p>{exp.description}</p>
                            </div>
                            <div className="timeline-date">
                                <span>{exp.period}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
