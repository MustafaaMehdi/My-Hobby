import createElement from "../lib/createElement.mjs";
import homeRender from "./homeRender.mjs";
export default function aboutUs() {
    mainContainer.innerText = '';

    let aboutSection = createElement('section', 'aboutSection', 'aboutSection');
    mainContainer.appendChild(aboutSection);

    let aboutHeader = createElement('h2', 'aboutHeader', 'aboutHeader', 'About Us');
    let aboutText = createElement('p', 'aboutText', 'aboutText', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum augue ac mauris ultricies, id maximus dui suscipit. In eu elit in urna tempor eleifend. Vestibulum ut velit odio. Sed nec scelerisque lectus, in mattis diam. Sed id sapien in neque vehicula blandit nec nec nunc. Nulla facilisi. Phasellus vitae ex velit. Nullam nec nunc nec odio pharetra bibendum non vel sem. Suspendisse potenti.');

    let hobbyHeader = createElement('h3', 'hobbyHeader', 'hobbyHeader', 'Our Hobby: Games and Gaming');
    let hobbyText = createElement('p', 'hobbyText', 'hobbyText', 'We are passionate gamers dedicated to exploring the immersive worlds of video games. From action-packed adventures to mind-bending puzzles, we love it all.');

    let gamingInfo = createElement('div', 'gamingInfo', 'gamingInfo');
    let gamingImage = createElement('img', 'gamingImage', 'gamingImage');
    gamingImage.src = '/gaming.jpg'; 

    let gamingDescription = createElement('p', 'gamingDescription', 'gamingDescription', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum augue ac mauris ultricies, id maximus dui suscipit. In eu elit in urna tempor eleifend. Vestibulum ut velit odio. Sed nec scelerisque lectus, in mattis diam.');

    gamingInfo.append(gamingImage, gamingDescription);

    let backToHomeBtn = createElement('button', 'backToHomeBtn', 'backToHomeBtn', 'Back to Home');

    aboutSection.append(aboutHeader, aboutText, hobbyHeader, hobbyText, gamingInfo, backToHomeBtn);

    backToHomeBtn.addEventListener('click', homeRender);
}