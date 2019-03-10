import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecepiesModal } from "../../recepies.modal";
import { RecipeService } from "../../../shared/recipe.service";

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input('recipe') item: RecepiesModal;

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.item);
  }

}
