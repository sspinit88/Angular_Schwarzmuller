import { Component, ElementRef, ViewChild } from '@angular/core';
import { IngredientModel } from "../../shared/ingredient.model";
import { ShoppingListService } from "../../shared/shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;


  constructor(
    private shoppingListService: ShoppingListService,
  ) {
  }

  onSubmit() {
    const newIngredient = new IngredientModel(this.name.nativeElement.value, this.amount.nativeElement.value);
    this.shoppingListService.addIngredients(newIngredient);
  }

}
