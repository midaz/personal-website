document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
            body.classList.replace('dark', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.replace('light', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
}); 