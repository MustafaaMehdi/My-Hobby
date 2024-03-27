import '../scss/style.scss'
import homeRender from './homeRender.mjs'
import contactInfo from './contactInfo.mjs'

let contactBtn = document.getElementById('contactBtn')

let homeBtn = document.getElementById('homeBtn')

contactBtn.addEventListener('click', contactInfo)
homeBtn.addEventListener('click', homeRender)
homeRender()