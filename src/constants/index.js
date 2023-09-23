import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    universityTimesSite,
    nodeWeatherApp,
    emailFormSite,
    simonGameDemo,
    pongDemo,
    sass,
    html,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    firebase,
    swift,
    github,
    utlogo,
    armylab,
    adobexd,
    threejs,
    bitcoinTicker,
    linkeidn,
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
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "SASS",
        icon: sass,
    },
    {
        name: "JavaScript",
        icon: javascript,
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
        name: "Swift",
        icon: swift,
    },
    {
        name: "Adobe XD",
        icon: adobexd,
    },
    {
        name: "Firebase",
        icon: firebase,
    },
    {
        name: "GitHub",
        icon: github,
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
        name: "University Times",
        description:
            "California State University Los Angeles student run website where weekly news is posted by journalists. Used PHP, JavaScript, and WordPress achieved a 40% faster loading time and added various modern new UI elements.",
        tags: [
            {
                name: "JavaScript",
                color: "text-yellow-400",
            },
            {
                name: "PHP",
                color: "text-indigo-300",
            },
            {
                name: "CSS",
                color: "text-cyan-500"
            }
        ],
        image: universityTimesSite,
        source_code_link: "https://csulauniversitytimes.com/",
        source_image: utlogo,
    },
    {
        name: "Simon JavaScript Game",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "JavaScript",
                color: "text-yellow-400",
            },
            {
                name: "BootStrap",
                color: "text-cyan-500",
            },
        ],
        image: simonGameDemo,
        source_code_link: "https://github.com/JayDevelops/simon-game",
        source_image: github,
    },
    {
        name: "Swift Pong Game",
        description:
            "A simple retro pong game where you are battling a CPU, can you reach a high score? New features such as an end screen and starting screen will come soon. There's Easy, Medium, Hard, or 2 Player Mode!",
        tags: [
            {
                name: "Swift",
                color: "text-orange-400",
            },
        ],
        image: pongDemo,
        source_code_link: "https://github.com/JayDevelops/pongGame-master",
        source_image: github,
    },
    {
        name: "BitCoin Ticker",
        description:
            "This simple Swift App lets you find the current Bitcoin value in whichever currency you pick this uses retrieved JSON and an API that I coded on Xcode.",
        tags: [
            {
                name: "Swift",
                color: "text-orange-400",
            },
        ],
        image: bitcoinTicker,
        source_code_link: "https://github.com/JayDevelops/bitcoinAppTracker/tree/master",
        source_image: github,
    },
    {
        name: "Node Email Site",
        description:
            "Web application which checks whether contact information is in correct format, if not then sends them to a failure.html to the client side- created through the use of JavaScript, HTML, BootStrap and Node.js.",
        tags: [
            {
                name: "Node.js",
                color: "text-yellow-400",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "SASS",
                color: "pink-text-gradient",
            },
            {
                name: "BootStrap",
                color: "text-cyan-500",
            }
        ],
        image: emailFormSite,
        source_code_link: "https://github.com/JayDevelops/newsletter-signup",
        source_image: github,
    },
];

const footerLinks = [
    {
        title: "Social Media",
        items: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/jesusperezarias/",
                font_icon: "fa-brands fa-linkedin fa-beat",
                color: "#0433ff"
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/jay.develops/",
                font_icon: "fa-brands fa-instagram fa-beat",
                color: "#ad300"
            },
            {
                name: "GitHub",
                url: "https://github.com/JayDevelops",
                font_icon: "fa-brands fa-github fa-github fa-beat",
                color: "#444444"
            },
            {
                name: "Twitter",
                url: "https://twitter.com/jay_develops_",
                font_icon: "fa-brands fa-twitter fa-beat",
                color: "#00fdff",
            },
        ],
    },
];

export { services, technologies, experiences, testimonials, projects, footerLinks };