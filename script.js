const products = [];

const searchInput = document.getElementById("search");
const results = document.getElementById("results");

if (searchInput && results) {
  searchInput.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();

    if (products.length === 0) {
      results.innerHTML = `
        <h3>Catalogue bientôt disponible</h3>
        <p>Nos produits seront bientôt ajoutés à la boutique.</p>
      `;
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      results.innerHTML = "<h3>Aucun produit trouvé.</h3>";
      return;
    }

    results.innerHTML = filtered.map(product => `
      <div class="product">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a href="${product.url}" class="btn">Découvrir</a>
      </div>
    `).join("");
  });
}
