// Sample product data
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 },
    { id: 4, name: "Product 4", price: 25 },
    // Add more products here
];

// Get elements
const productContainer = document.querySelector(".product-list");
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const checkoutBtn = document.getElementById("checkout-btn");
const closeBtn = document.querySelector(".close");

// Initialize cart and cart items
let cart = [];
let cartItemCount = 0;

// Function to display products on the page
function displayProducts() {
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Rs. ${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productCard);
    });
}

// Function to add items to the cart
function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    cart.push(product);
    cartItemCount++;
    updateCart();
}

// Function to update the cart and display items in the modal
function updateCart() {
    cartItems.innerHTML = "";
    cart.forEach(item => {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${item.name} - Rs. ${item.price}`;
        cartItems.appendChild(cartItem);
    });
    cartTotal.textContent = `Total: Rs. ${calculateTotal()}`;
    cartCount.textContent = cartItemCount;
}

// Function to calculate the total price of items in the cart
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

// Event listeners
window.addEventListener("load", displayProducts);
document.getElementById("cart-icon").addEventListener("click", () => {
    cartModal.style.display = "block";
});
closeBtn.addEventListener("click", () => {
    cartModal.style.display = "none";
});
checkoutBtn.addEventListener("click", () => {
    // Add your checkout logic here
    alert("Checkout is not implemented yet.");
});

// Close the cart modal when clicking outside the modal content
window.addEventListener("click", event => {
    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }
});
