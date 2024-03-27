import createElement from '../lib/createElement.mjs'
let mainContainer = document.getElementById('mainContainer')
let homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', homeRender)

export default function homeRender() {
    mainContainer.innerText = '';

    let hobbySection = createElement('section', 'hobbySection', 'hobbySection');
    mainContainer.appendChild(hobbySection);

    let games = [
        { name: 'Diablo', genre: 'MMORPG', image: 'Diablo.jpeg' },
        { name: 'Fallout', genre: 'RPG', image: 'fallout.jpeg' },
        { name: 'Assassins creed', genre: 'Action', image: 'assassinsCreed.jpeg' },
        { name: 'God of war', genre: 'Action', image: 'godOfWar.jpeg' },
        { name: 'The last of us', genre: 'Horror', image: 'lastOfUs.jpeg' },
        { name: 'Bloodborne', genre: 'Action', image: 'Bloodborne.jpeg' },
        { name: 'Ratchet Clank', genre: 'Adventure', image: 'ratchetClank.jpeg' },
        { name: 'Ghost of Tsushima', genre: 'Action', image: 'ghostOfTsushima.jpeg' }
    ];

    games.forEach(game => {
        let gameContainer = createElement('div', 'gameContainer', 'gameContainer');
        let gameName = createElement('h2', 'gameName', 'gameName', game.name);
        let gameGenre = createElement('p', 'gameGenre', 'gameGenre', `Genre: ${game.genre}`);
        let gameImage = createElement('img', 'gameImage', 'gameImage');
        gameImage.src = `public/${game.image}`;
        gameImage.setAttribute('height', '400')
        gameImage.setAttribute('width', '200')

        gameContainer.append(gameName, gameImage, gameGenre);
        hobbySection.appendChild(gameContainer);
    });

    let genreFilter = createElement('select', 'genreFilter', 'genreFilter');
    let allGenresOption = createElement('option', '', '', 'All Genres');
    genreFilter.appendChild(allGenresOption);

    let genres = [...new Set(games.map(game => game.genre))];
    genres.forEach(genre => {
        let genreOption = createElement('option', '', '', genre);
        genreFilter.appendChild(genreOption);
    });

    hobbySection.insertBefore(genreFilter, hobbySection.firstChild);

    genreFilter.addEventListener('change', function () {
        let selectedGenre = this.value;
        let gameContainers = document.querySelectorAll('.gameContainer');

        gameContainers.forEach(container => {
            if (selectedGenre === 'All Genres' || container.querySelector('.gameGenre').textContent.includes(selectedGenre)) {
                container.style.display = 'grid';
            } else {
                container.style.display = 'none';
            }
        });
    });
}