import './App.css';
import { useState } from 'react';
import Conditional from './conditional';

function App() {

  const [family, setFamily] = useState(true);



  return (
    <div>

      <h3> I have family {family.toString()}</h3>

      <button onClick={() => setFamily(!family)}>click me</button>

      <Conditional family={family} ></Conditional>

    </div>
  );
}

export default App;
