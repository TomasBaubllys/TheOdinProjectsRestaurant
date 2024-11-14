// contact.js
export default function createContact() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    // Apply styles to the container
    contactDiv.style.display = 'flex';
    contactDiv.style.flexDirection = 'column';
    contactDiv.style.alignItems = 'center';
    contactDiv.style.padding = '20px';
    contactDiv.style.maxWidth = '500px';
    contactDiv.style.margin = 'auto';
    contactDiv.style.border = '1px solid #ccc';
    contactDiv.style.borderRadius = '8px';
    contactDiv.style.backgroundColor = '#f9f9f9';
    contactDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

    const heading = document.createElement('h2');
    heading.textContent = "Contact Us";
    heading.style.marginBottom = '20px';
    heading.style.color = '#333';

    const form = document.createElement('form');
    form.style.width = '100%';

    const createLabeledInput = (labelText, inputElement) => {
        const label = document.createElement('label');
        label.textContent = labelText;
        label.style.display = 'block';
        label.style.marginBottom = '5px';
        label.style.color = '#555';
        
        const container = document.createElement('div');
        container.style.marginBottom = '15px';

        inputElement.style.width = '100%';
        inputElement.style.padding = '10px';
        inputElement.style.border = '1px solid #ccc';
        inputElement.style.borderRadius = '4px';
        inputElement.style.boxSizing = 'border-box';

        container.appendChild(label);
        container.appendChild(inputElement);
        
        return container;
    };

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';

    const messageInput = document.createElement('textarea');
    messageInput.id = 'message';
    messageInput.name = 'message';
    messageInput.style.height = '100px';
    messageInput.style.resize = 'vertical';

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = "Send";
    submitButton.style.padding = '10px 20px';
    submitButton.style.backgroundColor = '#4CAF50';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '4px';
    submitButton.style.cursor = 'pointer';
    submitButton.style.transition = 'background-color 0.3s ease';

    submitButton.onmouseover = () => {
        submitButton.style.backgroundColor = '#45a049';
    };
    submitButton.onmouseout = () => {
        submitButton.style.backgroundColor = '#4CAF50';
    };

    form.appendChild(createLabeledInput("Name:", nameInput));
    form.appendChild(createLabeledInput("Email:", emailInput));
    form.appendChild(createLabeledInput("Message:", messageInput));
    form.appendChild(submitButton);

    contactDiv.appendChild(heading);
    contactDiv.appendChild(form);

    return contactDiv;
}
