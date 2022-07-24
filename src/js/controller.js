import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

//---------------------------------------------------------- Show recipe

if (module.hot) {
  module.hot.accept();
}

const controlRecipe = async function () {
  try {
    // Getting id
    const id = window.location.hash.slice(1);

    if (!id) return;
    // Added loading spinner
    recipeView.loadSpinner();
    // Loading API
    await model.loadRecipe(id);
    // Render API
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};
//---------------------------------------------------------- Search recipe

const controlSearchRecipe = async function () {
  try {
    // Load spinner
    resultsView.loadSpinner();
    // Get Query from form
    const query = searchView.getQuery();
    if (!query) return;
    // handel serach
    await model.loadSearchRecipe(query);
    //render to view
    resultsView.render(model.state.search.results);
  } catch (err) {
    console.error(err);
  }
};

// controlRecipe();
const init = function () {
  recipeView.addHandlerEvent(controlRecipe);
  searchView.addHandlerSearch(controlSearchRecipe);
};
init();
