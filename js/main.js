import '../scss/style.scss'

import homeRender from './homeRender.mjs'

let homeBtn = document.getElementById('homeBtn')

homeBtn.addEventListener('click', homeRender)
homeRender()