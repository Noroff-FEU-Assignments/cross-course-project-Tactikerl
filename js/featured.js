const url =
  "https://flowerpowerkmk.site/gamehub/wp-json/wc/v3/products?consumer_key=ck_b2378667c8f3e0f194dd73303278d50da6d519de&consumer_secret=cs_4110feae47bcc51effebdd5f0c42bfe925f3ce86";
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
    if (product.featured)
      productContainer.innerHTML += `<a href="product/productpage.html?id=${product.id}"<div class="featured_games_container"><h2>${product.name}</h2><img src="${product.images[0].src}" alt="${product.name}"></a></div>`;
  });
}
