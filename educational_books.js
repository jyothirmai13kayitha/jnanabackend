// Cart storage
const cart = [];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const bookElement = event.target.closest('.book');
        const id = bookElement.dataset.id;
        const title = bookElement.dataset.title;
        const author = bookElement.dataset.author;
        const price = parseFloat(bookElement.dataset.price);

        // Add book to cart
        addToCart(id, title, author, price);
    });
});

// Add book to cart
function addToCart(id, title, author, price) {
    // Check if the book is already in the cart
    const existingBook = cart.find((item) => item.id === id);

    if (existingBook) {
        // Increase quantity
        existingBook.quantity += 1;
    } else {
        // Add new book
        cart.push({ id, title, author, price, quantity: 1 });
    }

    alert(`"${title}" has been added to the cart!`);
    console.log(cart); // For debugging purposes
}
