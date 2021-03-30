const aboutSection = document.createElement('section');
const aboutTitle = document.createElement('h1');
const description = document.createElement('p');

aboutSection.setAttribute('id', 'about');

aboutTitle.textContent = 'About';
aboutSection.appendChild(aboutTitle);

description.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis consectetur optio esse corporis reprehenderit fugiat quo adipisci distinctio voluptatibus.';
aboutSection.appendChild(description);

document.body.appendChild(aboutSection);
