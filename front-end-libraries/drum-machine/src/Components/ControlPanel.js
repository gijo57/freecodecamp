import '../Styles/ControlPanel.css';
import Display from './Display';
import Volume from './Volume';

function ControlPanel() {
  return (
    <div className="control-panel">
      <Display />
      <Volume />
    </div>
  );
}

export default ControlPanel;
