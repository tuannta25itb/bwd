function renderAccessories(type = null) {
  const container = document.getElementById("product-list");

  const data = JSON.parse(localStorage.getItem("Accessories")) || [];

  let list = data;

  if (type) {
    list = list.filter((p) => p.type === type);
  }

  container.innerHTML = list
    .map(
      (p) => `
    <div class="col-6 col-md-3">

      <!-- CLICK sang trang chi tiết -->
      <a href="productaccess.html?id=${p.id}" class="text-decoration-none text-dark">
        <div class="product-card position-relative">

          <div class="sale-badge">-15%</div>

          <img src="${p.thumbnail}" class="product-img">

          <h6 class="product-name">${p.name}</h6>

          <p class="stock-text">
            Còn ${p.stock ?? 0} sản phẩm
          </p>

          <div class="price">
            <span class="new">${p.price.toLocaleString()}đ</span>
            <span class="old">${(p.oldPrice || p.price + 300000).toLocaleString()}đ</span>
          </div>

        </div>
      </a>

    </div>
  `,
    )
    .join("");
}
