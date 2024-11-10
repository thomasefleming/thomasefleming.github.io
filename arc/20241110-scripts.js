document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s ease";
        document.body.style.opacity = 1;
    }, 100);
});

function toggleMenu() {
    const menu = document.querySelector('.menu-items');
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

document.querySelectorAll('.header-link-main, .highlight-link').forEach(function(el) {
    el.addEventListener('touchstart', function() {
      el.classList.add('highlight-link-active');
    });
    el.addEventListener('touchend', function() {
      setTimeout(function() {
        el.classList.remove('highlight-link-active');
      }, 1000); // Highlight lasts for 1 second after click
    });
  });