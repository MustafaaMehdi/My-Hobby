import createElement from "../lib/createElement.mjs";
import homeRender from "./homeRender.mjs";
export default function aboutUs() {
    mainContainer.innerText = '';

    let aboutSection = createElement('section', 'aboutSection', 'aboutSection');
    mainContainer.appendChild(aboutSection);

    let aboutHeader = createElement('h2', 'aboutHeader', 'aboutHeader', 'About Us');
    let aboutText = createElement('p', 'aboutText', 'aboutText', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum augue ac mauris ultricies, id maximus dui suscipit. In eu elit in urna tempor eleifend. Vestibulum ut velit odio. Sed nec scelerisque lectus, in mattis diam. Sed id sapien in neque vehicula blandit nec nec nunc. Nulla facilisi. Phasellus vitae ex velit. Nullam nec nunc nec odio pharetra bibendum non vel sem. Suspendisse potenti.');

    let backToHomeBtn = createElement('button', 'backToHomeBtn', 'backToHomeBtn', 'Back to Home');

    aboutSection.append(aboutHeader, aboutText, backToHomeBtn);

    backToHomeBtn.addEventListener('click', homeRender);
}