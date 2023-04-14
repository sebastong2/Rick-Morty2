import imagenRickmorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Charactes from './components/Charactes';

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async() =>{
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();
    
    setCharacters(characterApi.results);
    
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>React & Morty</h1>
        { characters ?(
          <Charactes characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={imagenRickmorty} alt="Rick & Morty" className='img-home'/>
            <button onClick={reqApi} className='btn-search'>
              Buscar Personaje
            </button>
          </>
        )}
        
      </header>
    </div>
  );
}

export default App;
