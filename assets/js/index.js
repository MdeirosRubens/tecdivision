const botaoMenu = document.querySelector('.menu__abrir');
const menu = document.querySelector('.menu-lateral');
const imgBody = document.querySelector('.logo_body');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo');
})