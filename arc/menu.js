document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('.page-header');
    if (header) {
        // Create the hamburger icon and menu container dynamically
        const menuButton = document.createElement('button');
        menuButton.className = 'hamburger-icon';
        menuButton.innerHTML = 'thomas e fleming |';
        menuButton.style.color = 'rgba(0, 184, 255, 0.7)';  // Set font color
        menuButton.onclick = toggleMenu;

        const menu = document.createElement('nav');
        menu.className = 'menu-items';
        menu.innerHTML = `
        <a href="https://thomasefleming.github.io">Home</a>
        <a href="https://www.youtube.com/playlist?list=PLnPKoRbj5BWEQ5yp09_b9o2ieBrkxFcrH" target="_blank" style="text-align: left;">🎶 I 🩷</a>
        <a href="chiclets.html">Chiclets</a>
        <div class="menu-item" style="position: relative; width: 125px;">
        <button class="sub-menu" style="display: inline-block; width: 125px; background: none; border: none; color: inherit; cursor: pointer; text-align: left; font-size: 1em; padding: 0; margin: 0;">More from me ⟩</button>
        <div class="submenu" style="display: none; position: absolute; left: 100%; top: 0; width: 125px; background-color: rgba(0, 0, 0, 0.9); padding: 10px; border-radius: 5px; z-index: 20;">
            <a href="https://x.com/thomasefleming" target="_blank" class="submenu-item" style="display: block; padding: 10px 0; color: white; text-decoration: none; text-align: left;">My tweets</a>
            <a href="https://docs.google.com/document/d/1Nwq2Z1BhJhYm5UnOundlgRhWmUdy872j7Akp8kfs1q8/edit?usp=sharing" target="_blank" class="submenu-item" style="display: block; padding: 10px 0; color: white; text-decoration: none; text-align: left;">My writing</a>
        </div>
        </div>
        `;

        // Add the hamburger icon and the menu to the header
        header.prepend(menuButton);
        header.appendChild(menu);

        // Add submenu click functionality for mobile
        const subMenuButton = menu.querySelector('.sub-menu');
        const submenu = menu.querySelector('.submenu');

        subMenuButton.addEventListener('click', function () {
            const isVisible = submenu.style.display === 'block';
            submenu.style.display = isVisible ? 'none' : 'block';
        });

        // Hide submenu when clicking outside of it (for mobile touch behavior)
        document.addEventListener('click', function (event) {
            if (!menu.contains(event.target) && submenu.style.display === 'block') {
                submenu.style.display = 'none';
            }
        });

        // Add hover effect to submenu items
        const submenuItems = menu.querySelectorAll('.submenu-item');
        submenuItems.forEach(function (item) {
            item.addEventListener('mouseenter', function () {
                item.style.color = 'rgba(86, 241, 255, 0.9)'; // Change text color on hover
                item.style.fontWeight = 'bold'; // Make text bold on hover
            });
            item.addEventListener('mouseleave', function () {
                item.style.color = 'white'; // Revert text color when not hovered
                item.style.fontWeight = 'normal'; // Revert font weight when not hovered
            });
        });

        // Increase the width of the menu container
        menu.style.width = '125px'; // Adjust the width as needed to accommodate more text in one line
    }
});

function toggleMenu() {
    const menu = document.querySelector('.menu-items');
    const menuButton = document.querySelector('.hamburger-icon');
    
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    
    // Add animation class on click
    menuButton.classList.toggle('clicked');
}
