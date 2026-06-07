// lấy danh sách user
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// lưu user
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// đăng ký
function register() {
  let username = document.getElementById("reg-username").value;
  let email = document.getElementById("reg-email").value;
  let phone = document.getElementById("reg-phone").value;
  let password = document.getElementById("reg-password").value;
  let confirm = document.getElementById("reg-confirm").value;

  // kiểm tra rỗng
  if (!username || !email || !phone || !password) {
    alert("Vui lòng nhập đầy đủ!");
    return;
  }

  // kiểm tra email đơn giản
  if (!email.includes("@")) {
    alert("Email không hợp lệ!");
    return;
  }

  // kiểm tra số điện thoại (chỉ số)
  if (!/^[0-9]{9,11}$/.test(phone)) {
    alert("SĐT không hợp lệ!");
    return;
  }

  // check mật khẩu
  if (password !== confirm) {
    alert("Mật khẩu không khớp!");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // check trùng username
  let exist = users.find((u) => u.username === username);
  if (exist) {
    alert("Tài khoản đã tồn tại!");
    return;
  }

  // lưu user
  users.push({
    username,
    email,
    phone,
    password,
  });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Đăng ký thành công!");
  window.location.href = "login.html";
}

// đăng nhập
function login() {
  let username = document.getElementById("login-username").value;
  let password = document.getElementById("login-password").value;

  let users = getUsers();

  let user = users.find(
    (u) => u.username === username && u.password === password,
  );

  if (!user) {
    alert("Sai tài khoản hoặc mật khẩu!");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));

  alert("Đăng nhập thành công!");
  window.location.href = "main.html";
}

// logout
function logout() {
  localStorage.removeItem("currentUser");
  window.location.reload();
}

function goToAuth() {
  let user = localStorage.getItem("currentUser");

  if (user) {
    if (confirm("Đăng xuất?")) {
      logout();
    }
  } else {
    window.location.href = "login.html";
  }
}

// hiển thị tên user
function showUser() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const el = document.getElementById("user-name");

  if (!el) return;

  if (user) {
    el.innerText = user.username;

    const nameEl = document.getElementById("acc-name");
    const emailEl = document.getElementById("acc-email");
    const phoneEl = document.getElementById("acc-phone");

    if (nameEl) nameEl.innerText = "👤 " + user.username;
    if (emailEl) emailEl.innerText = "📧 " + user.email;
    if (phoneEl) phoneEl.innerText = "📞 " + user.phone;
  } else {
    el.innerText = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const userName = document.getElementById("user-name");
  const box = document.getElementById("account-box");

  if (userName && box) {
    userName.addEventListener("click", (e) => {
      e.stopPropagation();
      box.classList.toggle("d-none");
    });

    document.addEventListener("click", (e) => {
      if (
        !e.target.closest("#account-box") &&
        !e.target.closest("#user-name")
      ) {
        box.classList.add("d-none");
      }
    });
  }
});
