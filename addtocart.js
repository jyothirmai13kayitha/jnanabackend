// Get cart elements
const cartItemsElement = document.querySelector('.cart-items');
const cartTotalElement = document.getElementById('cart-total');

// Cart storage
let cart = [];

// Update the cart display
function updateCart() {
    // Clear cart display
    cartItemsElement.innerHTML = '';

    // Populate with current cart items
    cart.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price} (x${item.quantity})`;
        cartItemsElement.appendChild(listItem);
    });

    // Update total price
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotalElement.textContent = total.toFixed(2);
}

// Add item to cart
function addToCart(id, name, price) {
    // Check if item is already in the cart
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
        // Increment quantity
        existingItem.quantity += 1;
    } else {
        // Add new item
        cart.push({ id, name, price, quantity: 1 });
    }

    // Update cart display
    updateCart();
}

// Add event listeners to buttons
document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product');
        const id = productElement.dataset.id;
        const name = productElement.dataset.name;
        const price = parseFloat(productElement.dataset.price);

        addToCart(id, name, price);
    });
});

// Initialize cart
updateCart();
