import { useState } from "react";
import Editor from "./Components/Editor";
import Previewer from "./Components/Previewer";
import defaultMarkdown from "./defaultMarkdown";
import marked from "marked";
import "./App.css";

function App() {
  const [preview, setPreview] = useState();
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  console.log(markdown);
  return (
    <div className="App">
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Previewer preview={preview} />
    </div>
  );
}

export default App;
