import { useEffect, useState, useCallback } from 'react';
import '../Styles/DrumPad.css';
import getAudio from '../audios';

const DrumPad = ({ id, command, name, setInstrument }) => {
  const [audio, setAudio] = useState(null);

  const handlePlay = useCallback(() => {
    let audioElement = new Audio(audio);
    audioElement.play();
    setInstrument(name);
  }, [audio, name, setInstrument]);

  useEffect(() => {
    setAudio(getAudio(id));
  }, [id]);

  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if (event.key === command.toLowerCase() && audio) {
        handlePlay();
      }
    });
  }, [audio, command, handlePlay]);

  const handleClick = () => {
    handlePlay();
  };

  return (
    <div onClick={handleClick} id={id} className="drum-pad">
      <audio preload="auto" src={audio} className="clip" id={command} />
      {command}
    </div>
  );
};

export default DrumPad;
