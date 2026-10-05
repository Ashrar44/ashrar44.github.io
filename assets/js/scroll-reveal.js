document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Section Reveal Logic
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(sec => observer.observe(sec));

    // 2. Auto-Hiding Navbar (Shows when cursor at top)
    const header = document.getElementById('mainHeader');
    
    document.addEventListener('mousemove', (e) => {
        if (e.clientY < 60) {
            header.classList.add('show');
        } else {
            // Only hide if the user isn't hovering over the navbar itself
            if (e.clientY > 100) {
                header.classList.remove('show');
            }
        }
    });

    // 3. Hamburger Menu Toggle (Optional)
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if(mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
/* =========================
   Typing Effect
   ========================= */
const text = "Hello, I’m Muhammed Ashrar";
let index = 0;
const speed = 80; // typing speed

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typed-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
