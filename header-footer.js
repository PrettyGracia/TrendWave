// header-footer.js - Dynamically insert header and footer

document.addEventListener('DOMContentLoaded', () => {
    // Create Preloader
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.className = 'fixed inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center z-50 hidden opacity-0 transition-opacity duration-500';
    preloader.innerHTML = `
        <p class="text-4xl font-bold glitch" data-text="Loading...">Loading...</p>
    `;
    document.body.appendChild(preloader);

    // Function to handle link clicks with preloader
    function handleLinkClick(e) {
        const link = e.target.closest('a');
        if (link && link.href.startsWith(window.location.origin + '/') && !link.href.includes('#')) {
            e.preventDefault();
            const href = link.href;
            preloader.classList.remove('hidden', 'opacity-0');
            preloader.classList.add('opacity-100');
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Delay to allow transition
        }
    }

    // Add global click listener for all internal links
    document.addEventListener('click', handleLinkClick);

    // Create Header
    const header = document.getElementById('header');
    header.className = 'bg-gradient-to-r from-cyan-500 to-purple-500 py-4 px-6 shadow-md';
    header.innerHTML = `
        <div class="flex justify-between items-center">
            <a href="/" class="text-2xl font-bold glitch" data-text="TrendWave">TrendWave</a>
            <nav id="desktop-nav" class="hidden md:flex space-x-4">
                <a href="/reviews" class="px-3 py-2 rounded hover:bg-cyan-600 hover:text-white transition-all">Reviews</a>
                <a href="/blog" class="px-3 py-2 rounded hover:bg-cyan-600 hover:text-white transition-all">Blog</a>
                <a href="/trending" class="px-3 py-2 rounded hover:bg-cyan-600 hover:text-white transition-all">Trending</a>
                <a href="#contact" class="px-3 py-2 rounded hover:bg-cyan-600 hover:text-white transition-all">Contact</a>
            </nav>
            <button id="hamburger" class="md:hidden text-white text-3xl focus:outline-none">☰</button>
        </div>
        <nav id="mobile-nav" class="hidden md:hidden flex flex-col space-y-2 mt-4 px-4">
            <a href="/reviews" class="px-3 py-2 rounded hover:bg-cyan-600 hover:text-white transition-all">Reviews</a>
            <a href="/blog" class="px-3 py-2 rounded hover:bg-cyan-600 hover:text-white transition-all">Blog</a>
            <a href="/trending" class="px-3 py-2 rounded hover:bg-cyan-600 hover:text-white transition-all">Trending</a>
            <a href="#contact" class="px-3 py-2 rounded hover:bg-cyan-600 hover:text-white transition-all">Contact</a>
        </nav>
    `;

    // Hamburger toggle
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
        hamburger.textContent = mobileNav.classList.contains('hidden') ? '☰' : '✕';
    });

    // Create Footer
    const footer = document.getElementById('footer');
    footer.className = 'bg-gradient-to-r from-cyan-500 to-purple-500 py-4 px-6 text-center';
    footer.innerHTML = `
        <p>&copy; 2025 TrendWave. All rights reserved.</p>
        <div class="space-x-4 mt-2">
            <a href="https://fuseven.net/" class="px-3 py-1 rounded hover:bg-cyan-600 hover:text-white transition-all">Fuseven</a>
            <a href="https://stars777.win/" class="px-3 py-1 rounded hover:bg-cyan-600 hover:text-white transition-all">Stars777</a>
            <a href="https://bloofy.net/" class="px-3 py-1 rounded hover:bg-cyan-600 hover:text-white transition-all">Bloofy</a>
        </div>
    `;
});