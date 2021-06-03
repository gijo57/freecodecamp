import "../Styles/Editor.css";
import defaultMarkdown from "../defaultMarkdown";

function Editor({
  markdown,
  setMarkdown,
  handleFullScreen,
  setFullScreen,
  fullScreen,
}) {
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };
  console.log(markdown);
  const handleClick = () => {
    handleFullScreen("editorWrapper");
    document.fullscreenElement
      ? setFullScreen(null)
      : setFullScreen("fullScreen");
  };

  return (
    <div id="editorWrapper" className={`Editor ${fullScreen}`}>
      <div id="editorTitle">
        <p>Editor</p>
        <div onClick={handleClick}>Resize</div>
      </div>
      <textarea
        className={`${fullScreen}`}
        onChange={handleChange}
        defaultValue={defaultMarkdown}
        id="editor"
        type="text"
      ></textarea>
    </div>
  );
}

export default Editor;
