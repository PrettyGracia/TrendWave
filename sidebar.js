// sidebar.js - Dynamically insert and populate sidebar for post pages

document.addEventListener('DOMContentLoaded', async () => {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return; // Only proceed if sidebar element exists

    const pathname = window.location.pathname;
    let type;
    if (pathname.startsWith('/reviews/')) {
        type = 'reviews';
    } else if (pathname.startsWith('/blog/')) {
        type = 'blogs';
    } else if (pathname.startsWith('/trending/')) {
        type = 'trending';
    } else {
        return; // Not a post page
    }

    try {
        const response = await fetch('TrendWave/data.json');
        const data = await response.json();
        const items = data[type] || [];

        // Fetch details for all items
        const detailedItems = await Promise.all(
            items.map(async (item) => {
                const details = await fetchPostDetails(item.link);
                return { ...item, ...details };
            })
        );

        // Sort by date descending
        detailedItems.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Recent Posts (top 5)
        const recent = detailedItems.slice(0, 5);
        let recentHTML = '<h3 class="text-xl font-bold mb-4">Recent Posts</h3><ul class="space-y-2">';
        recent.forEach(item => {
            recentHTML += `<li><a href="${item.link}" class="hover:text-cyan-400">${item.title}</a><br><small class="text-gray-300">${item.date}</small></li>`;
        });
        recentHTML += '</ul>';

        // Categories
        const categories = {};
        detailedItems.forEach(item => {
            categories[item.category] = (categories[item.category] || 0) + 1;
        });
        let categoriesHTML = '<h3 class="text-xl font-bold mb-4 mt-6">Categories</h3><ul class="space-y-2">';
        Object.entries(categories).forEach(([cat, count]) => {
            categoriesHTML += `<li>${cat} (${count})</li>`;
        });
        categoriesHTML += '</ul>';

        // Archive (all posts)
        let archiveHTML = '<h3 class="text-xl font-bold mb-4 mt-6">Archive</h3><ul class="space-y-2">';
        detailedItems.forEach(item => {
            archiveHTML += `<li><a href="${item.link}" class="hover:text-cyan-400">${item.title}</a> - <small class="text-gray-300">${item.date}</small></li>`;
        });
        archiveHTML += '</ul>';

        sidebar.innerHTML = recentHTML + categoriesHTML + archiveHTML;
    } catch (error) {
        console.error('Error loading sidebar:', error);
        sidebar.innerHTML = '<p>Error loading sidebar content.</p>';
    }
});