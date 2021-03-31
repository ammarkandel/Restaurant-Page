import defaultText from './header';
const aboutLink = document.getElementById('about');
const menuLink = document.getElementById('menu');
const homeLink = document.getElementById('home');
const content = document.getElementById('display-content');


menuLink.addEventListener('click', () => {
  menuLink.className = 'active';
  aboutLink.className = '';
  homeLink.className = '';
  content.textContent = 'Lorem ipsum adipisicing elit. Dolor sit amet consectetur voluptates iste qui in.';
});

aboutLink.addEventListener('click', () => {
  menuLink.className = '';
  homeLink.className = '';
  aboutLink.className = 'active';
  content.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iste qui in, voluptatem autem sapiente ullam dolor dolores placeat nesciunt!';
});

homeLink.className = 'active';
homeLink.addEventListener('click', () => {
  aboutLink.className = '';
  menuLink.className = '';
  homeLink.className = 'active';
  content.textContent = defaultText;
});
