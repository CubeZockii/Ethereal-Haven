document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");

    function updateThemeIcon() {
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    }

    // Load dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        updateThemeIcon();
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        updateThemeIcon();

        // Save dark mode state
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});