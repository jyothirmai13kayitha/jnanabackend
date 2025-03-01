// Cart storage
const cart = [];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const product = event.target.closest('.product');
        const id = product.dataset.id;
        const name = product.dataset.name;
        const brand = product.dataset.brand;
        const type = product.dataset.type;
        const colors = product.dataset.colors;
        const price = parseFloat(product.dataset.price);

        // Add product to cart
        addToCart(id, name, brand, type, colors, price);
    });
});

// Add product to cart
function addToCart(id, name, brand, type, colors, price) {
    // Check if the product is already in the cart
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
        // Increase quantity
        existingItem.quantity += 1;
    } else {
        // Add new product
        cart.push({ id, name, brand, type, colors, price, quantity: 1 });
    }

    alert(`"${name}" has been added to the cart!`);
    console.log(cart); // For debugging purposes
}
