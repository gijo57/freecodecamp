import './App.css';
import BreakControl from './Components/BreakControl';
import SessionControl from './Components/SessionControl';
import Timer from './Components/Timer';

function App() {
  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <BreakControl />
      <SessionControl />
      <Timer />
    </div>
  );
}

export default App;
