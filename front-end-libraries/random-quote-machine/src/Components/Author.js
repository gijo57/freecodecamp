import "./Author.css";

function Author({ quote }) {
  return (
    <div id="author" className="author">
      {`- ${quote.author}`}
    </div>
  );
}

export default Author;
