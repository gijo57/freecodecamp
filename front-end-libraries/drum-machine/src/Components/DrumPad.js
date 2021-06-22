import { useEffect, useState } from 'react';
import '../Styles/DrumPad.css';
import getAudio from '../audios';

function DrumPad({ id, command, name, setInstrument }) {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(getAudio(id));
  }, [id]);

  const handleClick = () => {
    let audioElement = document.getElementById(command);
    audioElement.play();
    setInstrument(name);
  };

  return (
    <div onClick={handleClick} id={id} className="drum-pad">
      <audio src={audio} className="clip" id={command} />
      {command}
    </div>
  );
}

export default DrumPad;
