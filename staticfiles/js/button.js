//Select the <a> element
const itemButton = document.querySelector('.item__button');

//Hide the element on page load
itemButton.style.opacity = '0';

//Listen for the scroll event on window
window.addEventListener('scroll', () => {
  //Check if window's scrollY is bigger than 100vh
  if(window.scrollY > 400) {
    //Show the <a> element
    itemButton.style.opacity = '1';
    itemButton.style.transition = 'opacity 0.25s ease-in';
  } else {
    //Hide the <a> element
    itemButton.style.opacity = '0';
    itemButton.style.transition = 'opacity 0.25s ease-out';
  }
});