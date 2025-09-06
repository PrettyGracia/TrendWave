// header-footer.js - Dynamically insert header and footer

document.addEventListener('DOMContentLoaded', () => {
    // Create Header
    const header = document.getElementById('header');
    header.className = 'bg-gradient-to-r from-cyan-500 to-purple-500 py-4 px-6 flex justify-between items-center shadow-md';
    header.innerHTML = `
        <div class="text-2xl font-bold glitch" data-text="TrendWave">TrendWave</div>
        <nav class="space-x-4">
            <a href="#reviews" class="hover:underline">Reviews</a>
            <a href="#blog" class="hover:underline">Blog</a>
            <a href="#trending" class="hover:underline">Trending</a>
            <a href="#contact" class="hover:underline">Contact</a>
        </nav>
    `;

    // Create Footer
    const footer = document.getElementById('footer');
    footer.className = 'bg-gradient-to-r from-cyan-500 to-purple-500 py-4 px-6 text-center';
    footer.innerHTML = `
        <p>&copy; 2025 TrendWave. All rights reserved.</p>
        <div class="space-x-4 mt-2">
            <a href="https://twitter.com" class="hover:underline">Twitter</a>
            <a href="https://instagram.com" class="hover:underline">Instagram</a>
            <a href="https://linkedin.com" class="hover:underline">LinkedIn</a>
        </div>
    `;
});
