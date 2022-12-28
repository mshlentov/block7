const menuCallButton = document.querySelector('.menu__call');
const modalCall = document.querySelector('.modalCall');
const modalCallClose = document.querySelector('.modalCall__close');
const fog = document.querySelector('.fog');
const headerPhone = document.querySelector('.header__phone');

menuCallButton.addEventListener('click', () => {
    modalCall.classList.add('modalCall--visible');
    fog.classList.add('fog--visible');
    fog.style.zIndex = '125';
})

modalCallClose.addEventListener('click', () => {
    modalCall.classList.remove('modalCall--visible');
    fog.classList.remove('fog--visible');
    fog.style.zIndex = '50';
})

fog.addEventListener('click', () => {
    modalCall.classList.remove('modalCall--visible');
    fog.classList.remove('fog--visible');
    fog.style.zIndex = '50';
})

headerPhone.addEventListener('click', () => {
    modalCall.classList.add('modalCall--visible');
    fog.classList.add('fog--visible');
    fog.style.zIndex = '125';
})