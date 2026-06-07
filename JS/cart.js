let cart = JSON.parse(localStorage.getItem("cart")) || [];

// thêm vào giỏ
function addToCart(id) {
  let product = products.find((p) => p.id === id);

  let item = cart.find((p) => p.id === id);

  if (item) {
    item.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ!");
}

// đi tới giỏ hàng
function goToCart() {
  window.location.href = "cart.html";
}

function showCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let count = cart.reduce((sum, item) => sum + item.qty, 0);

  document.getElementById("cart-count").innerText = count;
}

function placeOrder() {
  const fullname = document.getElementById("fullname").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;

  // kiểm tra nhập
  if (!fullname || !phone || !email || !address) {
    alert("Vui lòng nhập đầy đủ thông tin");

    return;
  }

  // xóa giỏ hàng
  localStorage.removeItem("cart");

  function goToCheckout() {
    if (cart.length === 0) {
      alert("Giỏ hàng đang trống");
      return;
    }

    window.location.href = "checkout.html";
  }

  // thông báo
  alert("🎉 Đặt hàng thành công!\n\nCảm ơn bạn đã mua hàng tại KT2 SPORT");

  // chuyển về trang chủ
  window.location.href = "main.html";
}
