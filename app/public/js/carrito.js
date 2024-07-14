// Array para almacenar los productos del carrito
let cart = [];

// Función para agregar un producto al carrito
function addToCart(productId, productName, productPrice) {
    // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find(product => product.id === productId);
    if (existingProduct) {
        // Si el producto ya está en el carrito, incrementar la cantidad
        existingProduct.quantity += 1;
    } else {
        // Si el producto no está en el carrito, agregarlo
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }
    updateCart();
}

// Función para actualizar la visualización del carrito
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach(product => {
        total += product.price * product.quantity;
        const productElement = document.createElement('div');
        productElement.className = 'cart-item';
        productElement.innerHTML = `
            <span>${product.name}</span>
            <span> : </span>
            <span>${product.quantity}</span>
            <span> x </span>
            <span>$${Math.trunc(product.price)}</span>
            <button class="remove-btn">Eliminar</button>
        `;
        cartItemsContainer.appendChild(productElement);

        // Añadir el event listener al botón
        productElement.querySelector('.remove-btn').addEventListener('click', () => removeFromCart(product.id));
    });

    cartTotalContainer.innerText = `Total: $${Math.trunc(total)}`;
    document.getElementById('cart-count').innerText = cart.length;
}

// Función para eliminar un producto del carrito
function removeFromCart(productId) {
    cart = cart.filter(product => product.id !== productId);
    updateCart();
}

// Función para realizar el pedido (checkout)
function checkout() {
    alert('Pedido realizado con éxito!');
    cart = [];
    updateCart();
}

// Función para mostrar/ocultar el carrito
function toggleCart() {
    const cartElement = document.getElementById('cart');
    cartElement.style.display = cartElement.style.display === 'none' ? 'block' : 'none';
}

// Inicializar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    updateCart();
});
