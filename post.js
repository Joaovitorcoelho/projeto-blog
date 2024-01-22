document.addEventListener('DOMContentLoaded', function () {
    const postDetailsContainer = document.getElementById('post-details');
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (postId) {
        const selectedPost = getPostById(postId);

        if (selectedPost) {
            renderPostDetails(selectedPost);
            addHomeButton();
        } else {
            console.error('Erro: Post não encontrado.');
            postDetailsContainer.textContent = 'Post não encontrado.';
        }
    } else {
        console.error('Erro: ID do post não encontrado na URL.');
        postDetailsContainer.textContent = 'ID do post não encontrado na URL.';
    }

    function renderPostDetails(post) {
        const postDetails = document.createElement('div');
        postDetails.classList.add('post-details');

        const image = document.createElement('img');
        image.src = post.image;
        postDetails.appendChild(image);

        const title = document.createElement('h2');
        title.textContent = post.title;
        postDetails.appendChild(title);

        const content = document.createElement('p');
        content.textContent = post.content;
        postDetails.appendChild(content);

        const date = document.createElement('p');
        date.textContent = `Data: ${post.date}`;
        postDetails.appendChild(date);

        const category = document.createElement('p');
        category.textContent = `Categoria: ${post.category}`;
        postDetails.appendChild(category);

        const clicks = document.createElement('p');
        clicks.textContent = `Visualizações: ${post.clicks}`;
        postDetails.appendChild(clicks);

        postDetailsContainer.appendChild(postDetails);
    }

    function getPostById(postId) {
        return posts.find(post => post.id === parseInt(postId));
    }

    function addHomeButton() {
        const homeButton = document.createElement('button');
        homeButton.textContent = 'Início';
        homeButton.id = 'home-button';

        homeButton.addEventListener('click', function () {
            window.location.href = 'index.html';
        });

        document.body.appendChild(homeButton);
    }
});
