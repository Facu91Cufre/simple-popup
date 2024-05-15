const popup = document.querySelector(".popup");
const submitBtn = document.getElementById("btn");
const okBtn = document.querySelector(".btn");

submitBtn.addEventListener("click", () => {
    popup.classList.add("show-popup");
});

okBtn.addEventListener("click", () => {
    popup.classList.remove("show-popup");
})