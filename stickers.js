// Cart storage
const cart = [];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const stickerElement = event.target.closest('.sticker');
        const id = stickerElement.dataset.id;
        const name = stickerElement.dataset.name;
        const material = stickerElement.dataset.material;
        const size = stickerElement.dataset.size;
        const price = parseFloat(stickerElement.dataset.price);

        // Add sticker to cart
        addToCart(id, name, material, size, price);
    });
});

// Add sticker to cart
function addToCart(id, name, material, size, price) {
    // Check if the sticker is already in the cart
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
        // Increase quantity
        existingItem.quantity += 1;
    } else {
        // Add new sticker
        cart.push({ id, name, material, size, price, quantity: 1 });
    }

    alert(`"${name}" has been added to the cart!`);
    console.log(cart); // For debugging purposes
}
