let currentPrice;  // Declare globally to access in multiple functions

document.addEventListener("DOMContentLoaded", () => {
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    if (selectedProduct) {
        showProductDetails(selectedProduct);
    }

    // Event listener for Add to Cart button
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => {
        addToCart(selectedProduct);
        addToCartBtn.innerText = 'Go to Cart';
        addToCartBtn.style.backgroundColor = '#28a745';  // Change background color to green
        addToCartBtn.onclick = () => window.location.href = 'cart.html';  // Redirect to cart on click
    });

    // Event listener for Add More Items button
    document.getElementById('add-more-btn').addEventListener('click', () => {
        window.location.href = 'index.html';  // Redirect to the main product page
    });
});

function showProductDetails(product) {
    const productDetails = document.getElementById("product-details");

    let basePrice = parseInt(product.price.replace(/,/g, ''));
    currentPrice = basePrice;  // Initialize currentPrice with the base price

    productDetails.innerHTML = `
        <div class="product">
            <img src="${product.imageUrl}" alt="${product.name}">
             

            <h2>${product.name}</h2>
            <p class="price" id="dynamic-price">Price: $ ${product.price}</p>
            

            <!-- Quantity selector -->
            <div class="quantity-control">
                <button id="decrease-btn">-</button>
                <input type="number" id="quantity" value="1" min="1" max="10">
                <button id="increase-btn">+</button>
            </div>

            <!-- Subtotal -->
            <p id="subtotal">Subtotal: $ ${product.price}</p>

            <!-- Description -->
            <h3> Description </h3>
            <p class="des">${product.des}</p>
        </div>
    `;

    const quantityInput = document.getElementById("quantity");
    const decreaseBtn = document.getElementById("decrease-btn");
    const increaseBtn = document.getElementById("increase-btn");
    const subtotalDisplay = document.getElementById("subtotal");
    const priceDisplay = document.getElementById("dynamic-price");

    function updateSubtotal() {
        const quantity = parseInt(quantityInput.value);
        const subtotal = currentPrice * quantity;
        subtotalDisplay.innerText = `Subtotal: $ ${subtotal.toLocaleString()}`;
    }

    

    increaseBtn.addEventListener("click", () => {
        let quantity = parseInt(quantityInput.value);
        if (quantity < 10) {
            quantityInput.value = quantity + 1;
            updateSubtotal();
        }
    });

    decreaseBtn.addEventListener("click", () => {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantityInput.value = quantity - 1;
            updateSubtotal();
        }
    });

    quantityInput.addEventListener("input", () => {
        updateSubtotal();
    });
}

function addToCart(product) {
    const quantity = parseInt(document.getElementById('quantity').value) - 1;
    const price = Math.round(currentPrice);  // Use currentPrice to calculate final price

    // Create the cart item
    const cartItem = {
        id: product.id,
        name: product.name,
        imageUrl: product.imageUrl,
        quantity: quantity,
        price: price,
        subtotal: price * quantity
    };

    // Get the existing cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.subtotal = existingItem.price * existingItem.quantity;
    } else {
        cart.push(cartItem);
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}
