// Wait for page load
/*window.addEventListener('load', () => {
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
});*/

window.addEventListener('load', () => {
    const loader = document.getElementById('loading-screen');
    if(loader) {
        setTimeout(() => {
            loader.classList.add('hidden');       // fade out
            setTimeout(() => {
                loader.style.display = 'none';    // remove from page
            }, 500); // match CSS transition
        }, 800); // how long loader shows (ms)
    }
});
//hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    window.alert("Clicked!")
});