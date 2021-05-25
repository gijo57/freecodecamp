import "./Author.css";

function Author({ quote }) {
  const author = quote.author ? `- ${quote.author}` : "";
  return (
    <div id="author" className="author">
      {author}
    </div>
  );
}

export default Author;
