import "../Styles/Previewer.css";

function Previewer({ preview, handleFullScreen }) {
  return (
    <div id="previewerWrapper" className="Previewer">
      <div id="previewTitle">
        <p>Previewer</p>
        <div onClick={() => handleFullScreen("previewerWrapper")}>Expand</div>
      </div>
      <div id="preview" dangerouslySetInnerHTML={preview} />
    </div>
  );
}

export default Previewer;
