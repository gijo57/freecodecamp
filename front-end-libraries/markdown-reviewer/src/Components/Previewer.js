import "../Styles/Previewer.css";

function Previewer({ preview }) {
  return (
    <div className="Previewer">
      <div>Previewer</div>
      <div id="preview" dangerouslySetInnerHTML={preview} />
    </div>
  );
}

export default Previewer;
