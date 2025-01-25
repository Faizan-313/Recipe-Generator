export default function IngredientsList(props){
    const item = props.ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
    });
    return (
        <section>
            <div className="ingredients-list-section">
                <h2>Ingredients on hand:</h2>
                <p style={{fontSize: '10px', marginTop: '2px',color: 'darkgrey'}}>At least add four ingredients</p>
                <ul className="ingredients-list" aria-live="polite">{item}</ul>
            </div>
            {props.ingredients.length > 3 && <div className="get-recipe-container">
                <div>
                    <h3 ref={props.ref}>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button id="get-recipe-button" onClick={props.getRecipe}>Get a recipe</button>
            </div>}
        </section>
    )
}