import '../scss/style.scss'

// Скрипт прячет логотип при скролинге 
let lastScrollY = window.scrollY;
const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Прячем логотип при прокрутке вниз
    logo.style.transform = 'translateY(-100%)';
    logo.style.opacity = '0';
  } else {
    // Показываем логотип при прокрутке вверх
    logo.style.transform = 'translateY(0)';
    logo.style.opacity = '1';
  }
  lastScrollY = window.scrollY;
});