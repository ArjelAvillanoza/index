document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop default form submit

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // admin account
    if (username === "admin" && password === "admin123") {
      window.location.href = "admin.html";
    
    // vendor sample account
    } else if (username === "vendor1" && password === "vendor123") {
      window.location.href = "vendor.html";
    
    } else {
      alert("Invalid login details! Try again.");
    }
  });
});
