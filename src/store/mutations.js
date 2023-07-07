export function setSearchedMeals(state, meals){
  state.searchedMeals = meals || []
}

export function setMealsByLetter(state, meals){
  state.mealsByLetters = meals || []
}

export function setMealsByIngredients(state, meals){
  state.mealsByIngredients = meals || []
}