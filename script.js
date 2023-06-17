const swiper1 = new Swiper('.swiper1', {
    autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
    pagination: {
    el: ".swiper-pagination1",
    clickable: false,
  },
navigation: {
nextEl: '.swiper-button-next1',
prevEl: '.swiper-button-prev1',
},
slidesPerView: 1,
spaceBetween: 10,
// using "ratio" endpoints
breakpoints: {
910: {
  slidesPerView: 2,
  spaceBetween: 20,
},
1220: {
  slidesPerView: 3,
  spaceBetween: 20,
},
}
});

const swiper2 = new Swiper('.swiper2', {
  zoom: true,
  autoplay: {
  delay: 9000,
  disableOnInteraction: false,
},
pagination: {
  el: ".swiper-pagination2",
  clickable: true,
},
navigation: {
nextEl: '.swiper-button-next2',
prevEl: '.swiper-button-prev2',
},
slidesPerView: 1,
spaceBetween: 10,
// using "ratio" endpoints
breakpoints: {
910: {
slidesPerView: 2,
spaceBetween: 20,
},
1220: {
slidesPerView: 3,
spaceBetween: 20,
},
}
});

const swiper3 = new Swiper('.swiper3', {
  zoom: true,
  autoplay: {
  delay: 5000,
  disableOnInteraction: false,
},
pagination: {
  el: ".swiper-pagination2",
  clickable: true,
},
navigation: {
nextEl: '.swiper-button-next2',
prevEl: '.swiper-button-prev2',
},
slidesPerView: 1,
spaceBetween: 10,
// using "ratio" endpoints
breakpoints: {
910: {
slidesPerView: 2,
spaceBetween: 20,
},
1220: {
slidesPerView: 3,
spaceBetween: 20,
},
}
});

const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");    
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

// Отримуємо посилання на форму і додаємо обробник події
const form = document.querySelector('.myForm');
form.addEventListener('submit', function(event) {
  // Зупиняємо стандартну поведінку форми, щоб сторінка не перезавантажувалася
  event.preventDefault();

  form.reset();

  // Створюємо вспливаюче вікно
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  const modalText = document.createElement('p');
  modalText.textContent = `Дякуємо за реєстрацію! Ми зв’яжемося з вами. Перевіряйте поштову скриньку та повідомлення у Телеграмм.`;
  modalContent.appendChild(modalText);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Додаємо затемнення для решти сторінки
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  // Видалення вспливаючого вікна та затемнення при кліку на них
  function closeModal() {
    modal.remove();
    overlay.remove();
  }

  modal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
});
