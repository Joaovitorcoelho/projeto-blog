document.addEventListener('DOMContentLoaded', function () {
    
     posts =
     JSON.parse(localStorage.getItem('posts')) || [
        {
            id: 1,
            title: 'Basquete',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae scelerisque ante, sit amet iaculis ex. Duis venenatis ut mauris id elementum. Sed a sodales ipsum, eu commodo elit. ',
            date: formatDate(new Date()),  
            image: 'basketball.png',
            category: 'categoria1',
            
            clicks: 0
        },
        {
            id: 2,
            title: 'Futebol Americano',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae scelerisque ante, sit amet iaculis ex. Duis venenatis ut mauris id elementum. Sed a sodales ipsum, eu commodo elit. ',
            date: formatDate(new Date()),  
            image: 'Futebol.jpg',
            category: 'categoria2',
            
            clicks: 0
        },
        {
            id: 3,
            title: 'Formula 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae scelerisque ante, sit amet iaculis ex. Duis venenatis ut mauris id elementum. Sed a sodales ipsum, eu commodo elit. ',
            date: formatDate(new Date()),  
            image: 'race-winner-max-verstappen-red.jpg',
            category: 'categoria1',
            
            clicks: 0
        },
        {
            id: 4,
            title: 'Futebol',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae scelerisque ante, sit amet iaculis ex. Duis venenatis ut mauris id elementum. Sed a sodales ipsum, eu commodo elit. ',
            date: formatDate(new Date()),  
            image: 'vini-jr-real.jpg',
            category: 'categoria3',
            
            clicks: 0
        },
        
    ];

    const postListContainer = document.getElementById('post-list');

    
    function renderPosts(posts) {
        postListContainer.innerHTML = '';
    
        posts.forEach(post => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute('data-id', post.id);
    
            const image = document.createElement('img');
            image.src = post.image;
            card.appendChild(image);
    
            const title = document.createElement('h2');
            title.textContent = post.title;
            card.appendChild(title);
    
            const snippet = document.createElement('p');
            snippet.textContent = post.content.slice(0, 100) + '...';
            card.appendChild(snippet);
    
            const date = document.createElement('p');
            date.textContent = `Data: ${post.date}`;
            card.appendChild(date);
    
            const category = document.createElement('p');
            category.textContent = `Categoria: ${post.category}`;
            card.appendChild(category);
    
            

            const clicks = document.createElement('p'); 
            clicks.textContent = `Visualizações: ${post.clicks}`;
            card.appendChild(clicks);
    
            
    
            postListContainer.appendChild(card);

            card.addEventListener('click', () => {
                post.clicks++;
                localStorage.setItem('posts', JSON.stringify(posts));
                renderPosts(posts);
                const postId = post.id;

                
                window.location.href = `post.html?id=${postId}`;
            });
            
        });
    }
    

    renderPosts(posts);

    function formatDate(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    function filterPostsByCategory(category) {
        const filteredPosts = posts.filter(post => post.category === category);
        renderPosts(filteredPosts);
    }

    const categoryLinks = document.querySelectorAll('nav a[data-category]');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedCategory = link.getAttribute('data-category');
            filterPostsByCategory(selectedCategory);
        });
    });
});
