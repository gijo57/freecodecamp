import './SessionControl.css';

function SessionControl({ sessionTime, setSessionTime }) {
  const handleSessionTimeUpdate = (type) => {
    if (sessionTime > 0) {
      type === 'increment'
        ? setSessionTime(sessionTime + 60)
        : setSessionTime(sessionTime - 60);
    }
  };
  return (
    <div className="SessionControl length-control">
      <h2 id="session-label">Session Length</h2>
      <div id="session-time-control">
        <div
          onClick={() => handleSessionTimeUpdate('increment')}
          className="session-button"
          id="session-increment"
        >
          +
        </div>
        <div id="session-length">{sessionTime / 60}</div>
        <div
          onClick={() => handleSessionTimeUpdate('decrement')}
          className="session-button"
          id="session-decrement"
        >
          -
        </div>
      </div>
    </div>
  );
}

export default SessionControl;
