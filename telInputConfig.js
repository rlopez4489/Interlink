var input = document.getElementById("Phone");
var inputMobile = document.getElementById("PhoneMobile")
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