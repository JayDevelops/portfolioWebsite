import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    utlogo,
    armylab,
    adobexd,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full Stack Developer",
        icon: web,
    },
    {
        title: "Apple Swift Developer",
        icon: mobile,
    },
    {
        title: "WordPress Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "adobexd",
        icon: adobexd,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Front Stack Software Engineer",
        company_name: "CSULA University Times",
        icon: utlogo,
        iconBg: "#151515",
        date: "October 2019 - May 2023",
        points: [
            " Achieved  impressive decrease of over 40% in web application loading times through the strategic optimization of WordPress components using pure JavaScript," +
            " correlated with a comprehensive backend server overhaul utilizing Node.js and PHP.",
            "Worked closely and harmoniously with team members to bring exceptional UI/UX designs to life and produced an increase of 40% score on great web accessibility.",
            "Organized the team of content creators to implement excellent SEO strategies, including the use of targeted keywords, resulting in a 25% increase in website traffic.",
            "Successfully integrated Google AdSense, resulting in a remarkable 15% increase in profit compared to the previously employed static advertising approach.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Army Lab Corporation",
        icon: armylab,
        iconBg: "#151515",
        date: "August 2022 - May 2023",
        points: [
            "Collaborated effectively with eight professionals to modernize an audio-visual detection model, crucial for private military contractor drone software used in combat scenarios.",
            "Python Software Transformation for Higher Performance: Transformed legacy software into modern Python, resulting in a remarkable 30% increase in computational speed.",
            "Pioneered the development of Unity Graphical User Interface (GUI) component for combat personnel, eliminating the need to view underlying code in real-time, optimizing user experience, and increased operational efficiency by 40%.",
            "Ensured the successful completion of the project and meticulous attention, creating 100% new modern documentation.",
            "Encompassed comprehensive project deliverables and focused on facilitating seamless knowledge transfer, establishing future scalability, and reduced codebase by 30%.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };