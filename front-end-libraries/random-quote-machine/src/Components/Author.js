function Author({ quote }) {
  return (
    <div id="quote-box" className="quoteBox">
      {quote.author}
    </div>
  );
}

export default Author;
