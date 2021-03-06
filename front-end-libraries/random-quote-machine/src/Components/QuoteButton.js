import "./QuoteButton.css";

function Author({ changeQuote }) {
  const handleQuoteChange = () => {
    changeQuote();
  };
  return (
    <div id="new-quote" className="new-quote">
      <div id="tweet">
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
          Tweet
        </a>
      </div>
      <button onClick={handleQuoteChange}>New Quote</button>
    </div>
  );
}

export default Author;
