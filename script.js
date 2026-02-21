let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

/* ADD TO CART */
document.querySelectorAll(".add").forEach(btn => {
    btn.onclick = function () {

        let card = this.parentElement;

        let item = {
            name: card.dataset.name,
            price: card.dataset.price
        };

        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));

        updateCart();
    };
});

/* VIEW PRODUCT PAGE */
document.querySelectorAll(".view").forEach(btn => {
    btn.onclick = function () {

        let card = this.parentElement;

        localStorage.setItem("product",
            JSON.stringify({
                name: card.dataset.name,
                price: card.dataset.price
            }));

        window.location = "product.html";
    };
});

function updateCart() {
    document.querySelector(".cart").innerText =
        "🛒 Cart (" + cart.length + ")";
}