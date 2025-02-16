document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference, fallback to system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        body.className = prefersDark ? 'dark' : 'light';
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            body.className = e.matches ? 'dark' : 'light';
        }
    });

    themeToggle.addEventListener('click', () => {
        const newTheme = body.classList.contains('dark') ? 'light' : 'dark';
        body.className = newTheme;
        localStorage.setItem('theme', newTheme);
    });
}); 