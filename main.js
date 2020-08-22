const btn = document.getElementById('btn-kick');
const btn2 = document.getElementById('btn-kick2')
const character = {
    name: "Pikachu",
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressBar: document.getElementById('progressbar-character')
}

const enemy = {
    name: "Charmander",
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressBar: document.getElementById('progressbar-enemy')
}

btn.addEventListener('click', () => {
    handlerClik();
});
btn2.addEventListener('click', () => {
    handlerClik(2);
})

function handlerClik(num = 1) {
    changeHP(random() * num, character);
    changeHP(random() * num, enemy);
}

function init() {
    console.log('init game');
    renderHP(character);
    renderHP(enemy);
}

function renderHP (person) {
    renderHPlife(person);
    renderProgressBarHP(person);
}

function renderHPlife(person) {
    // const character = document.getElementById('health-character');
    // console.log(character.innerText);
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressBarHP(person) {
    person.elProgressBar.style.width = person.damageHP + '%';
}

function changeHP (count, person) {
    if(person.damageHP < count){
        person.damageHP = 0;
        alert(' Персонаж ' + person.name + ' проиграл.');
        btn.disabled = true;
        btn2.disabled = true;
    } else {
        person.damageHP -= count;
    }
    
    renderHP(person);
} 

function random() {
    return Math.ceil(Math.random() * 20)
}

init();