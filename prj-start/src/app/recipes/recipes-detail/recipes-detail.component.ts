import { Component, Input, OnInit } from '@angular/core';
import { RecepiesModal } from "../recepies.modal";
import { RecipeService } from "../../shared/recipe.service";

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input() recipe: RecepiesModal;

  constructor(
    private recipeService: RecipeService,
  ) {
  }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
