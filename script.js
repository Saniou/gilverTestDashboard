document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
      observer.observe(element);
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar a')
    sidebarLinks.forEach((link, index) => {
      setTimeout(() => {
        link.classList.add('show')
      }, index * 100) // Затримка між пунктами для створення каскадного ефекту
    })
  })