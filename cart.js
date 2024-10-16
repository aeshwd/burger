document.addEventListener("DOMContentLoaded", () => {
    // Get the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Reference to cart elements
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const proceedButton = document.getElementById('proceed-btn');
    const addMoreButton = document.getElementById('add-more-btn');
    const noProduct = document.getElementById('no');

    // Initialize cart display
    updateCartDisplay();

    // Function to update the cart display
    function updateCartDisplay() {
        // Clear the cart container
        cartItemsContainer.innerHTML = "";

        if (cart.length === 0) {
            // If cart is empty, hide subtotal and proceed button, show "Add Products" button
            subtotalElement.style.display = "none";
            proceedButton.style.display = "none";
            addMoreButton.style.display = "block";
            noProduct.style.display = "block";
        } else {
            // Cart is not empty, show the subtotal and proceed button, hide "Add Products" button
            subtotalElement.style.display = "block";
            proceedButton.style.display = "block";
            addMoreButton.style.display = "none";
            noProduct.style.display = "none"

            // Calculate the subtotal
            let subtotal = 0;
            cart.forEach(item => {
                subtotal += item.subtotal;

                // Create cart item elements
                const cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                cartItem.innerHTML = `
                    <img src="${item.imageUrl}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <p>Price: $ ${item.price}</p>
                        <div class="quantity-control">
                            <button class="decrease-btn" data-id="${item.id} ">-</button>
                            <p> ${item.quantity}</p>
                            <button class="increase-btn" data-id="${item.id}">+</button>
                        </div>
                        <button class="remove-btn" data-id="${item.id}">Remove</button>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItem);
            });

            subtotalElement.innerText = `Subtotal: $ ${subtotal.toLocaleString()}`;
        }
    }

    // Event listener for quantity increase and decrease
    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('increase-btn')) {
            const id = e.target.getAttribute('data-id');

            const item = cart.find(item => item.id == id );
            if (item) {
                item.quantity++;
                item.subtotal = item.price * item.quantity;
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartDisplay();
            }
        }

        if (e.target.classList.contains('decrease-btn')) {
            const id = e.target.getAttribute('data-id');

            const item = cart.find(item => item.id == id );
            if (item && item.quantity > 1) {
                item.quantity--;
                item.subtotal = item.price * item.quantity;
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartDisplay();
            }
        }

        if (e.target.classList.contains('remove-btn')) {
            const id = e.target.getAttribute('data-id');

            // Remove the item from the cart
            cart = cart.filter(item => !(item.id == id));
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
        }
    });

    // Event listener for the proceed button
    proceedButton.addEventListener('click', () => {
        if (cart.length > 0) {
            // Show the success alert
            alert("Order placed successfully!");

            // Clear the cart
            localStorage.removeItem('cart');
            cart = [];
            updateCartDisplay();
        }
    });

    // Event listener for the add more products button
    addMoreButton.addEventListener('click', () => {
        window.location.href = 'index.html';  // Redirect to the products page
    });
});
