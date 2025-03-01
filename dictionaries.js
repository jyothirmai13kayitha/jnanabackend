// Cart storage
const cart = [];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const dictionaryElement = event.target.closest('.dictionary');
        const id = dictionaryElement.dataset.id;
        const title = dictionaryElement.dataset.title;
        const language = dictionaryElement.dataset.language;
        const price = parseFloat(dictionaryElement.dataset.price);

        // Add dictionary to cart
        addToCart(id, title, language, price);
    });
});

// Add dictionary to cart
function addToCart(id, title, language, price) {
    // Check if the dictionary is already in the cart
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
        // Increase quantity
        existingItem.quantity += 1;
    } else {
        // Add new dictionary
        cart.push({ id, title, language, price, quantity: 1 });
    }

    alert(`"${title}" has been added to the cart!`);
    console.log(cart); // For debugging purposes
}
