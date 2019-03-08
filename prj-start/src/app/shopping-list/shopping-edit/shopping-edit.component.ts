import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { IngredientModel } from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  @Output() ingredientAdded = new EventEmitter<IngredientModel>();

  constructor() {
  }
  // shopping-added+list-data-transfer
  onSubmit() {
    const newIngredient = new IngredientModel(this.name.nativeElement.value, this.amount.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);
  }

}
