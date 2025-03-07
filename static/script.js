document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const navbar = document.querySelector(".navbar");

    // Standard-Emoji setzen
    let isDarkMode = false;
    themeToggle.textContent = "🌙";

    window.addEventListener("scroll", function () {
        navbar.classList.toggle("visible", window.scrollY > 100);
    });

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");

        // Füge die Animation hinzu
        themeToggle.classList.add("animate");

        // Nach der Animation Klasse wieder entfernen
        setTimeout(() => {
            themeToggle.classList.remove("animate");
        }, 500);

        // Wechsle das Emoji
        isDarkMode = !isDarkMode;
        themeToggle.textContent = isDarkMode ? "☀️" : "🌙";

        document.addEventListener("DOMContentLoaded", function() {
            const form = document.getElementById("staffApplication");
        
            form.addEventListener("submit", function(event) {
                let isValid = true;
                const inputs = form.querySelectorAll("input, select, textarea");
                inputs.forEach(input => {
                    const error = input.nextElementSibling;
                    if (!input.value) {
                        error.style.display = "block";
                        isValid = false;
                    } else {
                        error.style.display = "none";
                    }
                });
        
                if (!isValid) {
                    event.preventDefault();
                }
            });
        });
        
    });
});