import { useState } from 'react';
import '../Styles/DrumMachine.css';
import DrumPad from './DrumPad';
import ControlPanel from './ControlPanel';

function DrumMachine() {
  const [instrument, setInstrument] = useState('');
  const instruments = [
    { id: 'kick', command: 'Q', name: 'Kick' },
    { id: 'clap', command: 'W', name: 'Clap' },
    { id: 'openhihat', command: 'E', name: 'Open Hi-Hat' },
    { id: 'tom', command: 'A', name: 'Tom' },
    { id: 'ride', command: 'S', name: 'Ride' },
    { id: 'bass', command: 'D', name: 'Bass' },
    { id: 'synth', command: 'Z', name: 'Synth' },
    { id: 'snare', command: 'X', name: 'Snare' },
    { id: 'closedhihat', command: 'C', name: 'Closed Hi-Hat' }
  ];

  return (
    <div className="DrumMachine">
      <div id="drum-machine">
        {instruments.map((i) => {
          return (
            <DrumPad
              setInstrument={setInstrument}
              key={i.name}
              id={i.id}
              command={i.command}
              name={i.name}
            />
          );
        })}
      </div>
      <ControlPanel instrument={instrument}></ControlPanel>
    </div>
  );
}

export default DrumMachine;
