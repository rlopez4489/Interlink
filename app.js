const flagsElements = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  console.log(language);
  if (language === "en") {
    location.href = "en/index.html";
  } else {
    location.href = "../index.html";
  }
};

flagsElements?.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});

const button = document.querySelector(".btn-up");

const displayButton = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log(event);
  });
};

displayButton();
scrollToTop();

const phoneInputField = document.querySelector("#phone");

const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
