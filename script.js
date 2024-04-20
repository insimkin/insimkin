// Открытие меню 
// const navSpan = document.querySelector('.nav__span');
// let navMenu = document.querySelectorAll('.nav__menu');
// navSpan.addEventListener('click', function () {
//     navMenu.forEach(function (element) { element.classList.add('nav--active') });
//     navMenu.forEach(function (element) { element.classList.add('nav__menu') });
// });


// Закрытие меню Бургера
// let iconClose = document.querySelector('.icon__close')
// iconClose.addEventListener('click', function () {

//     navMenu.forEach(function (element) { element.classList.remove('nav--active') });
// });


// Открытие меню поиска и закрытие по клику вне области
document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

    const button = document.querySelector('.nav__span') // находим кнопку для открытия/закрытия окна навигации
    const searchBar = document.querySelector('.nav__menu') // находим окно навигации
    button.addEventListener('click', () => { // при клике на кнопку button = document.querySelector('.search')
        searchBar.classList.add('nav--active') // открываем/закрываем окно навигации, добаляя/удаляя активный класс
    })

    window.addEventListener('click', e => { // при клике в любом месте окна браузера
        const target = e.target // находим элемент, на котором был клик
        if (!target.closest('.searchbar') && !target.closest('.nav__span')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
            searchBar.classList.remove('nav--active') // то закрываем окно навигации, удаляя активный класс
        }
    })
})
