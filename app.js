const flagsElements = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  if (language === "en") {
    if (location.pathname === "/nosotros") {
      return (location.href = "./en/us");
    } else if (location.pathname === "/servicios") {
      return (location.href = "./en/services");
    } else if (location.pathname === "/franquicias") {
      return (location.href = "./en/franchise");
    } else if (location.pathname === "/franquicias-en-texas") {
      return (location.href = "./en/franchise-texas");
    } else if (location.pathname === "/franquicias-en-florida") {
      return (location.href = "./en/franchise-florida");
    } else if (location.pathname === "/franquicias-en-california") {
      return (location.href = "./en/franchise-california");
    } else if (location.pathname === "/visas-de-inversionista") {
      return (location.href = "./en/investor-visa");
    } else if (location.pathname === "/investor-visa") {
      return (location.href = "./en/investor-visa");
    } else if (location.pathname === "/visa-e-2") {
      return (location.href = "./en/visa-e-2");
    } else if (location.pathname === "/visa-e-1") {
      return (location.href = "./en/visa-e-1");
    } else if (location.pathname === "/visa-eb-5") {
      return (location.href = "./en/visa-eb-5");
    } else if (location.pathname === "/visa-l-1") {
      return (location.href = "./en/visa-l-1");
    } else if (location.pathname === "/blog") {
      return (location.href = "./en/blog");
    } else if (location.pathname === "/faqs") {
      return (location.href = "./en/faqs");
    } else if (location.pathname === "/cursos") {
      return (location.href = "./en/courses");
    } else if (location.pathname === "/contacto") {
      return (location.href = "./en/contact");
    } else if (location.pathname === "/") {
      return (location.href = "./en/home");
    }
  } else {
    if (location.pathname === "/en/us") {
      return (location.href = "/nosotros");
    } else if (location.pathname === "/en/services") {
      return (location.href = "/servicios");
    } else if (location.pathname === "/en/franchise") {
      return (location.href = "/franquicias");
    } else if (location.pathname === "/en/franchise-texas") {
      return (location.href = "/franquicias-en-texas");
    } else if (location.pathname === "/en/franchise-florida") {
      return (location.href = "/franquicias-en-florida");
    } else if (location.pathname === "/en/franchise-california") {
      return (location.href = "/franquicias-en-california");
    } else if (location.pathname === "/en/investor-visa") {
      return (location.href = "/visas-de-inversionista");
    } else if (location.pathname === "/en/visa-e-2") {
      return (location.href = "/visa-e-2");
    } else if (location.pathname === "/en/visa-e-1") {
      return (location.href = "/visa-e-1");
    } else if (location.pathname === "/en/visa-eb-5") {
      return (location.href = "/visa-eb-5");
    } else if (location.pathname === "/en/visa-l-1") {
      return (location.href = "/visa-l-1");
    } else if (location.pathname === "/en/blog") {
      return (location.href = "/blog");
    } else if (location.pathname === "/en/faqs") {
      return (location.href = "/faqs");
    } else if (location.pathname === "/en/courses") {
      return (location.href = "/cursos");
    } else if (location.pathname === "/en/contact") {
      return (location.href = "/contacto");
    } else if (location.pathname === "/en/home") {
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
  });
};

displayButton();
scrollToTop();


