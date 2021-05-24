import Quote from "./Quote";
import Author from "./Author";
import QuoteButton from "./QuoteButton";

function QuoteBox({ quote }) {
  return (
    <div id="quote-box" className="quoteBox">
      <Quote quote={quote.text} />
      <Author quote={quote.author} />
      <QuoteButton />
    </div>
  );
}

export default QuoteBox;
