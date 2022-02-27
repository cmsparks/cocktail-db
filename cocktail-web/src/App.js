import { useState } from 'react';
import './App.css';
import CocktailsList from './components/CocktailsList';
import cocktails_data from './data/cocktails'
import SearchBar from './components/SearchBar'

function App() {
  let [search, setSearch] = useState("");
  let [grad, setGrad] = useState(true);
  return (
    <div>
      <header className="App-header">
        <SearchBar setSearch={setSearch}/>
      </header>
      <div className={grad ? "bg-of" : "bg-aviation"}>
      </div>
      <CocktailsList data={cocktails_data.filter(e => JSON.stringify(e).toLowerCase().includes(search))}>
      </CocktailsList>
    </div>
  );
}

export default App;
