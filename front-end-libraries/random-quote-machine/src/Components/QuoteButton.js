import "./QuoteButton.css";

function Author({ changeQuote }) {
  const handleQuoteChange = () => {
    changeQuote();
  };
  return (
    <div id="new-quote" className="new-quote">
      <button onClick={handleQuoteChange}>New Quote</button>
    </div>
  );
}

export default Author;
