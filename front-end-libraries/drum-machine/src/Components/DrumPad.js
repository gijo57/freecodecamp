import '../Styles/DrumPad.css';
import audio from '../Audio/kick.wav';

function DrumPad({ id, command, name, setInstrument }) {
  const handleClick = () => {
    let audio = document.getElementById(command);
    audio.play();
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
