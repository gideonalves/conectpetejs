const hamburger = document.querySelector('.hamburger');
console.log(hamburger);

const wrapper = document.querySelector('nav .wrapper');
const menuLinks = document.querySelectorAll('.menu ul li a');

// Abre/fecha o menu mobile
hamburger.addEventListener('click', () => {
  wrapper.classList.toggle('menu-active');
});

// Fecha o menu ao clicar em um link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    wrapper.classList.remove('menu-active');
  });
});