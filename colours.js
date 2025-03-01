// Cart storage
const cart = [];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const colorItem = event.target.closest('.color-item');
        const id = colorItem.dataset.id;
        const name = colorItem.dataset.name;
        const type = colorItem.dataset.type;
        const size = colorItem.dataset.size;
        const price = parseFloat(colorItem.dataset.price);

        // Add color product to cart
        addToCart(id, name, type, size, price);
    });
});

// Add color product to cart
function addToCart(id, name, type, size, price) {
    // Check if the product is already in the cart
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
        // Increase quantity
        existingItem.quantity += 1;
    } else {
        // Add new product
        cart.push({ id, name, type, size, price, quantity: 1 });
    }

    alert(`"${name}" has been added to the cart!`);
    console.log(cart); // For debugging purposes
}
