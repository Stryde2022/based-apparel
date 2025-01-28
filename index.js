const heroMobile = document.querySelectorAll("div")[2];
const form = document.getElementById("overlap");
const emailInput = document.getElementById("email-input");
const email = emailInput.value;
const submitBtn = document.getElementById("next-btn");
const warningText = document.querySelector(".warning");
const errorImg = document.querySelector(".error");

heroMobile.classList.add("hero-mobile");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



form.addEventListener("submit", function(e) {

    console.log(emailInput.value)
    if (!emailRegex.test(email)) {
        e.preventDefault();
        errorImg.classList.remove("error-hide");
        warningText.classList.remove("hide-warning");
     } else {
        console.log("valid email format");
    }
});
