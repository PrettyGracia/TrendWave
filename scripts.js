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

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'bg-gradient-to-br from-cyan-900 to-purple-900 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all overflow-hidden';
    card.innerHTML = `
        <a href="${item.link}">
            <img src="${item.featured_image}" alt="${item.title}" class="w-full h-48 object-cover">
        </a>
        <div class="p-6">
            <span class="inline-block bg-cyan-500 text-white text-xs px-2 py-1 rounded-full mb-2">${item.category}</span>
            <a href="${item.link}">
                <h3 class="text-2xl font-semibold mb-2 hover:text-cyan-400">${item.title}</h3>
            </a>
            <p class="text-sm text-gray-300 mb-4">By ${item.author} on ${item.date}</p>
            <p class="mb-4">${item.excerpt}</p>
            <a href="${item.link}" class="inline-block bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-full hover:from-cyan-500 hover:to-purple-600 transition-all">Read More</a>
        </div>
    `;
    return card;
}

function populateReviews(reviews) {
    const container = document.getElementById('reviews-container');
    reviews.forEach(review => {
        container.appendChild(createCard(review));
    });
}

function populateBlogs(blogs) {
    const container = document.getElementById('blog-container');
    blogs.forEach(blog => {
        container.appendChild(createCard(blog));
    });
}

function populateTrending(trending) {
    const container = document.getElementById('trending-container');
    trending.forEach(news => {
        container.appendChild(createCard(news));
    });
}