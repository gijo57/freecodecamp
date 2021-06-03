import "../Styles/Previewer.css";

function Previewer({ preview, handleFullScreen, setFullScreen, fullScreen }) {
  const handleClick = () => {
    handleFullScreen("previewerWrapper");
    document.fullscreenElement
      ? setFullScreen(null)
      : setFullScreen("fullScreen");
  };

  return (
    <div id="previewerWrapper" className={`Previewer ${fullScreen}`}>
      <div id="previewTitle">
        <p>Previewer</p>
        <div onClick={handleClick}>Resize</div>
      </div>
      <div
        className={`${fullScreen}`}
        id="preview"
        dangerouslySetInnerHTML={preview}
      />
    </div>
  );
}

export default Previewer;
