document.addEventListener('DOMContentLoaded', () => {
    
    // Typing Effect for Hero Section
    const typingElement = document.querySelector('.typing-text');
    const textArray = ["B.Tech Student", "AI in Drug Discovery", "Computational Biology Enthusiast"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = textArray[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            typeSpeed = 500; // Pause before typing new word
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // Start typing effect initially empty or after a delay
    typingElement.textContent = "";
    setTimeout(typeEffect, 1000);

    // Scroll Animations (Intersection Observer)
    const slideUpElements = document.querySelectorAll('.slide-up');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // only animate once
            }
        });
    }, observerOptions);

    slideUpElements.forEach(el => {
        scrollObserver.observe(el);
    });

    // Simple Form Submission Prevent Default
    const form = document.querySelector('.glass-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = "Message Sent!";
            btn.style.background = "linear-gradient(135deg, rgba(0, 255, 136, 0.6), rgba(0, 212, 255, 0.6))";
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = "";
                form.reset();
            }, 3000);
        });
    }
});
