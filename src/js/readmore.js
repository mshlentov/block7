const descContent = document.querySelectorAll('.description__content');
const readMore = document.querySelector('.description__readmore');
const descSpan = document.querySelector('.description__span');
const readMoreIcon = document.querySelector('.readmore__icon');

readMore.addEventListener('click', () => {
    if (readMore.classList.contains('description__readmore--visible')) {
        descContent[1].classList.add('description__content--hidden');
        descSpan.classList.add('description__span_hidden');
        readMore.classList.remove('description__readmore--visible');
        readMoreIcon.style.transform = 'rotate(0deg)';
    } else {
        descContent[1].classList.remove('description__content--hidden');
        descSpan.classList.remove('description__span_hidden');
        readMore.classList.add('description__readmore--visible');
        readMoreIcon.style.transform = 'rotate(180deg)';
    }
})