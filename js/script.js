const button = document.querySelector(".menu-btn")
const menu = document.querySelector(".navbar__links");

button.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Modal

const openBtn = document.querySelector(".open-modal");
const closeBnt = document.querySelector(".close-modal");
const modal=document.querySelector(".modal")

openBtn.addEventListener("click", () => {
    modal.classList.add("active");
});

closeBnt.addEventListener("click", () => {
    modal.classList.remove("active");
})

const form=document.querySelector(".form");
const error=document.querySelector(".error");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name=document.querySelector("#name").value;
    const email=document.querySelector("#email").value;
    
    if (name==="" || email ==="") {
        error.textContent = "Please fill all fields";
        return;
    }

    if (!email.includes("@")) {
        error.textContent = "Invalid email";
        return;
    }

    error.textContent = "Form submitted!";
});

const darkBtn = document.querySelector(".dark-mode-btn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});