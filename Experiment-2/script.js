// Sample product data
const products = [
    { name: "Laptop", category: "electronics" },
    { name: "Smartphone", category: "electronics" },
    { name: "T-Shirt", category: "clothing" },
    { name: "Jeans", category: "clothing" },
    { name: "Novel", category: "books" },
    { name: "Dictionary", category: "books" }
];

const categorySelect = document.getElementById("categorySelect");
const productList = document.getElementById("productList");

// Function to display products
function displayProducts(filter) {
    productList.innerHTML = ""; // Clear existing products
    const filtered = filter === "all"
        ? products
        : products.filter(p => p.category === filter);

    filtered.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.textContent = product.name;
        productList.appendChild(div);
    });
}

// Event listener for dropdown change
categorySelect.addEventListener("change", () => {
    displayProducts(categorySelect.value);
});

// Initial display
displayProducts("all");
