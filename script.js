const botao = document.getElementById("add_cart")

function fnShop () {
  const shop_cart = document.getElementById("shop_cart")
  shop_cart.classList.toggle('active');
}

botao.addEventListener("click", fnShop)