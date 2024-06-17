document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(
    ".banner .row .input-mic .text h2"
  );
  const contentWidth = textElement.scrollWidth;
  textElement.style.setProperty("--content-width", contentWidth + "px");
});

const header = document.querySelector("#buildSite");
const offers = [
  "Build your dream website",
  "Make your dream website",
  "Design your dream website",
];

let shuffledOffers = [];
let index = 0;

function shuffleArray(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function displayAndAnimateOffers() {
  if (index === shuffledOffers.length) {
    shuffledOffers = shuffleArray(offers);
    index = 0;
  }

  header.textContent = shuffledOffers[index];
  index++;

  setTimeout(displayAndAnimateOffers, 2000);
}

displayAndAnimateOffers();

const ourServiceDescriptions = [
  "Elevate your online presence with our expert static website development services. We specialize in crafting sleek, fast, and responsive static websites tailored to your unique business needs. Our dedicated team of designers and developers ensures that every aspect of your website reflects your brand identity while providing a seamless user experience.",
  "Unlock the full potential of your brand with our bespoke custom design services. At Abazi Web Works, we believe that every business deserves a unique and captivating visual identity. Our team of talented designers is dedicated to bringing your vision to life, crafting custom designs that resonate with your audience and set you apart from the competition.",
  "Ensure your website stays online, secure, and up-to-date with our comprehensive hosting and maintenance solutions. At Abazi Web Works, we understand that your website is the digital face of your business, and keeping it running smoothly is essential for your online success. Our hosting and maintenance services are designed to provide you with peace of mind, allowing you to focus on growing your business while we take care of the technical details.",
];
function generateOurServiceDescription() {
  const header = document.querySelector("#our-service-show");
  const headerChildOne = document.querySelector("#static-web-dev");
  const headerChildTwo = document.querySelector("#custom-design-service");
  const headerChildThree = document.querySelector(
    "#hosting-maintenance-service"
  );

  headerChildOne.addEventListener("click", function () {
    header.textContent = ourServiceDescriptions[0];
    headerChildOne.classList.add("active");
    headerChildTwo.classList.remove("active");
    headerChildThree.classList.remove("active");
  });
  headerChildTwo.addEventListener("click", function () {
    header.textContent = ourServiceDescriptions[1];
    headerChildOne.classList.remove("active");
    headerChildTwo.classList.add("active");
    headerChildThree.classList.remove("active");
  });
  headerChildThree.addEventListener("click", function () {
    header.textContent = ourServiceDescriptions[2];
    headerChildOne.classList.remove("active");
    headerChildTwo.classList.remove("active");
    headerChildThree.classList.add("active");
  });
}
generateOurServiceDescription();

document.addEventListener("DOMContentLoaded", function () {
  function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let element = document.getElementById(id);
    let timer = setInterval(function () {
      current += increment;
      element.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  function startAnimation() {
    animateValue("number1", 0, 170, 2000);
    animateValue("number2", 0, 99, 2000);
    animateValue("number3", 0, 170, 2000);
    animateValue("number4", 0, 100, 2000);
    animateValue("number5", 0, 100, 2000);
    animateValue("number6", 0, 382, 2000);

    document
      .querySelector(".scaling-works-ahead")
      .removeEventListener("mouseenter", startAnimation);
  }

  document
    .querySelector(".scaling-works-ahead")
    .addEventListener("mouseenter", startAnimation);
});
