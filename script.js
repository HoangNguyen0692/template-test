// Global variables

// DOM
const mQuoteContainer = document.getElementById("quote-container");
const mQuoteText      = document.getElementById("quote");
const mAuthorText     = document.getElementById("author");
const mTwitterButton  = document.getElementById("twitter");
const mNewQuoteButton = document.getElementById("new-quote");

// Quote attributes
let mApiQuotes = [];

// Show new quote
function newQuote() {
    // Pick a random quote from mApiQuotes array
    const vQuote = mApiQuotes[Math.floor(Math.random() * mApiQuotes.length)];

    // Check if author field is blank and replace it with "Unknown"
    if  (vQuote.author == null) {
        mAuthorText.textContent = "Unknown";
    } else {
        mAuthorText.textContent = vQuote.author;
    }

    // Check quote length to determine styling
    if (vQuote.text.length > 100) {
        mQuoteText.classList.add("long-quote");
    } else {
        mQuoteText.classList.remove("long-quote");
    }
    mQuoteText.textContent  = vQuote.text;
}

// Get and show quote locally
// function newLocalQuote() {
//     const vQuote = mLocalQuotes[Math.floor(Math.random() * mLocalQuotes.length)];
//     console.log(vQuote);
// }

// Get quotes from API
async function getQuotes() { // run at any time independently
    const vApiUrl = "https://type.fit/api/quotes";
    try {
        const vResponse = await fetch(vApiUrl); // only set vReponse when the data is avaible from fetch, or else vResponse = undefined
        mApiQuotes = await vResponse.json();
        //console.log(mApiQuotes[12]); // browser's windows
        newQuote();
    } catch (aError) {
        alert(aError)
        // Catch Error Here
    }
}

// Tweet quote
function tweetQuote() {
    const vTwitterUrl = `https://twitter.com/intent/tweet?text=${mQuoteText.textContent} - ${mAuthorText.textContent}`; // `` template string to pass parameters
    window.open(vTwitterUrl, '_blank'); // open Twitter in a new tab
}

// Event listeners
mNewQuoteButton.addEventListener("click", newQuote);
mTwitterButton.addEventListener('click', tweetQuote);

// On load
getQuotes();

// newLocalQuote();
