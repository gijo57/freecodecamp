import Quote from "./Quote";
import Author from "./Author";
import QuoteButton from "./QuoteButton";
import "./QuoteBox.css";

function QuoteBox({ quote, changeQuote }) {
  return (
    <div id="quote-box" className="quoteBox">
      <Quote id="text" quote={quote} />
      <Author id="author" quote={quote} />
      <QuoteButton id="new-quote" changeQuote={changeQuote} />
    </div>
  );
}

export default QuoteBox;
