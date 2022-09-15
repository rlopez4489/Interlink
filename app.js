const flagsElements = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  const requestJson = await fetch(`./languages/${language}.json`);
  const texts = await requestJson.json();
  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.innerHTML = texts[section][value];
  }
};

flagsElements?.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});
popupWhatsApp = () => {
  let btnClosePopup = document.querySelector(".closePopup");
  let btnOpenPopup = document.querySelector(".whatsapp-button");
  let popup = document.querySelector(".popup-whatsapp");
  let sendBtn = document.getElementById("send-btn");

  btnClosePopup.addEventListener("click", () => {
    popup.classList.toggle("is-active-whatsapp-popup");
  });

  btnOpenPopup.addEventListener("click", () => {
    popup.classList.toggle("is-active-whatsapp-popup");
    popup.style.animation = "fadeIn .6s 0.0s both";
  });

  sendBtn.addEventListener("click", () => {
    let msg = document.getElementById("whats-in").value;
    let relmsg = msg.replace(/ /g, "%20");
    //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567
    window.open("https://wa.me/15551234567?text=" + relmsg, "_blank");
  });

  setTimeout(() => {
    popup.classList.toggle("is-active-whatsapp-popup");
  }, 3000);
};

popupWhatsApp();

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
