import createElement from '../lib/createElement.mjs'
let mainContainer = document.getElementById('mainContainer')
let homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', homeRender)
import showDescription from './showDescription.mjs';
export default function homeRender() {
    mainContainer.innerText = '';

    let hobbySection = createElement('section', 'hobbySection', 'hobbySection');
    mainContainer.appendChild(hobbySection);

    let games = [
        { name: 'Diablo', genre: 'MMORPG', image: 'Diablo.jpeg', description: 'Diablo' },
        { name: 'Fallout', genre: 'RPG', image: 'fallout.jpeg', description: 'Fallout' },
        { name: 'Assassins creed', genre: 'Action', image: 'assassinsCreed.jpeg', description: 'Assassins creed' },
        { name: 'God of war', genre: 'Action', image: 'godOfWar.jpeg', description: 'Gow' },
        { name: 'The last of us', genre: 'Horror', image: 'lastOfUs.jpeg', description: 'The last of us' },
        { name: 'Bloodborne', genre: 'Action', image: 'Bloodborne.jpeg', description: 'Bloodborne' },
        { name: 'Ratchet Clank', genre: 'Adventure', image: 'ratchetClank.jpeg', description: 'Ratchet' },
        { name: 'Ghost of Tsushima', genre: 'Action', image: 'ghostOfTsushima.jpeg', description: 'Ghost of Tsushima' },
        { name: 'Call of duty', genre: 'Action', image: 'callOfDuty.jpeg', description: 'COD cold war' }
    ];

    games.forEach(game => {
        let gameContainer = createElement('article', `${game.name}`, 'gameContainer');
        let gameName = createElement('h2', 'gameName', 'gameName', game.name);
        let gameGenre = createElement('p', 'gameGenre', 'gameGenre', `Genre: ${game.genre}`);
        let gameImage = createElement('img', 'gameImage', 'gameImage');
        let descriptionBtn = createElement('button', 'descriptionBtn', 'descriptionBtn', 'Read more')
        gameImage.src = `/${game.image}`;
        gameImage.setAttribute('height', '400')
        gameImage.setAttribute('width', '200')
        gameImage.setAttribute('alt', `${game.name} game cover`)

        gameContainer.append(gameName, gameImage, gameGenre, descriptionBtn);
        hobbySection.appendChild(gameContainer);
        descriptionBtn.addEventListener('click', () => showDescription(game))

    });

    let genreFilter = createElement('select', 'genreFilter', 'genreFilter');
    let allGenresOption = createElement('option', '', '', 'All Genres');
    genreFilter.appendChild(allGenresOption);

    let genres = [...new Set(games.map(game => game.genre))];
    genres.forEach(genre => {
        let genreOption = createElement('option', '', '', genre);
        genreFilter.appendChild(genreOption);
    });
    mainContainer.insertBefore(genreFilter, hobbySection)

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