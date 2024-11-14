export default function createMenu() {
    const content = document.createElement('div');
    content.classList.add('menu');

    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.alignItems = 'center';
    content.style.justifyContent = 'center';
    content.style.padding = '20px';
    content.style.backgroundColor = '#f0f0f0';
    content.style.borderRadius = '10px';
    content.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

    const ourMenu = document.createElement('h1');
    ourMenu.textContent = 'Our Menu';

    const list = document.createElement('ul');
    list.style.listStyleType = 'none';
    list.style.padding = '0';
    list.style.margin = '0';
    list.style.fontSize = '1.2em';
    list.style.color = '#666';

    const item1 = document.createElement('li');
    item1.textContent = 'Socky sausages';
    list.appendChild(item1);

    const item2 = document.createElement('li');
    item2.textContent = 'Buggy soup';
    list.appendChild(item2);

    const item3 = document.createElement('li');
    item3.textContent = 'Slimy dessert';
    list.appendChild(item3);

    content.appendChild(ourMenu)
    content.appendChild(list)

    return content;
}