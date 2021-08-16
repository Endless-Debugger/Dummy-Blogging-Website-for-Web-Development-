let navbar = document.getElementById("navbar")
let sticky = navbar.offsetTop;
console.log("Hello")
window.onscroll = function() {stickyNavbar()};


function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

