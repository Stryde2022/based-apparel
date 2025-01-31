const heroMobile = document.querySelectorAll("div")[2];
const form = document.getElementById("overlap");
const email = document.getElementById("email-input");
// const submitBtn = document.getElementById("next-btn");
const warningText = document.querySelector(".warning");
const errorImg = document.querySelector(".error");

heroMobile.classList.add("hero-mobile");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



form.addEventListener("submit", function(e) {

    if (!emailRegex.test(email.value)) {
        e.preventDefault();
        errorImg.classList.remove("hide");
        warningText.classList.remove("hide");
     }
});
