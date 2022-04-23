const detailsContainer = document.querySelector(".product_game");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url =
  "https://flowerpowerkmk.site/gamehub/wp-json/wc/store/products/" + id;

async function fetchGame() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHTML(details);
  } catch (error) {
    console.log(error);
    detailsContainer.innerHTML = message("error", error);
  }
}

fetchGame();

function createHTML(product) {
  detailsContainer.innerHTML = `<img class="image" src="${product.images[0].src}"/><div class="product_game_container"><h1 >${product.name}</h1>
    <p>${product.description}</p>
    <p>Price:${product.price_html}</p></div>`;
}
