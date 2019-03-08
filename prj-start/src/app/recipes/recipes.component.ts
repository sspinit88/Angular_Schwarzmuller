import { Component, Input, OnInit } from '@angular/core';
import { RecepiesModal } from "./recepies.modal";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  selectedRecipe: RecepiesModal[];

  constructor() { }

}
