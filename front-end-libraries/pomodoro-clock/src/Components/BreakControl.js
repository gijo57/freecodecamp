import './BreakControl.css';

function BreakControl() {
  return (
    <div className="BreakControl length-control">
      <h2 id="break-label">Break Length</h2>
      <div id="break-time-control">
        <div id="break-decrement">+</div>
        <div id="break-length">5</div>
        <div id="break-increment">-</div>
      </div>
    </div>
  );
}

export default BreakControl;
