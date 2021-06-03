import "../Styles/Editor.css";

function Editor({ markdown, setMarkdown, handleFullScreen }) {
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div id="editorWrapper" className="Editor">
      <div id="editorTitle">
        <p>Editor</p>
        <div onClick={() => handleFullScreen("editorWrapper")}>Expand</div>
      </div>
      <textarea
        onChange={handleChange}
        defaultValue={markdown}
        id="editor"
        type="text"
      ></textarea>
    </div>
  );
}

export default Editor;
