import React,{ useState } from 'react';
import './App.css';
import UseContext from './components/UseContext';
import UseState from './components/UseState';

export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }
  

  return (
    <ToggleTheme.Provider value={state}>
      <button className='Toggle' onClick={handleToggle}>Toggle</button>
      <UseContext />
      <UseState />
     
    </ToggleTheme.Provider>
  );
}

export default App;
