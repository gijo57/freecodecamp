import { useState, useEffect } from 'react';
import './Timer.css';

function Timer({
  setBreakTime,
  setSessionTime,
  breakTime,
  sessionTime,
  isSession,
  setIsSession,
  isRunning,
  setIsRunning
}) {
  const [remainingBreak, setRemainingBreak] = useState(breakTime);
  const [remainingSession, setRemainingSession] = useState(sessionTime);
  const currentTimeShown = isSession ? remainingSession : remainingBreak;
  console.log(isRunning);
  const handleStartStop = () => {
    isRunning ? setIsRunning(false) : setIsRunning(true);
  };

  useEffect(() => {
    setRemainingBreak(breakTime);
    setRemainingSession(sessionTime);
  }, [breakTime, sessionTime]);

  const handleReset = () => {
    setIsRunning(false);
    setIsSession(true);
    setBreakTime(5);
    setSessionTime(25);
  };

  return (
    <div className="Timer">
      <h2 id="timer-label">{isSession ? 'Session' : 'Break'}</h2>
      <div id="time-left">{currentTimeShown}</div>
      <div onClick={handleStartStop}>Start/Stop</div>
      <div onClick={handleReset}>Reset</div>
    </div>
  );
}

export default Timer;
