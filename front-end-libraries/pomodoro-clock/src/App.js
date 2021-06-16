import { useState } from 'react';
import './App.css';
import BreakControl from './Components/BreakControl';
import SessionControl from './Components/SessionControl';
import Timer from './Components/Timer';
function App() {
  const [breakTime, setBreakTime] = useState(300);
  const [sessionTime, setSessionTime] = useState(1500);
  const [isSession, setIsSession] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <div id="controls">
        <BreakControl breakTime={breakTime} setBreakTime={setBreakTime} />
        <SessionControl
          sessionTime={sessionTime}
          setSessionTime={setSessionTime}
        />
      </div>
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
