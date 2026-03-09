let menu = document.getElementById("menu-btn");
let nav = document.getElementById("nav");

menu.onclick = () => {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
};

// Check if user is logged in and update navbar
window.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username");
  const loginLink = document.querySelector('nav a[href="login.html"]'); // login link
  const welcomeSpan = document.getElementById("welcome");

if (username) {
  loginLink.style.display = "none";
  
  // Clear any previous content
  welcomeSpan.textContent = "";

  // Create welcome text
  const textNode = document.createTextNode(`Welcome, ${username} `);
  welcomeSpan.appendChild(textNode);

  // Create logout button
  const logoutBtn = document.createElement("button");
  logoutBtn.textContent = "Logout";
  logoutBtn.style.cssText = "margin-left:8px; padding:4px 8px; background:#ff3c00; border:none; border-radius:5px; cursor:pointer;";
  
  logoutBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.reload();
  });

  welcomeSpan.appendChild(logoutBtn);

  // Redirect to profile when clicking welcome text
  welcomeSpan.addEventListener("click", () => {
    window.location.href = "profile.html";
  });
}
});

function showToast(message, type = "error") {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = `toast show ${type}`;

  setTimeout(() => {
    toast.className = "toast";
  }, 3000);
}

function joinPlan(plan) {
  const username = localStorage.getItem("username");
  document.querySelectorAll(".plan").forEach((p) => {
    p.classList.remove("active");
  });

  event.target.closest(".plan").classList.add("active");

  if (!username) {
    showToast("Please login first", "error");
    return;
  }

  localStorage.setItem("selectedPlan", plan);
  window.location.href = "payment.html";
}


// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// Optional: change navbar style on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});