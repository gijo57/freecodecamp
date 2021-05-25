import "./Quote.css";

function Quote({ quote }) {
  return (
    <div id="quote" className="quote">
      {quote.text}
    </div>
  );
}

export default Quote;
