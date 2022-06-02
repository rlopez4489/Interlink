// The typewriter element
var typeWriterElement = document.getElementById("typewriter");

// The TextArray:
var textArray = [
  "Somos asesores expertos en inversión",
  "Buscamos los modelos de negocios más rentables de USA",
  "Construimos tu plan de negocio y tu sociedad",
];

// You can also do this by transfering it through a data-attribute
// var textArray = typeWriterElement.getAttribute('data-array');

// function to generate the backspace effect
function delWriter(text, i, cb) {
  if (i >= 0) {
    typeWriterElement.innerHTML = text.substring(0, i--);
    // generate a random Number to emulate backspace hitting.
    var rndBack = 10 + Math.random() * 50;
    setTimeout(function () {
      delWriter(text, i, cb);
    }, rndBack);
  } else if (typeof cb == "function") {
    setTimeout(cb, 800);
  }
}

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
  if (i < text.length + 1) {
    typeWriterElement.innerHTML = text.substring(0, i++);
    // generate a random Number to emulate Typing on the Keyboard.
    var rndTyping = 250 - Math.random() * 300;
    setTimeout(function () {
      typeWriter(text, i++, cb);
    }, rndTyping);
  } else if (i === text.length + 1) {
    setTimeout(function () {
      delWriter(text, i, cb);
    }, 1000);
  }
}

// the main writer function
function StartWriter(i) {
  if (typeof textArray[i] == "undefined") {
    setTimeout(function () {
      StartWriter(0);
    }, 1000);
  } else if (i < textArray[i].length + 1) {
    typeWriter(textArray[i], 0, function () {
      StartWriter(i + 1);
    });
  }
}
// wait one second then start the typewriter
setTimeout(function () {
  StartWriter(0);
}, 1000);

// counter

function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
}
function callback(entries, observer) {
  if (entries[0].isIntersecting) {
    //verificamos si actualmente es visible
    counter("count1", 0, 100, 3000);
    counter("count2", 0, 150, 2500);
    counter("count3", 0, 75, 3000);
    counter("count4", 0, 62, 2500);
    counter("count5", 0, 35, 2000);
    counter("count6", 0, 750, 3000);
  }
}
var observer = new IntersectionObserver(callback, {});

const element = document.querySelector("#holamundo");
observer.observe(element);

var input = document.querySelector("#phone");
window.intlTelInput(input, {
  // allowDropdown: false,
  // autoHideDialCode: false,
  // autoPlaceholder: "off",
  // dropdownContainer: document.body,
  // excludeCountries: ["us"],
  // formatOnDisplay: false,
  // geoIpLookup: function(callback) {
  //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
  //     var countryCode = (resp && resp.country) ? resp.country : "";
  //     callback(countryCode);
  //   });
  // },
  // hiddenInput: "full_number",
  // initialCountry: "auto",
  // localizedCountries: { 'de': 'Deutschland' },
  // nationalMode: false,
  // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  // placeholderNumberType: "MOBILE",
  // preferredCountries: ['cn', 'jp'],
  separateDialCode: true,
  utilsScript: "build/js/utils.js",
});
