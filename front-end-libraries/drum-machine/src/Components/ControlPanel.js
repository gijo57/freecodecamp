import '../Styles/ControlPanel.css';
import Display from './Display';
import Volume from './Volume';

function ControlPanel({ instrument }) {
  return (
    <div className="control-panel">
      <Display instrument={instrument} />
      <Volume />
    </div>
  );
}

export default ControlPanel;
