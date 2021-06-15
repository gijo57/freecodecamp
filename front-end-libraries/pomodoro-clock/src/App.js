import { useState, useEffect } from 'react';
import './App.css';
import BreakControl from './Components/BreakControl';
import SessionControl from './Components/SessionControl';
import Timer from './Components/Timer';
function App() {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [isSession, setIsSession] = useState(true);

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
      />
    </div>
  );
}

export default App;
