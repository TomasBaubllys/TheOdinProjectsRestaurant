import createContact from "./contact";
import createHome from "./home";
import createMenu from "./menu";
import "./styles.css";

const contentContainer = document.getElementById('content');

const contactTab = document.getElementById('contact');  // Assuming there's an element with id "contact" that triggers the contact section
const homeTab = document.getElementById('home');
const menuTab = document.getElementById('menu');

contactTab.addEventListener('click', (e) => {
    e.preventDefault();

    contentContainer.innerHTML = '';
    
    contentContainer.appendChild(createContact());
});

homeTab.addEventListener('click', (e) => {
    e.preventDefault();

    contentContainer.innerHTML = '';

    contentContainer.appendChild(createHome());
});

menuTab.addEventListener('click', (e) => {
    e.preventDefault();

    contentContainer.innerHTML = '';

    contentContainer.appendChild(createMenu());
});