import { useState, useEffect } from "react";
import Editor from "./Components/Editor";
import Previewer from "./Components/Previewer";
import defaultMarkdown from "./defaultMarkdown";
import marked from "marked";
import "./App.css";

function App() {
  const [preview, setPreview] = useState();
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  useEffect(() => {
    console.log("hi");
    setPreview(parseMarkdown(markdown));
  }, [markdown]);

  const parseMarkdown = (markdown) => {
    let rawMarkup = marked(markdown);
    return { __html: rawMarkup };
  };

  return (
    <div className="App">
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Previewer preview={preview} />
    </div>
  );
}

export default App;
