const menuSection = document.createElement('section');
const menuTitle = document.createElement('h1');
const menuDetails = document.createElement('ul');
const menuContent = ['burger', 'sushi', 'meat', 'chicken'];

menuSection.setAttribute('id', 'menu');
menuTitle.textContent = 'Menu';
menuSection.appendChild(menuTitle);

for (let i = 0; i < menuContent.length; i += 1) {
  const li = document.createElement('li');
  
  li.textContent = menuContent[i];
  menuDetails.appendChild(li);
}

menuSection.appendChild(menuDetails);

document.body.appendChild(menuSection);
