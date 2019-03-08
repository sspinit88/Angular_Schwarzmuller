import { Component, Input, OnInit } from '@angular/core';
import { RecepiesModal } from "../recepies.modal";

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input() recipe: RecepiesModal;

  constructor() { }

  ngOnInit() {
  }

}
