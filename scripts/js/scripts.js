const header = document.querySelector(".nav-reg");
const navSwapStart = document.querySelector(".block");

const navOptions = {};

const swapObserver = new IntersectionObserver(function(entries, swapObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-light");
    } else {
      header.classList.remove("nav-light");
    }
  });
}, navOptions);

swapObserver.observe(navSwapStart);

/* ----------- nav-light END -------------------- */

/* ----------- nav links ACTIVE -------------------- */
const navbarActive = document.querySelector(".navbar");
a = navbarActive.querySelectorAll("a");

a.forEach(function(e) {
  e.addEventListener("click", function() {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active");
    }
    this.classList.add("active");
  });
});

/* ----------- RESPONSIVE NAV ------------------- */

const navToggle = document.querySelector(".nav-toggler");

navToggle.addEventListener("click", function() {
  document.querySelector(".navbar").classList.toggle("show");
});
// --------------------------------------------------------------------
