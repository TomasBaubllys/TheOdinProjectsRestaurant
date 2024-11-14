// home.js

export default function createHome() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    homeDiv.style.display = 'flex';
    homeDiv.style.flexDirection = 'column';
    homeDiv.style.padding = '20px';
    homeDiv.style.alignItems = 'center';
    homeDiv.style.justifyContent = 'center';
    homeDiv.style.backgroundColor = '#f0f0f0';
    homeDiv.style.borderRadius = '10px';
    homeDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    
    const header = document.createElement('h1');
    header.textContent = 'Welcome to Our Restaurant!';
    header.style.fontSize = '2em';
    header.style.color = '#333';
    header.style.marginBottom = '10px';
    
    const description = document.createElement('div');
    description.textContent = 'We are delighted to serve you with the worst dishes.';
    description.style.fontSize = '1.2em';
    description.style.color = '#666';

    const description2 = document.createElement('div');
    description2.textContent = 'Don`t ask about it please.';
    description2.style.fontSize = '1.2em';
    description2.style.color = '#666';

    homeDiv.appendChild(header);
    homeDiv.appendChild(description);
    homeDiv.appendChild(description2);

    return homeDiv;
}
