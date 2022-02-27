import CocktailDisplay from './CocktailDisplay/CocktailDisplay'
import colors from './cocktail-colors.json'
import { useState, useEffect, useRef } from 'react';
function CocktailsList(props) {
  return <div className="list-container">{props.data.map((e, idx) => <Cocktail key={idx} cocktail={e}/>)}</div>;
}

function categorize(cocktail) {
  if (!("drinkware" in cocktail)) {

    return "lowball-style"
  }
  let g = cocktail.drinkware.toLowerCase();
    if (["pilsner glass","pint","pint glass","highball","collins"].indexOf(g) > 0) {
    return "collins-style"
  }
  else if (g.includes("shot")) {
      return "shot-style"
  }
    else if (["flute", "cocktail", "coupe or cocktail glass", "coupe"].indexOf(g) > 0) {
      return "martini-style"
  }
    else if (["hurricane glass", "margarita"].indexOf(g) > 0) {
      return "marg-style"
  }
  return "lowball-style"
}

function Cocktail(props) {
  let drink_Category = categorize(props.cocktail);
  let ccolor = props.cocktail.color;
  if (!("color" in props.cocktail)){
    ccolor = "clear"
  }


  return <div className={"cocktail"}>
    <CocktailDisplay className="cock-display" cocktail={props.cocktail}/>
    <div className={'cock-box ' + drink_Category} style={{borderColor: colors[ccolor].accent_color}}>
      <div className='cock-display-stand'></div>
      <div className="cock-box-info">
        <h2 className="cocktail-name" style={{color: colors[ccolor].accent_color}}>{props.cocktail.name}</h2>
        {props.cocktail.primary_alcohol.length > 0 ? <Item name="Primary Alcohol" value={props.cocktail.primary_alcohol.join(", ")}/> : null}
        {props.cocktail.served ? <Item name="Served" value={props.cocktail.served}/>: null} 
        {props.cocktail.garnish ? <Item name="Garnish" value={props.cocktail.garnish}/> : null}
        {props.cocktail.drinkware ? <Item name="Glassware" value={props.cocktail.drinkware}/> : null}
        <IngredientsList ingredients={props.cocktail.ingredients}/>
        {props.cocktail.prep ? <Item name="Instructions" value={props.cocktail.prep}/> : null}
      </div>
    </div>
  </div>;
}

function Item(props) {
  let {name, value} = props;
  if (name.length + value.length >= 30) {
    return (
      <div className="cocktail-item"><div className="item-key">{name}</div> {value}</div>
    );
  } else {
    return (
      <div className="cocktail-item"><span className="item-key">{name}</span> {value}</div>
    );
  }
}

function IngredientsList(props) {
  let ingredients = props.ingredients !== undefined ?
    <>
      <div className="cocktail-item"><span className="item-key">Ingredients</span></div>
      <div className="ingredients">
        {props.ingredients.map((item, idx) =>
          <div className="ingredient" key={idx}>
            <div className="bullet-container">
              <div className="outer-bullet">
                <div className="inner-bullet"/>
              </div>
            </div>
            <div className="label">{item}</div>
          </div>
        )}
      </div>
    </> : <></>;
  return ingredients;
}

export default CocktailsList;
