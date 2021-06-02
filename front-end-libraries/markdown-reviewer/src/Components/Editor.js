import "../Styles/Editor.css";

function Editor({ markdown, setMarkdown }) {
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };
  return (
    <div className="Editor">
      <div id="editorTitle">
        <p>Editor</p>
        <div>X</div>
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
