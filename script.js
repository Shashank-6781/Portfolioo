document.addEventListener('DOMContentLoaded', () => {
    // 1. Load Data from content.js
    loadPortfolioData();

    // 2. Setup Event Listeners
    setupNavbar();
    setupMobileMenu();
    setupAnimations();
});

function loadPortfolioData() {
    // We assume 'portfolioData' is available from content.js
    if (typeof portfolioData === 'undefined') {
        console.error('Portfolio data not found. Make sure content.js is loaded.');
        return;
    }

    const { hero, about, skills, projects, contact } = portfolioData;

    // --- Hero Section ---
    document.getElementById('hero-name').textContent = hero.name;
    document.getElementById('hero-title').textContent = hero.title;
    document.getElementById('hero-tagline').textContent = hero.tagline;

    const heroButtons = document.getElementById('hero-buttons');
    hero.buttons.forEach(btn => {
        const button = document.createElement('a');
        button.href = btn.link;
        button.textContent = btn.text;
        button.className = `btn ${btn.primary ? 'primary-btn' : 'secondary-btn'}`;
        heroButtons.appendChild(button);
    });

    // --- About Section ---
    document.getElementById('about-title').textContent = about.title;
    document.getElementById('about-desc').textContent = about.description;

    const statsContainer = document.getElementById('about-stats');
    about.stats.forEach(stat => {
        const div = document.createElement('div');
        div.className = 'stat-item';
        div.innerHTML = `
            <span class="stat-number">${stat.number}</span>
            <span class="stat-label">${stat.label}</span>
        `;
        statsContainer.appendChild(div);
    });

    // --- Skills Section ---
    document.getElementById('skills-title').textContent = skills.title;
    const skillsContainer = document.getElementById('skills-container');

    skills.categories.forEach(category => {
        const div = document.createElement('div');
        div.className = 'skill-category glass-card';
        // Create tags HTML
        const tagsHtml = category.items.map(item =>
            `<span class="skill-tag">${item}</span>`
        ).join('');

        div.innerHTML = `
            <h3>${category.name}</h3>
            <div class="skill-tags">
                ${tagsHtml}
            </div>
        `;
        skillsContainer.appendChild(div);
    });

    // --- Projects Section ---
    document.getElementById('projects-title').textContent = projects.title;
    const projectsGrid = document.getElementById('projects-grid');

    projects.items.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        // Tags HTML
        const tagsHtml = project.tags.map(tag =>
            `<span class="project-tag">${tag}</span>`
        ).join('');

        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${tagsHtml}
                </div>
                <a href="${project.link}" class="btn primary-btn project-link">View Project</a>
            </div>
        `;
        projectsGrid.appendChild(card);
    });

    // --- Contact Section ---
    document.getElementById('contact-title').textContent = contact.title;
    document.getElementById('contact-desc').textContent = contact.description;

    const emailLink = document.getElementById('contact-email');
    emailLink.href = `mailto:${contact.email}`;
    emailLink.textContent = contact.email;

    const socialLinks = document.getElementById('social-links');
    contact.socialLinks.forEach(social => {
        const a = document.createElement('a');
        a.href = social.url;
        a.className = 'social-icon';
        a.setAttribute('aria-label', social.label);
        a.innerHTML = `<i class="${social.icon}"></i>`;
        socialLinks.appendChild(a);
    });

    // --- Footer ---
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('footer-name').textContent = hero.name;
}

function setupNavbar() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });
}

function setupMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('active');

            // Toggle icon
            const icon = btn.querySelector('i');
            if (menu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');

                // Mobile menu styling injected dynamically to keep CSS clean
                menu.style.display = 'flex';
                menu.style.flexDirection = 'column';
                menu.style.justifyContent = 'center';
                menu.style.alignItems = 'center';
                menu.style.position = 'fixed';
                menu.style.top = '0';
                menu.style.left = '0';
                menu.style.width = '100%';
                menu.style.height = '100vh';
                menu.style.background = 'rgba(10, 10, 15, 0.98)';
                menu.style.zIndex = '999';
                menu.style.gap = '2rem';

                // Style links
                const links = menu.querySelectorAll('.mobile-link');
                links.forEach(link => {
                    link.style.color = '#fff';
                    link.style.fontSize = '1.5rem';
                    link.style.textDecoration = 'none';
                });
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                menu.style.display = 'none';
            }
        });
    }
}

function setupAnimations() {
    // Simple intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-header, .glass-card, .project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Add class for animation
    const style = document.createElement('style');
    style.textContent = `
        .fade-in-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}
