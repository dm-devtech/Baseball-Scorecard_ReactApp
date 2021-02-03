import React, { useState} from 'react';
import './App.css';
import Display from './components/Display.js'
import Controls from './components/Controls.js'

function App() {
  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)
  return (
    <div className="App">
      <Display strikes={2} balls={3} />
      <Controls strike={()=> console.log('strike')}/>
    </div>
  );
}

export default App;
