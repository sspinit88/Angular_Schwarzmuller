import { EventEmitter, Injectable } from '@angular/core';
import { IngredientModel } from "./ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChange = new EventEmitter<IngredientModel[]>();

  private ingredients: IngredientModel[] = [
    new IngredientModel(
      'Apples',
      5,
    ),
    new IngredientModel(
      'Tomatoes',
      10
    ),
  ];

  constructor() {
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.ingredients.slice());
  }

  addIngredient(ingredients: IngredientModel[]) {
      // for (let ingredient of ingredients) {
      //   this.addIngredients(ingredient);
      // }
    this.ingredients.push(...ingredients);
    this.ingredientsChange.emit(this.ingredients.slice());
  }

}
