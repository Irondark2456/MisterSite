document.addEventListener('DOMContentLoaded', () => {
    // Curseur personnalisé
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
    
    // Effet sur les liens et boutons
    const links = document.querySelectorAll('a, button, .btn');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.opacity = '0.3';
        });
        
        link.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.opacity = '0.5';
        });
    });
    
    // Animation des éléments au scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.about-content, .bot-content, .contact-content, .tech-stack, .feature-list, .social-links');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    
    // Effet de parallaxe sur le fond
    const parallaxEffect = () => {
        const circles = document.querySelectorAll('.circle');
        
        window.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            circles.forEach((circle, index) => {
                const speed = (index + 1) * 20;
                const xPos = (0.5 - x) * speed;
                const yPos = (0.5 - y) * speed;
                
                circle.style.transform = `translate(${xPos}px, ${yPos}px)`;
            });
        });
    };
    
    parallaxEffect();
    
    // Animation du logo
    const animateLogo = () => {
        const logo = document.querySelector('.logo-text');
        const logoGlow = document.querySelector('.logo-glow');
        
        logo.addEventListener('mouseenter', () => {
            logoGlow.style.opacity = '0.7';
            logoGlow.style.filter = 'blur(10px)';
        });
        
        logo.addEventListener('mouseleave', () => {
            logoGlow.style.opacity = '0.4';
            logoGlow.style.filter = 'blur(20px)';
        });
    };
    
    animateLogo();
    
    // Navigation smooth scroll
    const navLinks = document.querySelectorAll('.nav-link, .hero-buttons a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Bouton Discord - Remplacer par votre lien d'invitation Discord
    const discordBtn = document.getElementById('https://discord.com/oauth2/authorize?client_id=1091243362645966848&permissions=8&scope=applications.commands+bot');
    
    discordBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remplacer par votre lien d'invitation Discord
        const discordInviteLink = 'https://discord.com/oauth2/authorize?client_id=1091243362645966848&permissions=8&scope=applications.commands+bot';
        
        window.open(discordInviteLink, '_blank');
    });
    
    // Animation des stats
    const animateStats = () => {
        const stats = document.querySelectorAll('.stat-value');
        
        const options = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-stat');
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        
        stats.forEach(stat => {
            observer.observe(stat);
        });
    };
    
    animateStats();
    
    // Animation des titres de section
    const animateSectionTitles = () => {
        const titles = document.querySelectorAll('.section-title');
        
        const options = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-title');
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        
        titles.forEach(title => {
            observer.observe(title);
        });
    };
    
    animateSectionTitles();
    
    // Effet de particules dans le fond (optionnel, peut être lourd sur certains appareils)
    const createParticles = () => {
        const hero = document.querySelector('.hero');
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Style aléatoire pour chaque particule
            particle.style.width = `${Math.random() * 3 + 1}px`;
            particle.style.height = particle.style.width;
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            
            // Position aléatoire
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Animation aléatoire
            const animationDuration = Math.random() * 20 + 10;
            particle.style.animation = `float ${animationDuration}s infinite alternate`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            hero.appendChild(particle);
        }
    };
    
    // Décommenter la ligne suivante pour activer l'effet de particules
    // createParticles();
    
    // Détection de l'appareil mobile pour désactiver le curseur personnalisé
    const isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    
    if (isMobile()) {
        cursor.style.display = 'none';
        document.body.style.cursor = 'auto';
    }
    
    // Animation initiale au chargement de la page
    animateOnScroll();
}); 
