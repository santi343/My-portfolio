let emailMobile = document.getElementById("mobile");
let faEmailMobile = document.querySelector(".fa-email-mobile");
let mobileAbsolute = document.getElementById("mobile-absolute");

document.addEventListener("DOMContentLoaded", () => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
});
function hamburgerMenu(panelBtn, panel, menuLink) {
  document.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      document.querySelector(panel).classList.toggle("is-active");
      document.querySelector(panelBtn).classList.toggle("is-active");
    }
    if (e.target.matches(menuLink)) {
      document.querySelector(panel).classList.remove("is-active");
      document.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}

emailMobile.addEventListener("click", function () {
  if (faEmailMobile.classList[2] === "fa-envelopes") {
    faEmailMobile.classList.remove("fa-envelopes");
    faEmailMobile.classList.add("fa-rectangle-xmark");
    mobileAbsolute.style.display = "block";
  } else {
    faEmailMobile.classList.remove("fa-rectangle-xmark");
    faEmailMobile.classList.add("fa-envelopes");
    mobileAbsolute.style.display = "none";
  }
});

emailMobile.addEventListener("blur", function (e) {
  e.preventDefault();
  setTimeout(() => {
    mobileAbsolute.style.display = "block";
  }, 3000);
});
