const quote = document.getElementById("quote");
const author = document.getElementById("author");

const fetch_url = "https://api.quotable.io/random";

const gitQuote = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
};

gitQuote(fetch_url);

const tweet = () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "--by" +
      author.innerHTML,
    "Tweet window",
    "width=600",
    "height=300"
  );
};
