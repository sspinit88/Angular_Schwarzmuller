import { Component, OnInit } from '@angular/core';
import { RecepiesModal } from "../recepies.modal";
import { RecipeService } from "../../shared/recipe.service";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: RecepiesModal[];

  constructor(
    private recipeService: RecipeService,
  ) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
