let products = [
  { id: 1, name: "Curso 1", price: 10.9, image: "https://picsum.photos/200" },
  { id: 2, name: "Curso 2", price: 15.5, image: "https://picsum.photos/200" },
  { id: 3, name: "Curso 3", price: 20.0, image: "https://picsum.photos/200" },
  { id: 4, name: "Curso 4", price: 12.75, image: "https://picsum.photos/200" },
  { id: 5, name: "Curso 5", price: 18.9, image: "https://picsum.photos/200" },
  { id: 6, name: "Curso 6", price: 25.0, image: "https://picsum.photos/200" },
  { id: 7, name: "Curso 7", price: 30.5, image: "https://picsum.photos/200" },
  { id: 8, name: "Curso 8", price: 9.99, image: "https://picsum.photos/200" },
  { id: 9, name: "Curso 9", price: 14.2, image: "https://picsum.photos/200" },
];

let cart = [];

/* ===== Renderiza os produtos ===== */
function renderProducts() {
  // Seleciona o container BEM onde os produtos vão aparecer
  let productGrid = document.querySelector(".products__grid");

  // Limpa o conteúdo anterior para evitar duplicação
  productGrid.innerHTML = "";

  // Percorre o array 'products' e cria um bloco para cada item
  products.forEach((product) => {
    // Cria uma div para representar o produto
    let productDiv = document.createElement("div");
    productDiv.className = "product";

    // Define o HTML interno da div com imagem, nome, preço e botão
    productDiv.innerHTML = `
      <img class="product__image" src="${product.image}" alt="${product.name}">
      <h3 class="product__title">${product.name}</h3>
      <p class="product__price">R$${product.price.toFixed(2)}</p>
      <button class="product__button">Adicionar ao Carrinho</button>
    `;

    // Adiciona um evento ao botão para chamar a função addToCart
    productDiv
      .querySelector(".product__button")
      .addEventListener("click", () => addToCart(product.id));

    // Insere a div do produto dentro do container principal
    productGrid.appendChild(productDiv);
  });
}

/* ===== Adiciona produto ao carrinho ===== */
function addToCart(productId) {
  let product = products.find((p) => p.id === productId);

  // Verifica se já existe no carrinho
  let item = cart.find((p) => p.id === productId);

  if (item) {
    item.quantity += 1; // aumenta quantidade
  } else {
    cart.push({ ...product, quantity: 1 }); // adiciona novo com quantidade = 1
  }

  renderCart();
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.reduce(
    (acc, p) => acc + p.quantity,
    0,
  );
}

function renderCart() {
  let cartTable = document.querySelector(".cart__body");
  cartTable.innerHTML = "";

  cart.forEach((product) => {
    let cartRow = document.createElement("tr");
    cartRow.className = "cart__row";
    cartRow.innerHTML = `
      <td class="cart__col">${product.name}</td>
      <td class="cart__col">${product.quantity}</td>
      <td class="cart__col">R$${product.price.toFixed(2)}</td>
      <td class="cart__col">R$${(product.price * product.quantity).toFixed(2)}</td>
      <td class="cart__col"><button class="cart__remove">Remover</button></td>
    `;

    // Botão de remover
    cartRow.querySelector(".cart__remove").addEventListener("click", () => {
      cart = cart.filter((p) => p.id !== product.id);
      renderCart();
    });

    cartTable.appendChild(cartRow);
  });

  updateTotal();
  updateCartCount();
}

/* ===== Atualiza o total ===== */
function updateTotal() {
  let total = cart.reduce((acc, product) => acc + product.price, 0);
  document.querySelector(".cart__value").textContent = `R$${total.toFixed(2)}`;
}

/* ===== Checkout ===== */
document.querySelector(".cart__checkout").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!");
  } else {
    alert("Pedido realizado com sucesso!");
    cart = [];
    renderCart();
  }
});

/* ===== Inicializa ===== */
renderProducts();
