// Cart storage
const cart = [];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const giftboxElement = event.target.closest('.giftbox');
        const id = giftboxElement.dataset.id;
        const name = giftboxElement.dataset.name;
        const size = giftboxElement.dataset.size;
        const material = giftboxElement.dataset.material;
        const price = parseFloat(giftboxElement.dataset.price);

        // Add gift box to cart
        addToCart(id, name, size, material, price);
    });
});

// Add gift box to cart
function addToCart(id, name, size, material, price) {
    // Check if the gift box is already in the cart
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
        // Increase quantity
        existingItem.quantity += 1;
    } else {
        // Add new gift box
        cart.push({ id, name, size, material, price, quantity: 1 });
    }

    alert(`"${name}" has been added to the cart!`);
    console.log(cart); // For debugging purposes
}
