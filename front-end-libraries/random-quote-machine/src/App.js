import "./App.css";
import QuoteBox from "./Components/QuoteBox";
import { useState, useEffect } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);

  const getSingleQuote = (quotes) => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };
  const quote = getSingleQuote(quotes);

  useEffect(() => {
    const fetchQuotes = async () => {
      const res = await fetch("https://type.fit/api/quotes");
      const quotes = await res.json();
      setQuotes(quotes);
    };
    fetchQuotes();
  }, []);

  return (
    <div className="App">
      {quote ? <QuoteBox quote={quote} changeQuote={getSingleQuote} /> : null}
    </div>
  );
}

export default App;
