function CocktailsList(props) {
  return <div className="list-container">{props.data.map((e, idx) => <Cocktail key={idx} cocktail={e}/>)}</div>;
}

function Cocktail(props) {
  return <div className="cocktail">
    <h2 className="cocktail-name">{props.cocktail.name}</h2>
    {props.cocktail.primary_alcohol.length > 0 ? <Item name="Primary Alcohol" value={props.cocktail.primary_alcohol.join("; ")}/> : null}
    {props.cocktail.served ? <Item name="Served" value={props.cocktail.served}/>: null} 
    {props.cocktail.garnish ? <Item name="Garnish" value={props.cocktail.garnish}/> : null}
    {props.cocktail.drinkware ? <Item name="Glassware" value={props.cocktail.drinkware}/> : null}
    <IngredientsList ingredients={props.cocktail.ingredients}/>
    <Instructions instructions={props.cocktail.instructions}/>
  </div>;
}

function Item(props) {
  let {name, value} = props;
  return (
    <div className="cocktail-item">
      <div className="item-key">{name}</div>
      <div>{value}</div>
    </div>
  );
}

function IngredientsList(props) {
  let ingredients = props.ingredients !== undefined ?
    <>
      <div className="cocktail-item"><span className="item-key">Ingredients</span></div>
      <div className="ingredients">
        {props.ingredients.map((item, idx) =>
          <div className="ingredient" key={idx}>
            <div className="outer-bullet">
              <div className="inner-bullet"/>
            </div>
            <div className="label">{item}</div>
          </div>
        )}
      </div>
    </> : <></>;
  return ingredients;
}

function Instructions(props) {
  return <div className="instructions">{props.prep}</div>
}

export default CocktailsList;
