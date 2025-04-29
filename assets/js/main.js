document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for fixed header
          behavior: 'smooth'
        });

        // Update URL hash without scrolling
        history.pushState(null, null, targetId);
      }
    });
  });

  // Tab navigation in research page
  const tabLinks = document.querySelectorAll('.tab-navigation a');
  if (tabLinks.length > 0) {
    tabLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove active class from all tabs
        tabLinks.forEach(tab => tab.classList.remove('active'));

        // Add active class to clicked tab
        this.classList.add('active');

        // Scroll to the section
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 120, // Account for header and tabs
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Header scroll behavior
  const header = document.querySelector('.site-header');
  let lastScrollPosition = 0;

  function handleScroll() {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScrollPosition = currentScrollPosition;
  }

  window.addEventListener('scroll', handleScroll);
});
