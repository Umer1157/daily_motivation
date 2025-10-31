import { useState } from "react";
import { quotes } from "./quotes";

export default function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const randomQuote = () => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(newQuote);
  };

  return (
    <div className="app">
      <div className="card">
        <h1>💫 Daily Motivation</h1>
        <p className="quote">“{quote}”</p>
        <button onClick={randomQuote}>New Quote</button>
      </div>
    </div>
  );
}