
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGU3ZjIwMDQyMzUyNGZjNGMwYTFhZmViODQxNzllNiIsIm5iZiI6MTcyODA2MTEwMS4wNDM2MzMsInN1YiI6IjY3MDAxZTA5NzgzMGMxMzAxZTdjY2VmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L9UdRCSRGjz7Tuxi8ZiE0hULoiRSv6RJ0GwWDIsYJx0'
    }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
.then(response => response.json())
.then(dados => {
    const container = document.querySelector('.container');
    
    dados.results.forEach(filme => {
        // Criando o card
        const card = document.createElement('div');
        card.classList.add('card');

        // Adicionando imagem do filme
        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/w500/${filme.backdrop_path}`;
        img.alt = filme.original_title;

        // Adicionando o conteúdo do card
        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const title = document.createElement('h2');
        title.textContent = filme.original_title;

        const overview = document.createElement('p');
        overview.textContent = filme.overview;

        const language = document.createElement('p');
        language.classList.add('language');
        language.textContent = `Linguagem original: ${filme.original_language}`;

        const releaseDate = document.createElement('p');
        releaseDate.classList.add('release-date');
        releaseDate.textContent = `Data de lançamento: ${filme.release_date}`;

        // Append no conteúdo do card
        cardContent.append(title, overview, language, releaseDate);

        // Append na estrutura do card
        card.append(img, cardContent);

        // Adicionando o card no container
        container.append(card);
    });
})
.catch(err => console.error(err));
