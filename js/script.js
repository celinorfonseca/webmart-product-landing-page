console.log("JS loaded")

const menuButton = document.querySelector(".menu-btn")
const navMenu = document.querySelector(".navbar__links");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !menuButton.contains(e.target)) {
        navMenu.classList.remove("active")
        }
    });
}



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

modal.addEventListener("click", (e) => {
    if (e.target === modal){
        modal.classList.remove("active");
    }
});


// Close menu when clicking a link

const links = document.querySelectorAll(".navbar_links a");

links.forEach(link => {
    link.addEventListener("click", () =>{
        navMenu.classList.remover("active");
    });
});

// Scroll events

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
    document.querySelector(".navbar").classList.add("scrolled");
    } else {
        document.querySelector(".navbar").classList.remove("scrolled");
    }
});

const navbar = document.querySelector(".navbar");
console.log(navbar);

