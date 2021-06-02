import "../Styles/Editor.css";
import defaultPreview from "../defaultPreview";

function Editor() {
  return (
    <div className="Editor">
      <div>Editor</div>
      <textarea
        defaultValue={defaultPreview}
        id="editor"
        type="text"
      ></textarea>
    </div>
  );
}

export default Editor;
