import Quote from "./Quote";
import Author from "./Author";
import QuoteButton from "./QuoteButton";

function QuoteBox() {
  return (
    <div id="quote-box" className="quoteBox">
      <Quote />
      <Author />
      <QuoteButton />
    </div>
  );
}

export default QuoteBox;
