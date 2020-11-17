import { useState, useEffect } from 'react'

import './App.css';
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
  const [isLoad, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/550?api_key=549fec9423b36940a428a7f91f7a913f")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    <div className="App">
        <h1>Movies List ({count} selected)</h1>
        <div className="movies-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
    </div>
  );
}

export default App;
