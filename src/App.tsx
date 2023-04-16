import {useState, useEffect} from 'react';
import './App.css';
import getNewAdvice from './lib/generateAdvice';
import getRandomColor from './utilities/getRandomColor';
import AdviceContainer from './AdviceContainer';
import ShareContainer from './ShareContainer';

function App() {
  const [advice, setAdvice] = useState<string | null>(null);

  useEffect(() => {
    async function fetchInitialAdvice() {
      const initialState = await getNewAdvice();
      setAdvice(initialState);
    }
    fetchInitialAdvice();
  }, []);

    const buttonHandler = (str: string) =>{
      getNewAdvice().then((newAdvice) =>{
        setAdvice(newAdvice)
      })
      const backgroundColor = getRandomColor();
      document.body.style.backgroundColor = backgroundColor;
    }

  return (
    <div className="container">
      <h1>Advice App</h1>
      <AdviceContainer advice={advice} />
      <button id="advice-btn" onClick={()=>buttonHandler(advice!)}>Another One Please</button>
      <ShareContainer advice={advice} />
    </div>
  );
}

export default App;
