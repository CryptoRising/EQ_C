//Menu dropdown
const perfil = document.querySelector('.perfil');
const menu = document.querySelector('.menu');

perfil.onclick = () =>{
    menu.classList.toggle('ativo')
}


let tela = document.querySelector('html')
let btnDark = document.querySelector('#btdark')
let btnLight = document.querySelector('#btlight')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark() {
    console.log('modo dark');
    tela.classList.add("dark");
    tela.classList.remove("light");
}
function modoLight() {
    console.log('modo light');
    tela.classList.remove("dark");
    tela.classList.add("light");
}
