import {Component, OnInit} from '@angular/core';

@Component({
  // как атрибут
  selector: '[app-serve]',

  // как класс
  // selector: '.app-serve',

  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.css']
})
export class ServeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
