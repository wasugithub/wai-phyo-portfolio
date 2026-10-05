import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const skills = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Vue.js",
    "Bootstrap",
    "Vuetify",
  ],

  Backend: [
    "Node.js",
    "Express.js",
    "C#",
    "Entity Framework Core",
    "REST API",
  ],

  Database: [
    "Microsoft SQL Server",
    "MySQL",
    "SQL",
    "Database Design",
  ],

  Tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Visual Studio",
    "Postman",
    "Swagger",
    "SSMS",
  ],

  Concepts: [
    "MVC Architecture",
    "REST API",
    "JWT Authentication",
    "CRUD",
    "Responsive Design",
  ],
};

const strengths = [
  "Problem Solving",
  "Teamwork",
  "Communication",
  "Adaptability",
  "Time Management",
  "Continuous Learning",
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* =========================================
            HERO
        ========================================= */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="hero-label">
                JUNIOR SOFTWARE DEVELOPER / WEB DEVELOPER
              </p>

              <h1>
                Wai Phyo
                <span> Paing</span>
              </h1>

              <p className="hero-description">
                I build practical and impactful web applications
                using modern web technologies.
              </p>

              <div className="hero-actions">
                <a
                  href="#projects"
                  className="btn btn-primary"
                >
                  View Projects
                </a>

                <a
                  href="/Wai-Phyo-Paing-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View CV
                </a>

                <a
                  href="/Wai-Phyo-Paing-CV.pdf"
                  download
                  className="btn btn-outline"
                >
                  Download CV
                </a>
              </div>

              <div className="hero-socials">
                <a
                  href="https://github.com/wasugithub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/wai-phyo-paing-12392a393"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>

                <a href="mailto:wpaing775@gmail.com">
                  Email
                </a>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <div className="hero-image-border">
                <img
                  src="/profile.jpg"
                  alt="Wai Phyo Paing"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            ABOUT
        ========================================= */}
        <section id="about" className="section about-section">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">ABOUT ME</p>

              <h2>
                Building practical solutions
                <br />
                through technology.
              </h2>
            </div>

            <div className="about-grid">
              <div className="about-main">
                <p>
                  Motivated Computer Science graduate from the
                  University of Computer Studies, Meiktila, with
                  a strong interest in web development and
                  software engineering.
                </p>

                <p>
                  Experienced in building full-stack web
                  applications using technologies such as
                  Next.js, Vue.js, Node.js, Express.js, C#, and
                  Microsoft SQL Server through academic projects
                  and a professional internship.
                </p>

                <p>
                  Eager to apply technical knowledge to
                  real-world projects, contribute to development
                  teams, and continue growing as a software
                  engineer.
                </p>
              </div>

              <div className="about-info">
                <div className="info-item">
                  <span>Location</span>
                  <strong>
                    Nay Pyi Taw, Myanmar
                  </strong>
                </div>

                <div className="info-item">
                  <span>Education</span>
                  <strong>
                    Bachelor of Computer Science
                  </strong>
                </div>

                <div className="info-item">
                  <span>University</span>
                  <strong>
                    University of Computer Studies, Meiktila
                  </strong>
                </div>

                <div className="info-item">
                  <span>Career Focus</span>
                  <strong>
                    Software / Web Development
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            STRENGTHS
        ========================================= */}
        <section className="section strengths-section">
          <div className="container">
            <div className="section-heading centered">
              <p className="section-label">
                PROFESSIONAL STRENGTHS
              </p>

              <h2>How I work</h2>

              <p>
                Skills that help me contribute effectively
                to development teams and real-world projects.
              </p>
            </div>

            <div className="strengths-list">
              {strengths.map((strength, index) => (
                <div
                  className="strength-item"
                  key={strength}
                >
                  <span>
                    0{index + 1}
                  </span>

                  <strong>{strength}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            SKILLS
        ========================================= */}
        <section id="skills" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">
                TECHNICAL SKILLS
              </p>

              <h2>Technologies I work with</h2>

              <p>
                A growing technical foundation across
                frontend, backend, databases, and development
                tools.
              </p>
            </div>

            <div className="skills-grid">
              {Object.entries(skills).map(
                ([category, skillList]) => (
                  <div
                    className="skill-card"
                    key={category}
                  >
                    <h3>{category}</h3>

                    <div className="skill-list">
                      {skillList.map((skill) => (
                        <span key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* =========================================
            PROJECTS
        ========================================= */}
        <section
          id="projects"
          className="section projects-section"
        >
          <div className="container">
            <div className="section-heading">
              <p className="section-label">
                SELECTED WORK
              </p>

              <h2>Featured Projects</h2>

              <p>
                A selection of academic, internship, and
                software development projects.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            EXPERIENCE
        ========================================= */}
        <section
          id="experience"
          className="section experience-section"
        >
          <div className="container">
            <div className="section-heading">
              <p className="section-label">
                EXPERIENCE
              </p>

              <h2>Professional Experience</h2>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker" />

                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <p className="timeline-period">
                        MAY 2026 — JULY 2026
                      </p>

                      <h3>
                        Software Development Intern
                      </h3>

                      <h4>
                        Naung Yoe Technologies Co., Ltd.
                      </h4>
                    </div>
                  </div>

                  <p>
                    Participated in a professional software
                    development internship and contributed to
                    the development of the Naung Yoe Inventory
                    Control System as part of a five-person
                    development team.
                  </p>

                  <p>
                    Worked with modern web and backend
                    technologies including Vue.js, Node.js,
                    Express.js, SQL Server, C#, and Entity
                    Framework Core.
                  </p>

                  <div className="experience-tags">
                    <span>Vue.js</span>
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>SQL Server</span>
                    <span>C#</span>
                    <span>EF Core</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            EDUCATION
        ========================================= */}
        <section
          id="education"
          className="section education-section"
        >
          <div className="container">
            <div className="section-heading">
              <p className="section-label">
                EDUCATION
              </p>

              <h2>Academic Background</h2>
            </div>

            <div className="education-item">
              <div className="education-year">
                2026
              </div>

              <div>
                <h3>
                  Bachelor of Computer Science
                </h3>

                <p>
                  University of Computer Studies,
                  Meiktila
                </p>

                <span>
                  Computer Science
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            CERTIFICATES
        ========================================= */}
        <section className="section certificates-section">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">
                ACHIEVEMENTS
              </p>

              <h2>Certificates & Awards</h2>
            </div>

            <div className="certificate-list">
              <div className="certificate-item">
                <div className="certificate-number">
                  01
                </div>

                <div>
                  <h3>
                    Internship Completion Certificate
                  </h3>

                  <p>
                    Naung Yoe Technologies Co., Ltd.
                  </p>
                </div>
              </div>

              <div className="certificate-item">
                <div className="certificate-number">
                  02
                </div>

                <div>
                  <h3>
                    Third Prize — Project Competition
                  </h3>

                  <p>
                    Scenario-based Design for Real World
                    System — Interior Home Decoration
                  </p>

                  <span>
                    August 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            RESUME
        ========================================= */}
        <section className="section resume-section">
          <div className="container">
            <div className="resume-box">
              <div>
                <p className="section-label">
                  RESUME
                </p>

                <h2>
                  Interested in working together?
                </h2>

                <p>
                  View my complete CV to learn more about
                  my education, skills, experience, and
                  projects.
                </p>
              </div>

              <div className="resume-actions">
                <a
                  href="/Wai-Phyo-Paing-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View CV
                </a>

                <a
                  href="/Wai-Phyo-Paing-CV.pdf"
                  download
                  className="btn btn-outline"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            CONTACT
        ========================================= */}
        <section
          id="contact"
          className="section contact-section"
        >
          <div className="container">
            <div className="section-heading centered">
              <p className="section-label">
                CONTACT
              </p>

              <h2>Let's connect</h2>

              <p>
                I am open to junior software development,
                web development, and entry-level technology
                opportunities.
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-card">
                <span className="contact-label">
                  EMAIL
                </span>

                <a href="mailto:wpaing775@gmail.com">
                  wpaing775@gmail.com
                </a>
              </div>

              <div className="contact-card">
                <span className="contact-label">
                  PHONE
                </span>

                <a href="tel:+959250701287">
                  +95 9250701287
                </a>

                <a href="tel:+959664636720">
                  +95 9664636720
                </a>
              </div>

              <div className="contact-card">
                <span className="contact-label">
                  LOCATION
                </span>

                <p>
                  ZabuThiri Township,
                  <br />
                  Nay Pyi Taw, Myanmar
                </p>
              </div>
            </div>

            <div className="contact-actions">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=wpaing775@gmail.com&su=Job%20Opportunity%20for%20Wai%20Phyo%20Paing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Email Me
              </a>

              <a
                href="https://github.com/wasugithub"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/wai-phyo-paing-12392a393"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================
          FOOTER
      ========================================= */}
      <footer>
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} Wai Phyo Paing.
            All rights reserved.
          </p>

          <p>
            Built with Next.js & TypeScript.
          </p>
        </div>
      </footer>
    </>
  );
}