// Task 1: Document Manipulation with JavaScript
let products = [
    { name: "Laptop", price: 999.99, description: "portable pc" },
    { name: "Smartphone", price: 699.99, description: "handy tiny pc" },
    { name: "Headphones", price: 149.99, description: "overpriced music blaster" }
];

function displayProducts() {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = ''; 

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);
        productsContainer.appendChild(productDiv);
    });
}

document.addEventListener('DOMContentLoaded', displayProducts);

// Task 2: Form Manipulation with JavaScript
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('All fields are required!');
        return;
    }

    const userData = { name, email, message };
    displayFormData(userData);
});

function displayFormData(data) {
    const formDataDiv = document.getElementById('formData');
    formDataDiv.innerHTML = `
        <h3>Submitted Information</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.message}</p>
    `;
}

// Task 3: Styling with JavaScript
function changeColor() {
    const box = document.getElementById('box');
    box.style.backgroundColor = box.style.backgroundColor === 'lightblue' ? 'lightcoral' : 'lightblue';
}

function changeBackgroundColor(element) {
    element.style.backgroundColor = 'purple';
}

function resetBackgroundColor(element) {
    element.style.backgroundColor = 'teal';
}

function changeAllColors() {
    const boxes = document.querySelectorAll('.hoverEffect');
    boxes.forEach(box => {
        box.style.backgroundColor = 'pink';
    });
}
