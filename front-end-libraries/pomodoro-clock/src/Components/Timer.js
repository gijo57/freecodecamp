import { useState, useEffect } from 'react';
import './Timer.css';

function Timer({
  setBreakTime,
  setSessionTime,
  breakTime,
  sessionTime,
  isSession,
  setIsSession
}) {
  const [remainingBreak, setRemainingBreak] = useState(breakTime);
  const [remainingSession, setRemainingSession] = useState(sessionTime);

  const handleStartStop = () => {};
  useEffect(() => {
    setRemainingBreak(breakTime);
    setRemainingSession(sessionTime);
  }, [breakTime, sessionTime]);

  const handleReset = () => {
    setBreakTime(5);
    setSessionTime(25);
  };

  return (
    <div className="Timer">
      <h2 id="timer-label">{isSession ? 'Session' : 'Break'}</h2>
      <div id="time-left">{isSession ? remainingSession : remainingBreak}</div>
      <div>Start/Stop</div>
      <div onClick={handleReset}>Reset</div>
    </div>
  );
}

export default Timer;
