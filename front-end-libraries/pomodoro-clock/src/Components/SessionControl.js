import './SessionControl.css';

function SessionControl() {
  return (
    <div className="SessionControl length-control">
      <h2 id="session-label">Session Length</h2>
      <div id="session-time-control">
        <div id="session-decrement">+</div>
        <div id="session-length">25</div>
        <div id="session-increment">-</div>
      </div>
    </div>
  );
}

export default SessionControl;
