const gamburgerButton = document.querySelector('.header__gamburger');
const sidebar = document.querySelector('.menu');
const closeButton = document.querySelector('.menu__close');
const fog = document.querySelector('.fog');

gamburgerButton.addEventListener('click', () => {
    sidebar.classList.remove('menu--hidden');
    sidebar.classList.add('menu--visible');
    fog.classList.add('fog--visible');

})

closeButton.addEventListener('click', () => {
    sidebar.classList.remove('menu--visible');
    sidebar.classList.add('menu--hidden');
    fog.classList.remove('fog--visible');
})

fog.addEventListener('click', () => {
    sidebar.classList.remove('menu--visible');
    sidebar.classList.add('menu--hidden');
    fog.classList.remove('fog--visible');
})