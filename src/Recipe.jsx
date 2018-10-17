import React from 'react';

function Recipe(props) {

    return (
        <div>

            <img src={props.recipe.img.url} />
            <h2>This is where the recipe will show: {props.recipe.title}</h2>

            <div>
                <div>
                <h3>Author: {props.recipe.author}</h3>
                <h4>Ingredients: {props.recipe.ingredients}</h4>
                <h4>Preparation: {props.recipe.preparation}</h4>
                <h4>PrepTime: {props.recipe.prepTime}</h4>
                <h4>Servings: {props.recipe.servings}</h4>
                </div>
            </div>

        </div>
    )

}

export default Recipe;