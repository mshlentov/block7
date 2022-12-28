const buttonShowAll = document.querySelector('.brands__buttonShowAll');
const itemsContainer = document.querySelector('.brands__itemsContainer');
const buttonIcon = document.querySelector('.buttonShowAll__icon');

buttonShowAll.addEventListener('click', () => {
  if(buttonShowAll.classList.contains('brands__buttonShowAll-visible')) {
    itemsContainer.classList.remove('brands__itemsContainer-visible');
    buttonShowAll.classList.remove('brands__buttonShowAll-visible');
    buttonIcon.style.transform = 'rotate(0deg)';
  } else {
    itemsContainer.classList.add('brands__itemsContainer-visible');
    buttonShowAll.classList.add('brands__buttonShowAll-visible');
    buttonIcon.style.transform = 'rotate(180deg)';
  }
})