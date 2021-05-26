import "./Quote.css";

function Quote({ quote }) {
  return (
    <div id="text" className="quote">
      {quote.text}
    </div>
  );
}

export default Quote;
