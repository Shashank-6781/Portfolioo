/**
 * PORTFOLIO CONFIGURATION - EDIT THIS FILE TO UPDATE YOUR SITE
 * 
 * This file contains all the text and data for your portfolio.
 * You can edit the text between the quotes (e.g., "Software Engineer")
 * to change what appears on the website.
 */

const portfolioData = {
    // === HERO SECTION ===
    hero: {
        name: "Shashank Yanamandra",
        title: "Full Stack Developer",
        tagline: "Building digital experiences that matter.",
        // The buttons that appear in the hero section
        buttons: [
            { text: "View Work", link: "#projects", primary: true },
            { text: "Contact Me", link: "#contact", primary: false }
        ]
    },

    // === ABOUT SECTION ===
    about: {
        title: "About Me",
        description: "I am a passionate developer with a love for clean code and modern design. I specialize in building responsive web applications that solve real-world problems. When I'm not coding, you can find me exploring new technologies or contributing to open source.",
        // Stats to show credibility (optional)
        stats: [
            { number: "", label: "Years Experience" },
            { number: "", label: "Projects Completed" },
            { number: "", label: "Happy Clients" }
        ]
    },

    // === SKILLS SECTION ===
    skills: {
        title: "My Skills",
        // Group your skills by category
        categories: [
            {
                name: "Frontend",
                items: ["HTML5", "CSS3/SCSS", "JavaScript (ES6+)", "React", "Vue.js", "Tailwind"]
            },
            {
                name: "Backend",
                items: ["Node.js", "Python", "REST APIs"]
            },
            {
                name: "Tools & DevOps",
                items: ["Git/GitHub", "Docker", "AWS", "Figma", "VS Code", "CI/CD"]
            },
            {
                name: "Programming Languages",
                items: ["Java", "C++", "C#", "Go", "Rust", "Python"] // Add your languages here
            }
        ]
    },

    // === PROJECTS SECTION ===
    projects: {
        title: "Featured Projects",
        items: [
            {
                title: "Depression Analysis using Python",
                description: "This project is used to check the depression among the people based on the given data and with the collected data using AI/ML.",
                tags: ["Python", "Artificial Intelligence", "Machine Learning"],
                link: "#", // Replace with your actual project URL
                image: "https://placehold.co/600x400/1e1e2e/6c5ce7?text=Project+1"
            },
            {
                title: "Pollen Grain Image Classification using Machine Learning",
                description: "This method used for classifying the pollen grain images into different types of pollen grains.",
                tags: ["Python", "Artificial Intelligence", "Machine Learning"],
                link: "#",
                image: "https://placehold.co/600x400/1e1e2e/00cec9?text=Project+2"
            },
            {
                title: "AI Image Generator",
                description: "An interface connecting to Stable Diffusion API to generate images from text prompts.",
                tags: ["Python", "Flask", "React"],
                link: "#",
                image: "https://placehold.co/600x400/1e1e2e/fd79a8?text=Project+3"
            }
        ]
    },

    // === CONTACT SECTION ===
    contact: {
        title: "Get In Touch",
        description: "Have a project in mind or just want to say hi? I'd love to hear from you.",
        email: "shashankyanamandra23@gmail.com",
        socialLinks: [
            { icon: "fab fa-github", url: "https://github.com/Shashank-6781", label: "GitHub", openInNewTab: true },
            { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/shashank-yanamandra-bb236b357/", label: "LinkedIn", openInNewTab: true }
        ]
    }
};
