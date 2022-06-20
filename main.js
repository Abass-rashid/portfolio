const nav = document.querySelector('.mobile');
const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  nav.classList.toggle('active');
});


