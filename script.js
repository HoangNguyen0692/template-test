// Global variables
let mApiQuotes = [];

// Show new quote
function newQuote() {
    // Pick a random quote from mApiQuotes array
    const vQuote = mApiQuotes[Math.floor(Math.random() * mApiQuotes.length)];
    console.log(vQuote);
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

// On load
getQuotes();

// newLocalQuote();
