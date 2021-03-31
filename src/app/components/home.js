import defaultText from './header';

const aboutLink = document.getElementById('about');
const menuLink = document.getElementById('menu');
const homeLink = document.getElementById('home');
const content = document.getElementById('display-content');

homeLink.className = 'active';
homeLink.addEventListener('click', () => {
  aboutLink.className = '';
  menuLink.className = '';
  homeLink.className = 'active';
  content.textContent = defaultText;
});

const vars = {
  aboutLink,
  menuLink,
  homeLink,
  content
}

export default vars;