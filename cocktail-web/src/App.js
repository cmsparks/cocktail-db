import logo from './logo.svg';
import './App.css';
import CocktailsList from './components/CocktailsList';
import cocktails_data from './data/cocktails'

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <CocktailsList data={cocktails_data}>
      </CocktailsList>
    </div>
  );
}

export default App;
