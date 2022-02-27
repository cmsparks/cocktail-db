function CocktailsList(props) {
  return <div>{props.data.map((e) => <Cocktail cocktail={e}/>)}</div>;
}

function Cocktail(props) {
  return <div>
    <h1>{props.cocktail.name}</h1>
    <Item name="Primary Alcohol" value={"TODO"}/>
    <Item name="Served" value={props.cocktail.served}/>
    {props.cocktail.garnish ? <Item name="Garnish" value={props.cocktail.garnish}/> : null}
    <IngredientsList ingredients={props.cocktail.ingredients}/>
    <Instructions instructions={props.cocktail.instructions}/>
  </div>;
}

function Item(props) {
  let {name, value} = props;
  return <span><b>{name}</b> {value}</span>;
}

function IngredientsList(props) {
  return <div>{props.ingredients}</div>
}

function Instructions(props) {
  return <div>{props.prep}</div>
}

export default CocktailsList;
