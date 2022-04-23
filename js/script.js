const url = "https://flowerpowerkmk.site/gamehub/wp-json/wc/store/products";
const productContainer = document.querySelector(".featured_games");

async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    console.log(getResults);
    createHTML(getResults);
  } catch (error) {
    console.log(error);
  }
}

getProducts();

function createHTML(products) {
  products.forEach(function (product) {
    productContainer.innerHTML += `<a href="product/productpage.html?id=${product.id}"<div class="featured_games_container"><h2>${product.name}</h2><img src="${product.images[0].src}" alt="${product.name}"></a></div>`;
  });
}
