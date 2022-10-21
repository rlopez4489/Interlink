const flagsElements = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  if (language === "en") {
    if (location.pathname === "/nosotros") {
      return (location.href = "./en/us.html");
    } else if (location.pathname === "/services.html") {
      return (location.href = "./en/services.html");
    } else if (location.pathname === "/franchise.html") {
      return (location.href = "./en/franchise.html");
    } else if (location.pathname === "/franchise-texas.html") {
      return (location.href = "./en/franchise-texas.html");
    } else if (location.pathname === "/franchise-florida.html") {
      return (location.href = "./en/franchise-florida.html");
    } else if (location.pathname === "/franchise-california.html") {
      return (location.href = "./en/franchise-california.html");
    } else if (location.pathname === "/investor-visa.html") {
      return (location.href = "./en/investor-visa.html");
    } else if (location.pathname === "/investor-visa.html") {
      return (location.href = "./en/investor-visa.html");
    } else if (location.pathname === "/visa-e-2.html") {
      return (location.href = "./en/visa-e-2.html");
    } else if (location.pathname === "/visa-e-1.html") {
      return (location.href = "./en/visa-e-1.html");
    } else if (location.pathname === "/visa-eb-5.html") {
      return (location.href = "./en/visa-eb-5.html");
    } else if (location.pathname === "/visa-l-1.html") {
      return (location.href = "./en/visa-l-1.html");
    } else if (location.pathname === "/blog.html") {
      return (location.href = "./en/blog.html");
    } else if (location.pathname === "/faqs.html") {
      return (location.href = "./en/faqs.html");
    } else if (location.pathname === "/courses.html") {
      return (location.href = "./en/courses.html");
    } else if (location.pathname === "/contact.html") {
      return (location.href = "./en/contact.html");
    } else if (location.pathname === "/") {
      return (location.href = "./en/index.html");
    }
  } else {
    if (location.pathname === "/en/us.html") {
      return (location.href = "/nosotros");
    } else if (location.pathname === "/en/services.html") {
      return (location.href = "/services.html");
    } else if (location.pathname === "/en/franchise.html") {
      return (location.href = "/franchise.html");
    } else if (location.pathname === "/en/franchise-texas.html") {
      return (location.href = "/franchise-texas.html");
    } else if (location.pathname === "/en/franchise-florida.html") {
      return (location.href = "/franchise-florida.html");
    } else if (location.pathname === "/en/franchise-california.html") {
      return (location.href = "/franchise-california.html");
    } else if (location.pathname === "/en/investor-visa.html") {
      return (location.href = "/investor-visa.html");
    } else if (location.pathname === "/en/investor-visa.html") {
      return (location.href = "/investor-visa.html");
    } else if (location.pathname === "/en/visa-e-2.html") {
      return (location.href = "/visa-e-2.html");
    } else if (location.pathname === "/en/visa-e-1.html") {
      return (location.href = "/visa-e-1.html");
    } else if (location.pathname === "/en/visa-eb-5.html") {
      return (location.href = "/visa-eb-5.html");
    } else if (location.pathname === "/en/visa-l-1.html") {
      return (location.href = "/visa-l-1.html");
    } else if (location.pathname === "/en/blog.html") {
      return (location.href = "/blog.html");
    } else if (location.pathname === "/en/faqs.html") {
      return (location.href = "/faqs.html");
    } else if (location.pathname === "/en/courses.html") {
      return (location.href = "/courses.html");
    } else if (location.pathname === "/en/contact.html") {
      return (location.href = "/contact.html");
    } else if (location.pathname === "/en/index.html") {
      return (location.href = "/");
    }
  }
};

flagsElements?.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});

const button = document.querySelector(".btn-up");

const displayButton = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      button.style.display = "flex";
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

var input = document.getElementById("Phone");
var inputMobile = document.getElementById("phoneMobile");
window.intlTelInput(input, {
  autoHideDialCode: false,
  nationalMode: false,
  preferredCountries: ["us"],
});
window.intlTelInput(inputMobile, {
  autoHideDialCode: false,
  nationalMode: false,
  preferredCountries: ["us"],
});
