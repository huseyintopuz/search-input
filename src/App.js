import { useState } from 'react';
import Input from './component/Input';
import Button from './component/Button';
import './App.css';

function App() {
  const [showDiv, setShowDiv] = useState(true)
  
  return (
    <div className="App">
      <Input showDiv={showDiv}/>
      <Button />
    </div>
  );
}

export default App;
