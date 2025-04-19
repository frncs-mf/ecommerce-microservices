const API_URL = 'http://localhost:5001/products'; // Update based on your service port

// Load products on page load
window.addEventListener('DOMContentLoaded', async () => {
    try {
        const res = await fetch(API_URL);
        const products = await res.json();
        const list = document.getElementById('product-list');

        if (list && products.length > 0) {
            list.innerHTML = products.map(p => `
                <div class="product-card">
                    <h3>${p.name}</h3>
                    <p>Price: ₱${p.price}</p>
                </div>
            `).join('');
        }
    } catch (err) {
        console.error("Failed to load products:", err);
    }
});

// Handle add product form submission
const form = document.getElementById('add-product-form');
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;

        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, price })
            });

            window.location.reload(); // Refresh to show updated list
        } catch (err) {
            console.error("Failed to add product:", err);
        }
    });
}
