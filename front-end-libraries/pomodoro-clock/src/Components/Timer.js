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

  const handleStartStop = () => {
    isRunning ? setIsRunning(false) : setIsRunning(true);
  };

  useEffect(() => {
    setRemainingBreak(breakTime);
    setRemainingSession(sessionTime);
  }, [breakTime, sessionTime]);

  useEffect(() => {
    if (!isRunning) return;

    let countdown;
    if (isSession) {
      if (remainingSession) {
        countdown = setInterval(() => {
          setRemainingSession(remainingSession - 1);
        }, 1000);
      } else {
        setIsSession(false);
        setRemainingSession(sessionTime);
      }
    } else {
      if (remainingBreak) {
        countdown = setInterval(() => {
          setRemainingBreak(remainingBreak - 1);
        }, 1000);
      } else {
        setIsSession(true);
        setRemainingBreak(breakTime);
      }
    }

    return () => clearInterval(countdown);
  }, [
    remainingSession,
    isRunning,
    isSession,
    remainingBreak,
    setIsSession,
    breakTime,
    sessionTime
  ]);

  const handleReset = () => {
    setBreakTime(5);
    setSessionTime(5);
    setRemainingBreak(breakTime);
    setRemainingSession(sessionTime);
    setIsRunning(false);
    setIsSession(true);
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
