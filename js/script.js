const menuBtn = document.querySelector(".menu-btn");
const navs = document.querySelector(".navigation");
const userName = document.querySelector("#username");
const userEmail = document.querySelector("#useremail");
const comment = document.querySelector("#comment");
const contactForm = document.querySelector("form");
const toggleBtn = document.querySelector(".action-call");

menuBtn.addEventListener("click", showNav);

navs.style.left = "-250px"

function showNav(){
    if (navs.style.left == "-250px") {
        navs.style.left = "0px"
    }
    else{
        navs.style.left = "-250px"
    }
}

function borderDanger() {
    userName.classList.add('danger')
}
contactForm.addEventListener('submit', validateForm);

function validateForm(e) {
    e.preventDefault();

    if (userName.value == "" || userEmail.value == "" || comment.value == "") {
        let errorMsg = document.createElement('div');
        errorMsg.textContent = "all fields are required";
        errorMsg.classList.add("error")
        document.querySelector(".msgelem").appendChild(errorMsg);

        setTimeout(() => {
            errorMsg.remove()
        }, 3000);
    }
    else{
        let errorMsg = document.createElement('div');
        errorMsg.textContent = "thank you, response received successfully";
        errorMsg.classList.add("success")
        document.querySelector(".msgelem").appendChild(errorMsg);

        setTimeout(() => {
            errorMsg.remove()
        }, 3000);
    }
    borderDanger();
}

toggleBtn.addEventListener('change', toggleTheme);

 function toggleTheme(e) {
     e.preventDefault();

     document.querySelector("body").classList.add("body-dark")
     document.querySelector("#header").classList.add("header-dark")
 }