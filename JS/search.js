function liveSearch(value) {
  const box = document.getElementById("search-results");

  if (!value.trim()) {
    box.innerHTML = "";
    return;
  }

  const products = JSON.parse(localStorage.getItem("Products")) || [];
  const accessories = JSON.parse(localStorage.getItem("Accessories")) || [];

  // gắn source để phân biệt
  const all = [
    ...products.map((p) => ({ ...p, source: "product" })),
    ...accessories.map((p) => ({ ...p, source: "access" })),
  ];

  const result = all.filter((p) =>
    p.name.toLowerCase().includes(value.toLowerCase()),
  );

  box.innerHTML = result
    .slice(0, 5)
    .map(
      (p) => `
      <div class="search-item" onclick="goDetail(${p.id}, '${p.source}')">
        <img src="${p.thumbnail}">
        <div>
          <div>${p.name}</div>
          <small>${p.price.toLocaleString()}đ</small>
        </div>
      </div>
    `,
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const key = params.get("key") || "";
  renderSearch(key);
});

function goDetail(id, source) {
  if (source === "access") {
    window.location.href = `productaccess.html?id=${id}`;
  } else {
    window.location.href = `product.html?id=${id}`;
  }
}

function handleEnter(e) {
  if (e.key === "Enter") {
    goSearchPage();
  }
}

function goSearchPage() {
  const keyword = document.getElementById("searchInput").value;
  window.location.href = `search.html?key=${encodeURIComponent(keyword)}`;
}
