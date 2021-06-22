import '../Styles/ControlPanel.css';
import Display from './Display';
import Volume from './Volume';

const ControlPanel = ({ volume, instrument, setVolume }) => {
  return (
    <div className="control-panel">
      <Display instrument={instrument} />
      <Volume volume={volume} setVolume={setVolume} />
    </div>
  );
};

export default ControlPanel;
