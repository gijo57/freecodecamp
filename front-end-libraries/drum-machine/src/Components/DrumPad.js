import '../Styles/DrumPad.css';

function DrumPad({ id, command, name }) {
  return (
    <div id={id} className="drum-pad">
      <audio src="" className="clip" id={command} />
      {command}
    </div>
  );
}

export default DrumPad;
