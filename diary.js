// Cart storage
const cart = [];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const diaryElement = event.target.closest('.diary');
        const id = diaryElement.dataset.id;
        const name = diaryElement.dataset.name;
        const size = diaryElement.dataset.size;
        const cover = diaryElement.dataset.cover;
        const paper = diaryElement.dataset.paper;
        const price = parseFloat(diaryElement.dataset.price);

        // Add diary to cart
        addToCart(id, name, size, cover, paper, price);
    });
});

// Add diary to cart
function addToCart(id, name, size, cover, paper, price) {
    // Check if the diary is already in the cart
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
        // Increase quantity
        existingItem.quantity += 1;
    } else {
        // Add new diary
        cart.push({ id, name, size, cover, paper, price, quantity: 1 });
    }

    alert(`"${name}" has been added to the cart!`);
    console.log(cart); // For debugging purposes
}
