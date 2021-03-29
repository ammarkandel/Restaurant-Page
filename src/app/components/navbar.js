const nav = document.createElement('nav');
const div = document.createElement('div');
const ul = document.createElement('ul');
const liContent = ['about', 'menu', 'contact us'];

for (let i = 0; i < liContent.length; i += 1) {
  const li = document.createElement('li');
  li.textContent = liContent[i];
  ul.appendChild(li);
}

div.classList.add('logo');
div.textContent = 'Tito';

nav.appendChild(div);
nav.appendChild(ul);
document.body.appendChild(nav);
