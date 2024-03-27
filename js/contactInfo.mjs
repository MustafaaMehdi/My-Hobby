import createElement from '../lib/createElement.mjs';
import homeRender from './homeRender.mjs';
let contactBtn = document.getElementById('contactBtn');
let mainContainer = document.getElementById('mainContainer');

export default function contactInfo() {
	mainContainer.innerText = '';
	let contactSection = createElement(
		'section',
		'contactSection',
		'contactSection'
	);
	mainContainer.appendChild(contactSection);
	let contactHeader = createElement(
		'h2',
		'contactHeader',
		'contactHeader',
		'Reach out to us!'
	);
	let contactEmailHeader = createElement(
		'h3',
		'contactEmailHeader',
		'contactEmailHeader',
		'Send us an E-mail'
	);
	let emailAddressLabel = createElement(
		'label',
		'emailAddressLabel',
		'contactLabel',
		'E-mail address'
	);
	let emailAddressInput = createElement(
		'input',
		'emailAddressInput',
		'contactInput'
	);

    let nameLabel = createElement(
		'label',
		'nameLabel',
		'contactLabel',
		'Name'
	);
	let nameInput = createElement(
		'input',
		'nameInput',
		'contactInput'
	);
    let messageLabel = createElement(
		'label',
		'messageLabel',
		'contactLabel',
		'Message'
	);
	let messageInput = createElement(
		'textarea',
		'messageInput',
		'contactInput'
	);
    let callUsHeader = createElement(
		'h3',
		'callUsHeader',
		'callUsHeader',
		'Maybe call us?'
	);
    let callUsNumber = createElement(
		'p',
		'callUsNumber',
		'callUsNumber',
		'Phone number: +46 5268 754'
	);
    let backToHomeBtn = createElement(
		'button',
		'backToHomeBtn',
		'backToHomeBtn',
		'Back to home'
	);
	emailAddressLabel.appendChild(emailAddressInput);
    nameLabel.appendChild(nameInput)
    messageLabel.appendChild(messageInput)
	contactSection.append(contactHeader, contactEmailHeader, emailAddressLabel, nameLabel, messageLabel , callUsHeader, callUsNumber, backToHomeBtn);

    backToHomeBtn.addEventListener('click', homeRender)
}
