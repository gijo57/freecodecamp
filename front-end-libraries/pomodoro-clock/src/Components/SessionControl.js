import './SessionControl.css';

function SessionControl({ sessionTime, setSessionTime }) {
  const handleSessionTimeUpdate = (type) => {
    if (sessionTime > 0) {
      type === 'increment'
        ? setSessionTime(sessionTime + 1)
        : setSessionTime(sessionTime - 1);
    }
  };
  return (
    <div className="SessionControl length-control">
      <h2 id="session-label">Session Length</h2>
      <div id="session-time-control">
        <div
          onClick={() => handleSessionTimeUpdate('increment')}
          id="session-increment"
        >
          +
        </div>
        <div id="session-length">{sessionTime}</div>
        <div
          onClick={() => handleSessionTimeUpdate('decrement')}
          id="session-decrement"
        >
          -
        </div>
      </div>
    </div>
  );
}

export default SessionControl;
