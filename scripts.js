// scripts.js - Handle data loading and population

document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            populateReviews(data.reviews);
            populateBlogs(data.blogs);
            populateTrending(data.trending);
        })
        .catch(error => console.error('Error loading data:', error));
});

function populateReviews(reviews) {
    const container = document.getElementById('reviews-container');
    reviews.forEach(review => {
        const card = document.createElement('div');
        card.className = 'bg-gradient-to-br from-cyan-900 to-purple-900 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all';
        card.innerHTML = `
            <h3 class="text-2xl font-semibold mb-2">${review.title}</h3>
            <p class="mb-4">${review.excerpt}</p>
            <a href="${review.link}" class="text-cyan-400 hover:text-purple-400">Read Review</a>
        `;
        container.appendChild(card);
    });
}

function populateBlogs(blogs) {
    const container = document.getElementById('blog-container');
    blogs.forEach(blog => {
        const card = document.createElement('div');
        card.className = 'bg-gradient-to-br from-cyan-900 to-purple-900 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all';
        card.innerHTML = `
            <h3 class="text-2xl font-semibold mb-2">${blog.title}</h3>
            <p class="mb-4">${blog.excerpt}</p>
            <a href="${blog.link}" class="text-cyan-400 hover:text-purple-400">Read Blog</a>
        `;
        container.appendChild(card);
    });
}

function populateTrending(trending) {
    const container = document.getElementById('trending-container');
    trending.forEach(news => {
        const card = document.createElement('div');
        card.className = 'bg-gradient-to-br from-cyan-900 to-purple-900 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all';
        card.innerHTML = `
            <h3 class="text-2xl font-semibold mb-2">${news.title}</h3>
            <p class="mb-4">${news.excerpt}</p>
            <a href="${news.link}" class="text-cyan-400 hover:text-purple-400">Read News</a>
        `;
        container.appendChild(card);
    });
}
