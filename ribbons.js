// Cart storage
const cart = [];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const ribbonElement = event.target.closest('.ribbon');
        const id = ribbonElement.dataset.id;
        const name = ribbonElement.dataset.name;
        const color = ribbonElement.dataset.color;
        const material = ribbonElement.dataset.material;
        const price = parseFloat(ribbonElement.dataset.price);

        // Add ribbon to cart
        addToCart(id, name, color, material, price);
    });
});

// Add ribbon to cart
function addToCart(id, name, color, material, price) {
    // Check if the ribbon is already in the cart
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
        // Increase quantity
        existingItem.quantity += 1;
    } else {
        // Add new ribbon
        cart.push({ id, name, color, material, price, quantity: 1 });
    }

    alert(`"${name}" has been added to the cart!`);
    console.log(cart); // For debugging purposes
}
