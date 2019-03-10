import { EventEmitter, Injectable } from '@angular/core';
import { RecepiesModal } from "../recipes/recepies.modal";
import { IngredientModel } from "./ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<RecepiesModal>();

  private recipes: RecepiesModal[] = [
    new RecepiesModal(
      'A Test Recipe',
      'This is a simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGV7c7xleWs-cqpwrYJ6Te2TmJTg73HeVclQLJoqalY-veivJrtg',
      [
        new IngredientModel('Meat', 1),
        new IngredientModel('French Fries', 20),
      ]),
    new RecepiesModal(
      'A Test Recipe #2',
      'This is a simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGV7c7xleWs-cqpwrYJ6Te2TmJTg73HeVclQLJoqalY-veivJrtg',
      [
        new IngredientModel('Buns', 1),
        new IngredientModel('Meat', 2),
      ])
  ];

  constructor(
    private slService: ShoppingListService,
  ) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.slService.addIngredient(ingredients);
  }

}
