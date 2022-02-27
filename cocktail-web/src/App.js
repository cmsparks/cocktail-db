import { useState,useEffect } from 'react';
import './App.css';
import CocktailsList from './components/CocktailsList';
import cocktails_data from './data/cocktails'
import SearchBar from './components/SearchBar'
import colors from './components/cocktail-colors.json'


function App() {
  let [search, setSearch] = useState("");
  let [grad, setGrad] = useState(true);
  let [bgColor, setBGColor] = useState("#FFFFFF");

  return (
    <div>
      <header className="App-header">
        <SearchBar setSearch={setSearch}/>
      </header>
      <div className="bg" style={{backgroundColor: bgColor}}>
      </div>
      <CocktailsList setBGColor={setBGColor} data={cocktails_data.filter(e => JSON.stringify(e).toLowerCase().includes(search))}>
      </CocktailsList>
    </div>
  );
}

export default App;
