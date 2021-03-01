const signinBtn = document.getElementById("signin");
const signupBtn = document.getElementById("signup");
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const container = document.querySelector(".container");

console.log(signinBtn);

signinBtn.addEventListener("click", () => {
    // console.log(container);
    container.classList.remove("right-panel-active");
})
signupBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
})
form1.addEventListener("submit", e => e.preventDefault());
form2.addEventListener("submit", e => e.preventDefault());