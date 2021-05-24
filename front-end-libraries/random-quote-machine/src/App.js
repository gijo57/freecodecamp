import "./App.css";
import QuoteBox from "./Components/QuoteBox";
import { useState, useEffect } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

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
      <QuoteBox quote={quote} />
    </div>
  );
}

export default App;
