import './BreakControl.css';

function BreakControl({ breakTime, setBreakTime }) {
  const handleBreakTimeUpdate = (type) => {
    if (breakTime > 60 && breakTime < 3600) {
      type === 'increment'
        ? setBreakTime(breakTime + 60)
        : setBreakTime(breakTime - 60);
    }
  };

  return (
    <div className="BreakControl length-control">
      <h2 id="break-label">Break Length</h2>
      <div id="break-time-control">
        <div
          onClick={() => handleBreakTimeUpdate('increment')}
          className="break-button"
          id="break-increment"
        >
          +
        </div>
        <div id="break-length">{breakTime / 60}</div>
        <div
          onClick={() => handleBreakTimeUpdate('decrement')}
          className="break-button"
          id="break-decrement"
        >
          -
        </div>
      </div>
    </div>
  );
}

export default BreakControl;
