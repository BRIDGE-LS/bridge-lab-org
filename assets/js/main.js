// Add smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    for (const link of navLinks) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    }
    
    // Form validation for contact form
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        let isValid = true;
        
        if (!nameInput.value.trim()) {
          isValid = false;
          highlightError(nameInput);
        } else {
          removeHighlight(nameInput);
        }
        
        if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
          isValid = false;
          highlightError(emailInput);
        } else {
          removeHighlight(emailInput);
        }
        
        if (!messageInput.value.trim()) {
          isValid = false;
          highlightError(messageInput);
        } else {
          removeHighlight(messageInput);
        }
        
        if (isValid) {
          // In a real implementation, you would send the form data to a server
          alert('Thank you for your message! We will get back to you soon.');
          contactForm.reset();
        }
      });
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
          highlightError(emailInput);
        } else {
          removeHighlight(emailInput);
          // In a real implementation, you would send the email to a server
          alert('Thank you for subscribing to our newsletter!');
          emailInput.value = '';
        }
      });
    }
    
    function highlightError(input) {
      input.style.borderColor = '#e74c3c';
    }
    
    function removeHighlight(input) {
      input.style.borderColor = '#ddd';
    }
    
    function isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });