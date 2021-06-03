import { useState, useEffect } from "react";
import Editor from "./Components/Editor";
import Previewer from "./Components/Previewer";
import defaultMarkdown from "./defaultMarkdown";

import marked from "marked";
import "./App.css";

function App() {
  const [preview, setPreview] = useState();
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [fullScreen, setFullScreen] = useState(null);

  useEffect(() => {
    setPreview(parseMarkdown(markdown));
  }, [markdown]);

  const handleFullScreen = (id) => {
    let elem = document.getElementById(id);
    document.fullscreenElement
      ? document.exitFullscreen()
      : elem.requestFullscreen();
  };

  const parseMarkdown = (markdown) => {
    let rawMarkup = marked(markdown);
    return { __html: rawMarkup };
  };

  return (
    <div className="App">
      <Editor
        fullScreen={fullScreen}
        setFullScreen={setFullScreen}
        handleFullScreen={handleFullScreen}
        handlemarkdown={markdown}
        setMarkdown={setMarkdown}
      />
      <Previewer
        fullScreen={fullScreen}
        setFullScreen={setFullScreen}
        handleFullScreen={handleFullScreen}
        preview={preview}
      />
    </div>
  );
}

export default App;
