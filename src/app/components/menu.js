import vars from './home';

vars.menuLink.addEventListener('click', () => {
  vars.menuLink.className = 'active';
  vars.aboutLink.className = '';
  vars.homeLink.className = '';
  vars.content.textContent = 'Lorem ipsum adipisicing elit. Dolor sit amet consectetur voluptates iste qui in.';
});
