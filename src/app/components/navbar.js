const nav = document.createElement('nav');
const div = document.createElement('div');
const ul = document.createElement('ul');
const aContent = ['about', 'menu'];

for (let i = 0; i < aContent.length; i += 1) {
  const a = document.createElement('a');
  const li = document.createElement('li');
  a.setAttribute('href', `#${aContent[i]}`);
  a.textContent = aContent[i];
  li.appendChild(a);
  ul.appendChild(li);
}
div.classList.add('logo');
div.textContent = 'Tito';
nav.appendChild(div);
nav.appendChild(ul);
document.body.appendChild(nav);
