import { useState } from 'react';
import './App.css';
import BreakControl from './Components/BreakControl';
import SessionControl from './Components/SessionControl';
import Timer from './Components/Timer';
function App() {
  const [breakTime, setBreakTime] = useState(300);
  const [sessionTime, setSessionTime] = useState(300);
  const [isSession, setIsSession] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  console.log(breakTime, sessionTime);
  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <BreakControl breakTime={breakTime} setBreakTime={setBreakTime} />
      <SessionControl
        sessionTime={sessionTime}
        setSessionTime={setSessionTime}
      />
      <Timer
        setBreakTime={setBreakTime}
        setSessionTime={setSessionTime}
        breakTime={breakTime}
        sessionTime={sessionTime}
        isSession={isSession}
        setIsSession={setIsSession}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
      />
    </div>
  );
}

export default App;
