import Link from "next/link";

const projectData = {
  "university-hostel-management-system": {
    title: "University Hostel Management System",
    category: "University / Final Project",
    description:
      "A web-based hostel management system designed to manage student hostel applications, room and bed allocation, hostel administration, and student services.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Microsoft SQL Server",
      "JWT",
      "MVC",
    ],
    features: [
      "Student Registration and Login",
      "Student Profile Management",
      "Hostel Application",
      "Application Review",
      "Room and Bed Allocation",
      "Warden Management",
      "Student Requests",
      "Notifications",
      "Fee Management",
    ],
  },

  "unity-care": {
    title: "Unity-Care",
    category: "Academic Project",
    description:
      "A charity event and volunteer engagement platform designed to connect volunteers with charity activities and community events.",
    technologies: [
      "Vue.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST API",
    ],
    features: [
      "Volunteer Registration",
      "Charity Event Management",
      "Volunteer Engagement",
      "Event Information",
      "REST API Integration",
    ],
  },

  "naung-yoe-inventory-control-system": {
    title: "Naung Yoe Inventory Control System",
    category: "Internship Team Project",
    description:
      "An inventory control system developed as part of a professional internship team project.",
    technologies: [
      "Vue.js",
      "SQL Server",
      "C#",
      "Entity Framework Core",
    ],
    features: [
      "Inventory Management",
      "Order Management",
      "Database Integration",
      "REST API",
      "Team-based Software Development",
    ],
  },

  "smart-campus-website": {
    title: "Smart Campus Website",
    category: "Academic Project",
    description:
      "A university-oriented website developed to provide campus-related information.",
    technologies: [
      "NEXT.JS",
      "Tailwind.CSS",
      "Typescript",
      "Node.js",
      "Express.js",
      "MMSQL",
      "JWT",
      "REST-API",
      
    ],
    features: [
      "Responsive Website",
      "Campus Information",
      "Navigation",
      "Interactive Web Elements",
      "QR System"
    ],
  },

  "tour-guide-website": {
    title: "Tour Guide Website",
    category: "Academic Project",
    description:
      "A tourism website designed to provide information about travel destinations.",
    technologies: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "MYSQL"
    ],
    features: [
      "Destination Information",
      "Responsive Design",
      "Navigation",
      "Interactive Elements",
    ],
  },

  "resume-analysis": {
    title: "Resume Analysis",
    category: "Academic Project",
    description:
      "An academic project focused on analyzing resume information using programming and web technologies.",
    technologies: [
      "Python",
      "Web Technologies",
    ],
    features: [
      "Resume Data Processing",
      "Information Analysis",
      "Web-based Interface",
    ],
  },
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetails({
  params,
}: PageProps) {
  const { slug } = await params;

  const project =
    projectData[slug as keyof typeof projectData];

  if (!project) {
    return (
      <main>
        <h1>Project Not Found</h1>

        <Link href="/">
          ← Back to Portfolio
        </Link>
      </main>
    );
  }

  return (
    <main className="project-detail">
      <div className="container">
        <Link
          href="/#projects"
          className="back-link"
        >
          ← Back to Projects
        </Link>

        <div className="project-detail-header">
          <span className="project-detail-category">
            {project.category}
          </span>

          <h1>{project.title}</h1>

          <p className="project-detail-description">
            {project.description}
          </p>
        </div>

        <div className="detail-grid">
          <section className="detail-box">
            <h2>Technologies</h2>

            <div className="project-tech">
              {project.technologies.map(
                (technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                )
              )}
            </div>
          </section>

          <section className="detail-box">
            <h2>Key Features</h2>

            <ul>
              {project.features.map(
                (feature) => (
                  <li key={feature}>
                    {feature}
                  </li>
                )
              )}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}