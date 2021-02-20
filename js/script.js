const menuBtn = document.querySelector(".menu-btn");
const navs = document.querySelector(".navigation");

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