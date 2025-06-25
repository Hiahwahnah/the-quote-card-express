async function getRandomImage() {
    const client_id = "DISABLED_FOR_SECURITY"; // get from .env later
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url("${receivedPhotoUrl}")`;
    } catch (error) {
        console.error(error);
    }
}

getRandomImage();

// "use strict"

// const elements = {
//     quote: document.getElementById("quote"),
//     author: document.getElementById("author"),
// };

// const quotes = [
//     {
//         quote: "The more difficult the victory, the greater the happiness in winning.",
//         author: "Pelé",
//     },
//     {
//         quote: "You have to fight to reach your dream. You have to sacrifice and work hard for it.",
//         author: "Lionel Messi",
//     },
//     {
//         quote: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.",
//         author: "Pelé",
//     },
//     {
//         quote: "I’ve never scored a goal in my life without getting a pass from someone else.",
//         author: "Abby Wambach",
//     },
//     {
//         quote: "Some people think football is a matter of life and death. I assure you, it's much more serious than that.",
//         author: "Bill Shankly",
//     },
//     {
//         quote: "Life is like soccer. You need goals.",
//         author: "Anonymous",
//     }
// ];

// function loopThroughQuotes() {
//     let quoteIndex = 0;
//     setInterval(() => {
//         if (quoteIndex < quotes.length) {
//             elements.quote.textContent = quotes[quoteIndex].quote;
//             elements.author.textContent = quotes[quoteIndex].author;
//             quoteIndex++;
//         } else {
//             quoteIndex = 0;
//         }
//     }, 3000);
// }

// setTimeout(loopThroughQuotes, 3000);