import '../scss/style.scss'
import homeRender from './homeRender.mjs'
import contactInfo from './contactInfo.mjs'
import aboutUs from './aboutUs.mjs'

let contactBtn = document.getElementById('contactBtn')
let aboutBtn = document.getElementById('aboutBtn')
let homeBtn = document.getElementById('homeBtn')

contactBtn.addEventListener('click', contactInfo)
homeBtn.addEventListener('click', homeRender)
aboutBtn.addEventListener('click', aboutUs)
homeRender()