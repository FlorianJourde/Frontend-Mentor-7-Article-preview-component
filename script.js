const mediaQuery = window.matchMedia("(min-width: 800px)");
const button = document.querySelectorAll('.button');
const user = document.querySelectorAll('.user');
const share = document.querySelectorAll('.share');
let mobile = false

window.onload = isMobile();
window.onload = swipe();
window.onload = tooltip();

function isMobile() {
  mobile = !mediaQuery.matches;
}

window.addEventListener('resize', function() {
  isMobile()
    user[0].style.transform = "translateX(" + 0 + "px)";
    share[0].style.transform = "translateX(" + 0 + "px)";
})

function swipe() {
  for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
      if (mobile === true) {
        share[0].style.opacity = 1
        if (user[0].className.includes("active")) {
          user[0].style.transform = "translateX(" + (-user[0].scrollWidth) + "px)";
          share[0].style.transform = "translateX(" + (-share[0].scrollWidth) + "px)";
          user[0].classList.toggle("active");
          share[0].classList.toggle("active");
        } else {
          user[0].style.transform = "translateX(" + 0 + "px)";
          share[0].style.transform = "translateX(" + 0 + "px)";
          user[0].classList.toggle("active");
          share[0].classList.toggle("active");
        }
      }
    })
  }
}

function tooltip() {
  for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("mouseenter", function () {
      if (mobile === false) {
        share[0].style.vibility = "visible"
        share[0].style.opacity = 1
      }
    })

    button[i].addEventListener("mouseleave", function () {
      if (mobile === false) {
        share[0].style.vibility = "hidden"
        setTimeout(() => {
          share[0].style.opacity = 0
        }, 3000);
      }
    })
  }
}
