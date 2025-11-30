// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.project-card, .skill-category');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Project data (could be expanded)
const projects = [
    {
        title: "Plateforme GENIUS",
        description: "Plateforme éducative cloud-native avec services IA et microservices",
        technologies: ["Kubernetes", "Angular", "Python", "TensorFlow", "Spring Boot"],
        features: [
            "8 microservices Spring Boot + Angular",
            "Services IA: reconnaissance faciale, quiz automatique",
            "Déploiement multi-cloud (OpenStack + Azure)",
            "Monitoring Prometheus/Grafana"
        ],
        links: {
            github: "#",
            demo: "#"
        }
    }
    // Add other projects here...
];

// Function to dynamically load projects
function loadProjects() {
    // Implementation for dynamic project loading
    console.log('Projects loaded:', projects);
}

// Initialize when page loads
window.addEventListener('load', loadProjects);