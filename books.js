// Get all Add to Cart buttons
const cart = [];

document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const bookElement = event.target.closest('.book');
        const id = bookElement.dataset.id;
        const title = bookElement.dataset.title;
        const author = bookElement.dataset.author;
        const price = parseFloat(bookElement.dataset.price);

        // Add to cart logic
        addToCart(id, title, author, price);
    });
});

// Add book to cart
function addToCart(id, title, author, price) {
    const existingBook = cart.find((item) => item.id === id);

    if (existingBook) {
        existingBook.quantity += 1;
    } else {
        cart.push({ id, title, author, price, quantity: 1 });
    }

    alert(`${title} has been added to the cart!`);
    console.log(cart); // For debugging purposes
}
