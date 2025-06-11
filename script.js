fetch('posts.json')
    .then(response => response.json())
    .then(posts => {
        const container = document.getElementById('post-list');
        posts.forEach(post => {
            const article = document.createElement('article');
            article.innerHTML = `
                <p>${post.content}</p>
                <p>${post.date}</p>
                `;
            container.appendChild(article);
        });
    })
    .catch(error => {
        console.error('Failed to load posts:',error);
    });