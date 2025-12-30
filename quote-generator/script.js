let apiQuotes = [];
let rand = 0;
const btn = document.querySelector(".btn");
const quoteCon = document.querySelector(".quote-con");
const quoteEl = document.querySelector(".quote");
const authEl = document.querySelector(".author");
const tweetEl = document.querySelector(".tweet");
const loader = document.querySelector(".loader");

// loading the spinner
function loading() {
  loader.hidden = false;
  quoteCon.hidden = true;
}

// spinner loaded
function loaded() {
  loader.hidden = true;
  quoteCon.hidden = false;
}

// fetching the data from api
async function getQuotes() {
  loading()
  const url = "https://dummyjson.com/quotes";
  try {
    const res = await fetch(url);
    const data = await res.json();
    apiQuotes = data.quotes;
    loaded()
  } catch (err) {
    console.error(err);
    getQuotes()
  }
}

getQuotes();

// tweeting function
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteEl.textContent} - ${authEl.textContent}`;
  window.open(twitterUrl, "_blank");
}

btn.addEventListener("click", () => {
  loading();
  rand = Math.floor(Math.random() * apiQuotes.length);
  quoteEl.textContent = apiQuotes[rand].quote;
  authEl.textContent = apiQuotes[rand].author;
  loaded();
});

tweetEl.addEventListener("click", tweetQuote);
