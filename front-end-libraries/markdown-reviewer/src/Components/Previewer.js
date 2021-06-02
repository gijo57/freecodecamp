import "../Styles/Previewer.css";

function Previewer({ preview }) {
  return (
    <div className="Previewer">
      <div id="previewTitle">
        <p>Previewer</p>
        <div>X</div>
      </div>
      <div id="preview" dangerouslySetInnerHTML={preview} />
    </div>
  );
}

export default Previewer;
