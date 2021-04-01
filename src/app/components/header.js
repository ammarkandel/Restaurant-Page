const mainDiv = document.getElementById('content');
const header = document.createElement('header');
const defaultText = 'Get the best from food';
header.setAttribute('id', 'display-content');
header.textContent = defaultText;
mainDiv.appendChild(header);

export default defaultText;
