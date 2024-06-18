// Informasi barang
const items = {
    item1: { name: 'Item 1', price: 10 },
    item2: { name: 'Item 2', price: 15 },
    // Tambahkan barang lain jika diperlukan
};

// Harga awal dan item yang sedang dipilih
let currentItem = 'item1';
let initialPrice = items[currentItem].price;

function increaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
    updatePrice();
}

function decreaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
        updatePrice();
    }
}

function updatePrice() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);

    // Hitung harga berdasarkan jumlah yang dipilih dan item yang dipilih
    var totalPrice = items[currentItem].price * currentQuantity;

    // Perbarui tampilan harga
    var priceElement = document.getElementById('price');
    priceElement.textContent = 'Price for ' + items[currentItem].name + ': $' + totalPrice;
}
