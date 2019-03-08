import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecepiesModal } from "../recepies.modal";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {

  recipes: RecepiesModal[] = [
    new RecepiesModal(
      'A Test Recipe',
      'This is a simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGV7c7xleWs-cqpwrYJ6Te2TmJTg73HeVclQLJoqalY-veivJrtg'),
    new RecepiesModal(
      'A Test Recipe #2',
      'This is a simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGV7c7xleWs-cqpwrYJ6Te2TmJTg73HeVclQLJoqalY-veivJrtg')
  ];

  @Output() recipeWasSelected = new EventEmitter<RecepiesModal[]>();

  constructor() {
  }

  onRecipeSelected(item: RecepiesModal[]) {
    this.recipeWasSelected.emit(item);
  }

}
