const buttonShowAll = document.querySelector('.gadgets__buttonShowAll');
const itemsContainer = document.querySelector('.gadgets__itemsContainer');
const buttonIcon = document.querySelector('.gadgets .buttonShowAll__icon');

buttonShowAll.addEventListener('click', () => {
  if(buttonShowAll.classList.contains('gadgets__buttonShowAll-visible')) {
    itemsContainer.classList.remove('gadgets__itemsContainer-visible');
    buttonShowAll.classList.remove('gadgets__buttonShowAll-visible');
    buttonIcon.style.transform = 'rotate(0deg)';
  } else {
    itemsContainer.classList.add('gadgets__itemsContainer-visible');
    buttonShowAll.classList.add('gadgets__buttonShowAll-visible');
    buttonIcon.style.transform = 'rotate(180deg)';
  }
})