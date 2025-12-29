// Wait for page load
window.addEventListener('load', () => {
    const loader = document.getElementById('loading-screen');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 2000); // 2000ms = 2 seconds
});

// Optional: show loader on link clicks (for SPA feel)
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Only for internal links
        if (link.getAttribute('href').startsWith('#') || link.getAttribute('target') === '_blank') return;

        e.preventDefault(); // prevent immediate navigation
        const loader = document.getElementById('loading-screen');
        loader.classList.remove('hidden'); // show loader
        setTimeout(() => {
            window.location.href = link.href;
        }, 100); // short delay to show loader
    });
});