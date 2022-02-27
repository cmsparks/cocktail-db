import CocktailDisplay from './CocktailDisplay/CocktailDisplay'

function CocktailsList(props) {
  return <div className="list-container">{props.data.map((e) => <Cocktail cocktail={e}/>)}</div>;
}

function Cocktail(props) {
  return <div className="cocktail">
    <CocktailDisplay className="cock-display" cocktail={{}}/>
    <h2 className="cocktail-name">{props.cocktail.name}</h2>
    <Item name="Primary Alcohol" value={"TODO"}/>
    {props.cocktail.served ? <Item name="Served" value={props.cocktail.served}/>: null} 
    {props.cocktail.garnish ? <Item name="Garnish" value={props.cocktail.garnish}/> : null}
    {props.cocktail.drinkware ? <Item name="Glassware" value={props.cocktail.drinkware}/> : null}
    <IngredientsList ingredients={props.cocktail.ingredients}/>
    <Instructions instructions={props.cocktail.instructions}/>
  </div>;
}

function Item(props) {
  let {name, value} = props;
  return <div className="cocktail-item"><span className="item-key">{name}</span> {value}</div>;
}

function IngredientsList(props) {
  return <>
    <div className="cocktail-item">Ingredients</div>
    <div className="ingedients">{props.ingredients}</div>
  </>
}

function Instructions(props) {
  return <div className="instructions">{props.prep}</div>
}

export default CocktailsList;
