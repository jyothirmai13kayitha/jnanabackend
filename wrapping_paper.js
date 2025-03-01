// Cart storage
const cart = [];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const paperElement = event.target.closest('.paper');
        const id = paperElement.dataset.id;
        const name = paperElement.dataset.name;
        const color = paperElement.dataset.color;
        const material = paperElement.dataset.material;
        const price = parseFloat(paperElement.dataset.price);

        // Add wrapping paper to cart
        addToCart(id, name, color, material, price);
    });
});

// Add wrapping paper to cart
function addToCart(id, name, color, material, price) {
    // Check if the wrapping paper is already in the cart
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
        // Increase quantity
        existingItem.quantity += 1;
    } else {
        // Add new wrapping paper
        cart.push({ id, name, color, material, price, quantity: 1 });
    }

    alert(`"${name}" has been added to the cart!`);
    console.log(cart); // For debugging purposes
}
