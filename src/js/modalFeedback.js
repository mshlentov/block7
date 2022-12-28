const menuChatButton = document.querySelector('.menu__chat');
const modalChat = document.querySelector('.modalFeedback');
const modalChatClose = document.querySelector('.modalFeedback__close');
const fog = document.querySelector('.fog');
const headerMessage = document.querySelector('.header__message');

menuChatButton.addEventListener('click', () => {
    modalChat.classList.add('modalFeedback--visible');
    fog.classList.add('fog--visible');
    fog.style.zIndex = '125';
})

modalChatClose.addEventListener('click', () => {
    modalChat.classList.remove('modalFeedback--visible');
    fog.classList.remove('fog--visible');
    fog.style.zIndex = '50';
})

fog.addEventListener('click', () => {
    modalChat.classList.remove('modalFeedback--visible');
    fog.classList.remove('fog--visible');
    fog.style.zIndex = '50';
})

headerMessage.addEventListener('click', () => {
    modalChat.classList.add('modalFeedback--visible');
    fog.classList.add('fog--visible');
    fog.style.zIndex = '125';
})