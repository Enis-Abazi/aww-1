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

// const header = document.querySelector('#buildWebsite');
// const offers = [
//     "Build your dream website",
//     "Make your dream website",
//     "Design your dream website"
// ];

// let currentIndex = 0;

// function getNextIndex(currentIndex, arrayLength) {
//     return (currentIndex + 1) % arrayLength;
// }

// function changeOffer() {
//     const words = offers[currentIndex].split(" ");
//     const coloredOffer = words.map(word => {
//         if (word.toLowerCase() === "website") {
//             const span = document.createElement("span");
//             span.textContent = word;
//             span.style.color = "orange";
//             return span.outerHTML;
//         }
//         return word;
//     });
//     header.innerHTML = coloredOffer.join(" ");
//     currentIndex = getNextIndex(currentIndex, offers.length);
// }

// // Initial call to set the first offer
// changeOffer();

// // Set interval to change the offer every 4 seconds
// setInterval(changeOffer, 2000);