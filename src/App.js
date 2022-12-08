import { useEffect } from 'react';
import './App.css';
import { Header } from './componets/Header';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const {tg, onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [tg])

  return (
    <div className="App">
      <Header/>
      <button onClick={onToggleButton}>Test</button>
    </div>
  );
}

export default App;
