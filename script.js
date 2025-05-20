
// Simple tab functionality for schedule
document.addEventListener('DOMContentLoaded', function() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  
  const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
    
            const timelineItems = document.querySelectorAll('.timeline-item');
            
            tabBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remove active class from all buttons
                    tabBtns.forEach(b => b.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const day = this.getAttribute('data-day');
                    
                    // Show/hide timeline items based on selected day
                    timelineItems.forEach(item => {
                        if (day === 'all' || item.getAttribute('data-day') === day) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
            

    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
      }
    });
  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  const sections = document.querySelectorAll('section');

const observerOptions = {
root: null, // use viewport as reference
rootMargin: '0px',
threshold: 0.1 // trigger when at least 10% of the section is visible
};

const sectionObserver = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    // Optionally stop observing the section after it's been animated
    // sectionObserver.unobserve(entry.target);
  }
});
}, observerOptions);
// Observe all sections
sections.forEach(section => {
sectionObserver.observe(section);
});
});
