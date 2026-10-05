export type Project = {
    slug: string;
    number: string;
    title: string;
    category: string;
    description: string;
    fullDescription: string;
    technologies: string[];
    features: string[];
    github?: string;
    liveDemo?: string;
};

export const projects: Project[] = [
    {
        slug: "university-hostel-management-system",
        number: "01",
        title: "University Hostel Management System",
        category: "University Final Project",
        description:
            "A web-based hostel management system designed to manage student applications, hostel allocation, rooms, beds, requests, fees, and administrative operations.",
        fullDescription:
            "University Hostel Management System is a full-stack web application developed to improve hostel administration and student hostel services. The system provides role-based access for students, wardens, and administrators and supports the complete hostel management workflow.",
        technologies: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "Express.js",
            "Microsoft SQL Server",
            "JWT",
            "REST API",
            "MVC",
            "Tailwind CSS",
        ],
        features: [
            "Student registration and login",
            "Student profile management",
            "Hostel application management",
            "Application review and approval",
            "Room and bed allocation",
            "Warden management",
            "Hostel requests",
            "Notifications",
            "Fee management",
            "Role-based access control",
        ],
        github: "https://github.com/wasugithub",
    },

    {
        slug: "unity-care",
        number: "02",
        title: "Unity-Care",
        category: "Academic Project",
        description:
            "A charity event and volunteer engagement platform connecting organizations, events, and volunteers.",
        fullDescription:
            "Unity-Care is a web application designed to support charity events and volunteer participation. The platform allows users to explore events and supports communication between organizations and volunteers.",
        technologies: [
            "Vue.js",
            "Node.js",
            "Express.js",
            "MySQL",
            "REST API",
        ],
        features: [
            "Charity event management",
            "Volunteer engagement",
            "Event browsing",
            "User management",
            "REST API integration",
        ],
        github: "https://github.com/wasugithub",
    },

    {
        slug: "naung-yoe-inventory-control-system",
        number: "03",
        title: "Naung Yoe Inventory Control System",
        category: "Internship Team Project",
        description:
            "An inventory management system developed as part of a five-person internship team at Naung Yoe Technologies.",
        fullDescription:
            "Naung Yoe Inventory Control System was developed during a professional internship at Naung Yoe Technologies Co., Ltd. The system was created as a team project using modern web and backend technologies.",
        technologies: [
            "Vue.js",
            "SQL Server",
            "C#",
            "Entity Framework Core",
        ],
        features: [
            "Inventory management",
            "Product management",
            "Order management",
            "Database integration",
            "Backend API development",
            "Team-based software development",
        ],
        github: "https://github.com/wasugithub",
    },

    {
        slug: "smart-campus-website",
        number: "04",
        title: "Smart Campus Website",
        category: "Academic Project",
        description:
            "A university-oriented website designed to provide campus information and a clean user experience.",
        fullDescription:
            "Smart Campus Website is an academic web project focused on presenting university and campus-related information through a simple and responsive website.",
        technologies: [
            "NEXT.js",
            "Tailwind.CSS",
            "Typescript",
            "Node.js",
            "Express.js",
            "MMSQL",
            "JWT",
            "REST-API",
            "MMSQL"
        ],
        features: [
            "Responsive web design",
            "Campus information",
            "Navigation",
            "Interactive user interface",
            "QR Based Attendence System"
        ],
        github: "https://github.com/wasugithub",
    },

    {
        slug: "tour-guide-website",
        number: "05",
        title: "Tour Guide Website",
        category: "Academic Project",
        description:
            "A tourism website providing information about destinations and travel-related content.",
        fullDescription:
            "Tour Guide Website is a frontend academic project designed to provide users with information about travel destinations through a simple and attractive web interface.",
        technologies: [
            "Node js",
            "Express.js",
            "JavaScript",
            "MYSQL"
        ],
        features: [
            "Destination information",
            "Responsive layout",
            "Interactive navigation",
            "Travel content presentation",
        ],
        github: "https://github.com/wasugithub",
    },

    {
        slug: "resume-analysis",
        number: "06",
        title: "Resume Analysis",
        category: "Academic Project",
        description:
            "A project exploring resume information analysis using Python and web technologies.",
        fullDescription:
            "Resume Analysis is an academic project that explores the analysis of resume information using programming and web technologies.",
        technologies: [
            "Python",
            "Web Technologies",
        ],
        features: [
            "Resume information analysis",
            "Data processing",
            "Web-based presentation",
        ],
        github: "https://github.com/wasugithub",
    },
];