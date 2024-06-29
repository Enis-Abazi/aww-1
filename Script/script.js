document.addEventListener("DOMContentLoaded", function() {
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

document.addEventListener("DOMContentLoaded", function() {
    function animateValue(id, start, end, duration) {
        let range = end - start;
        let current = start;
        let increment = end > start ? 1 : -1;
        let stepTime = Math.abs(Math.floor(duration / range));
        let element = document.getElementById(id);
        let timer = setInterval(function() {
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
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(activeAccordion => {
        activeAccordion.addEventListener('click', function() {
            const currentContent = this.nextElementSibling;
            const openContent = document.querySelector('.accordion-content.activeAccordion');

            if (openContent && openContent !== currentContent) {
                openContent.classList.remove('activeAccordion');
            }

            if (currentContent !== openContent) {
                currentContent.classList.add('activeAccordion');
            } else {
                currentContent.classList.remove('activeAccordion');
            }
        });
    });
});

const btn = document.getElementById('buttonMail');
btn.style.outline = 'none';


document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'service_vy7934d';
    const templateID = 'template_9acapue';

    const successEmailSent = document.querySelector(".succesSent");
    const successAudio = document.querySelector("audio");
    const overlay = document.querySelector(".overlay");
    const error = document.querySelector('.errorSent');


    emailjs.sendForm(serviceID, templateID, this)
        .then((response) => {
            if (response.status === 200) {
                btn.value = 'Send Email';
                successEmailSent.style.display = 'block';
                overlay.style.display = 'block';
                successAudio.play();

                setTimeout(() => {
                    successEmailSent.style.display = 'none';
                    overlay.style.display = 'none';
                }, 1000);
                contactValidate();
            }
        }, (err) => {
            btn.value = 'Send Email';
            error.style.display = 'block';
        });

});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
        btn.click();
    }
});



function contactValidate() {
    const nameElement = document.getElementById("from_name");
    const lastnameElement = document.getElementById("lastName");
    const emailElement = document.getElementById("email_id");
    const numberElement = document.getElementById("number_id");
    const messageElement = document.getElementById("message");

    const name = nameElement.value;
    const lastname = lastnameElement.value;
    const email = emailElement.value;
    const number = numberElement.value;
    const message = messageElement.value;

    if (name || lastname || email || number || message) {
        nameElement.value = '';
        lastnameElement.value = '';
        emailElement.value = '';
        numberElement.value = '';
        messageElement.value = '';
        console.log(name, lastname, email, number, message);
    } else {
        console.log("fail");
    }
}

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

document.addEventListener('DOMContentLoaded', function() {
    let startX;
    const container = document.querySelector('.c');
    const inputs = document.querySelectorAll('.c input');
    let currentIndex = 0;

    const updateIndex = (newIndex) => {
        inputs[currentIndex].checked = false;
        currentIndex = newIndex;
        inputs[currentIndex].checked = true;
    };

    container.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    container.addEventListener('touchmove', (event) => {
        if (!startX) return;
        const x = event.touches[0].clientX;
        const diffX = startX - x;

        if (diffX > 50) {
            startX = null;
            if (currentIndex < inputs.length - 1) {
                updateIndex(currentIndex + 1);
            }
        } else if (diffX < -50) {
            startX = null;
            if (currentIndex > 0) {
                updateIndex(currentIndex - 1);
            }
        }
    });

    container.addEventListener('mousedown', (event) => {
        startX = event.clientX;
    });

    container.addEventListener('mousemove', (event) => {
        if (!startX) return;
        const x = event.clientX;
        const diffX = startX - x;

        if (diffX > 50) {
            startX = null;
            if (currentIndex < inputs.length - 1) {
                updateIndex(currentIndex + 1);
            }
        } else if (diffX < -50) {
            startX = null;
            if (currentIndex > 0) {
                updateIndex(currentIndex - 1);
            }
        }
    });

    container.addEventListener('mouseup', () => {
        startX = null;
    });

    container.addEventListener('mouseleave', () => {
        startX = null;
    });
});