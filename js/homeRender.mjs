import createElement from '../lib/createElement.mjs'
let mainContainer = document.getElementById('mainContainer')
let homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', homeRender)

export default function homeRender() {
    mainContainer.innerText = '';

    let hobbySection = createElement('section', 'hobbySection', 'hobbySection');
    mainContainer.appendChild(hobbySection);

    let games = [
        { name: 'Diablo', genre: 'MMORPG', image: 'Diablo.jpeg', description: 'Diablo' },
        { name: 'Fallout', genre: 'RPG', image: 'fallout.jpeg', Description: 'Fallout' },
        { name: 'Assassins creed', genre: 'Action', image: 'assassinsCreed.jpeg', Description: 'Assassins creed' },
        { name: 'God of war', genre: 'Action', image: 'godOfWar.jpeg', Description: 'Gow' },
        { name: 'The last of us', genre: 'Horror', image: 'lastOfUs.jpeg', Description: 'The last of us' },
        { name: 'Bloodborne', genre: 'Action', image: 'Bloodborne.jpeg', Description: 'Bloodborne' },
        { name: 'Ratchet Clank', genre: 'Adventure', image: 'ratchetClank.jpeg', Description: 'Ratchet' },
        { name: 'Ghost of Tsushima', genre: 'Action', image: 'ghostOfTsushima.jpeg', Description: 'Ghost of Tsushima' },
        { name: 'Call of duty', genre: 'Action', image: 'callOfDuty.jpeg', Description: 'COD cold war' }
    ];

    games.forEach(game => {
        let gameContainer = createElement('article', 'gameContainer', 'gameContainer');
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
    // hobbySection.insertBefore(hobbySection.firstChild);

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