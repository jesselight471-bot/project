// simple future upgrade placeholder

console.log("NETFLIX loaded 🚀");

// optional: navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "black";
  } else {
    nav.style.background = "rgba(0,0,0,0.6)";
  }
});