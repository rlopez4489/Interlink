var input = document.getElementById("Phone");
var inputMobile = document.getElementById("phoneMobile")
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