const body = document.body
const nav = document.querySelector("#nav").cloneNode(1)
const burger_menu = document.querySelector("#b-menu")
const fade_menu = document.querySelector("#f-menu")
const burger = document.querySelector("#burger")

burger.addEventListener('click',burger_open)

function burger_open(e){
    burger.classList.toggle('active')
    fade_menu.classList.toggle('active')
    burger_menu.classList.toggle('active')
    body.classList.toggle('active')
    burger_r();
}

function burger_r(){
    burger_menu.appendChild(nav)
}

const left_arrow = document.querySelector("#but2")
const right_arrow = document.querySelector("#but3")
const left_click_end = document.querySelector("#but1")
const right_click_end = document.querySelector("#but4")
const current_page = document.querySelector('#number')

import pets_info from './pets_default.js'


left_arrow.addEventListener('click',left_click)
right_arrow.addEventListener('click',right_click)
left_click_end.addEventListener('click',left_end)
right_click_end.addEventListener('click',right_end)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var full = [0,1,2,3,4,5,6,7]
var array_fin = []

var Page = 1

var MaxPage
if (window.innerWidth<767){
    MaxPage=16
    } else {
        if (window.innerWidth<1279) {
            MaxPage=8
        } else {
            MaxPage=6
        }
}

var array_fin = []

for(let j = 0; j<MaxPage; j++){
    full = [0,1,2,3,4,5,6,7]
    var array_temp = []
    var n = 0
    for (let i = 0; i<48/MaxPage; ++i){
        var item = getRandomInt(8-n)
        array_temp.push(full[item])
        full.splice(item,1)
        n+=1
    }
    array_fin.push(array_temp)
}

const petNAME = document.getElementsByClassName('petNAME')
const petIMG = document.getElementsByClassName('petIMG')
function show_pets() {
    for (let i = 0; i<48/MaxPage; ++i) {
        petNAME[i].innerHTML = pets_info[array_fin[Page-1][i]].name
        petIMG[i].src = pets_info[array_fin[Page-1][i]].img
    }
}
show_pets()

function right_click(e) {
    if (Page<MaxPage) {
        Page+=1
        show_pets()
        current_page.innerHTML = Page
    }
}

function left_click(e) {
    if (Page>1) {
        Page-=1
        show_pets()
        current_page.innerHTML = Page
    }
}

function right_end(e) {
    if (Page<MaxPage) {
        Page=MaxPage
        show_pets()
        current_page.innerHTML = Page
    }
}

function left_end(e) {
    if (Page>1) {
        Page=1
        show_pets() 
        current_page.innerHTML = Page
    }
}

const learnmore = document.getElementsByClassName('learnmore')
const pop = document.querySelector('#pop')
const popFADE = document.querySelector('#popFADE')
const popCLOSE = document.querySelector('#popCLOSE')

popFADE.addEventListener('click',popDOWN)
popCLOSE.addEventListener('click',popDOWN)

for (let i in learnmore){
    learnmore[i].addEventListener('click',() => { popUP(i)})
}

function popDOWN(e){
    pop.classList.toggle('UP')
    popFADE.classList.toggle('UP')
    popCLOSE.classList.toggle('UP')
    body.classList.toggle('active')
}

function popUP(i){
    document.querySelector('#popIMG').src = pets_info[array_fin[Page-1][i]].img
    document.querySelector('#popNAME').innerHTML = pets_info[array_fin[Page-1][i]].name
    document.querySelector('#popDOG').innerHTML = pets_info[array_fin[Page-1][i]].type+' - '+pets_info[array_fin[Page-1][i]].breed
    document.querySelector('#popBIO').innerHTML = pets_info[array_fin[Page-1][i]].description
    document.querySelector('#popAGE').innerHTML = 'Age: '+pets_info[array_fin[Page-1][i]].age
    document.querySelector('#popINFO').innerHTML = 'Inoculations: '+pets_info[array_fin[Page-1][i]].inoculations.join(', ')
    document.querySelector('#popDIS').innerHTML = 'Diseases: '+pets_info[array_fin[Page-1][i]].diseases.join(', ')
    document.querySelector('#popPAR').innerHTML = 'Parasites: '+pets_info[array_fin[Page-1][i]].parasites.join(', ')
    pop.classList.toggle('UP')
    popFADE.classList.toggle('UP')
    popCLOSE.classList.toggle('UP')
    body.classList.toggle('active')
}


