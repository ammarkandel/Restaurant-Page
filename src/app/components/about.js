import vars from './home';

vars.aboutLink.addEventListener('click', () => {
  vars.menuLink.className = '';
  vars.homeLink.className = '';
  vars.aboutLink.className = 'active';
  vars.content.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iste qui in, voluptatem autem sapiente ullam dolor dolores placeat nesciunt!';
});
