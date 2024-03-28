import createElement from "../lib/createElement.mjs";

export default function showDescription(game) {
    let gameContainer = document.getElementById(`${game.name}`)
    if (gameContainer.querySelector('.descriptionGame')) {
        gameContainer.querySelector('.descriptionGame').remove();
    } else {
        let descriptionGame = createElement('p', 'descriptionGame', 'descriptionGame', `${game.description}`);
        gameContainer.appendChild(descriptionGame);
    }
}