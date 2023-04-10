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

const left_arrow = document.querySelector("#arrow")
const right_arrow = document.querySelector("#arrow2")

import pets_info from './main_default.js'

var pets = document.querySelector('#pets_showcase')

left_arrow.addEventListener("click",left);
right_arrow.addEventListener("click",right);

var current = [0,1,2]
var full = [0,1,2,3,4,5,6,7]
var not_full = []
var buff_r = []
var buff_l = []
var click_l = 1
var click_r = 1

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function left(e){

    for (let i in full)
        if (!current.includes(full[i])) not_full.push(full[i])


    var random_pet = getRandomInt(4)
    var perem1 = not_full[random_pet]
    not_full.splice(random_pet,1)
    var random_pet = getRandomInt(3)
    var perem2 = not_full[random_pet]
    not_full.splice(random_pet,1)
    var random_pet = getRandomInt(2)
    var perem3 = not_full[random_pet]
    not_full.splice(random_pet,1)

    click_l+=1
    click_r=0
    buff_r = current

    if (click_l>1){
        document.querySelector('#img1').src = pets_info[perem1].img
        document.querySelector('#text1').innerHTML = pets_info[perem1].name
        document.querySelector('#img2').src = pets_info[perem2].img
        document.querySelector('#text2').innerHTML = pets_info[perem2].name
        document.querySelector('#img3').src = pets_info[perem3].img
        document.querySelector('#text3').innerHTML = pets_info[perem3].name
        current = [perem1, perem2, perem3]
    }
    else {
        document.querySelector('#img1').src = pets_info[buff_l[0]].img
        document.querySelector('#text1').innerHTML = pets_info[buff_l[0]].name
        document.querySelector('#img2').src = pets_info[buff_l[1]].img
        document.querySelector('#text2').innerHTML = pets_info[buff_l[1]].name
        document.querySelector('#img3').src = pets_info[buff_l[2]].img
        document.querySelector('#text3').innerHTML = pets_info[buff_l[2]].name
        current = buff_l
    }
    not_full = []
    console.log(current)
}

function right(e){

    for (let i in full)
        if (!current.includes(full[i])) not_full.push(full[i])


    var random_pet = getRandomInt(4)
    var perem1 = not_full[random_pet]
    not_full.splice(random_pet,1)
    var random_pet = getRandomInt(3)
    var perem2 = not_full[random_pet]
    not_full.splice(random_pet,1)
    var random_pet = getRandomInt(2)
    var perem3 = not_full[random_pet]
    not_full.splice(random_pet,1)

    click_r+=1
    click_l=0
    buff_l = current

    if (click_r>1){
        document.querySelector('#img1').src = pets_info[perem1].img
        document.querySelector('#text1').innerHTML = pets_info[perem1].name
        document.querySelector('#img2').src = pets_info[perem2].img
        document.querySelector('#text2').innerHTML = pets_info[perem2].name
        document.querySelector('#img3').src = pets_info[perem3].img
        document.querySelector('#text3').innerHTML = pets_info[perem3].name
        current = [perem1, perem2, perem3]
    }
    else {
        document.querySelector('#img1').src = pets_info[buff_r[0]].img
        document.querySelector('#text1').innerHTML = pets_info[buff_r[0]].name
        document.querySelector('#img2').src = pets_info[buff_r[1]].img
        document.querySelector('#text2').innerHTML = pets_info[buff_r[1]].name
        document.querySelector('#img3').src = pets_info[buff_r[2]].img
        document.querySelector('#text3').innerHTML = pets_info[buff_r[2]].name
        current = buff_r
    }

     not_full = []
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
    document.querySelector('#popIMG').src = pets_info[current[i]].img
    document.querySelector('#popNAME').innerHTML = pets_info[current[i]].name
    document.querySelector('#popDOG').innerHTML = pets_info[current[i]].type+' - '+pets_info[current[i]].breed
    document.querySelector('#popBIO').innerHTML = pets_info[current[i]].description
    document.querySelector('#popAGE').innerHTML = 'Age: '+pets_info[current[i]].age
    document.querySelector('#popINFO').innerHTML = 'Inoculations: '+pets_info[current[i]].inoculations.join(', ')
    document.querySelector('#popDIS').innerHTML = 'Diseases: '+pets_info[current[i]].diseases.join(', ')
    document.querySelector('#popPAR').innerHTML = 'Parasites: '+pets_info[current[i]].parasites.join(', ')
    pop.classList.toggle('UP')
    popFADE.classList.toggle('UP')
    popCLOSE.classList.toggle('UP')
    body.classList.toggle('active')
}