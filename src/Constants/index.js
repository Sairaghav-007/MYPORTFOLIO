import { redserv } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Intern - Python Development",
        company_name: "Redserv Global Solutions Limited",
        icon: redserv,
        iconBg: "#accbe1",
        date: "June 2025 - July 2025",
        points: [
            "Developing Python scripts to extract email addresses and other relevant content from PDF attachments.",
            "Utilizing regular expressions (regex) for accurate pattern matching and data extraction.",
            "Ensuring code quality through testing, debugging, and providing maintainable solutions for recurring PDF/email processing tasks."
        ],
    }
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Email Extraction with PDF Attachment in Python',
        description: 'A Python-based automation that uses the Gmail API to fetch emails with PDF attachments, extracts invoice details using pdfplumber and PyPDF, and exports structured data to Excel using Python Dataframes.',
        link: 'https://github.com/Sairaghav-007/Email-Extraction-using-Python',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'ECommerce Website',
        description: 'Developed a modern e-commerce website using React and Vite. The site offers shopping experience with features like product listings, category-based filters, a smart search option, and a fully responsive design. With Tailwind CSS for styling, the interface looks clean, simple, and responsive design.',
        link: 'https://github.com/Sairaghav-007/ECOMMERCE',
    }
];