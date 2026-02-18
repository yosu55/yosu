const btn = document.getElementById("modo");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
