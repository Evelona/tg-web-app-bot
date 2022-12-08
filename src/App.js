import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const {tg, onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [tg])
  
  return (
    <div className="App">
      Evelina
      <button onClick={onToggleButton}>Test</button>
    </div>
  );
}

export default App;
