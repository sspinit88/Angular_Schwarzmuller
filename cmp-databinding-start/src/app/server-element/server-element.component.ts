import { AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterViewInit {

  @Input('srvElement') element: {
    type: string;
    name: string;
    content: string;
  };

  // данные из ViewChild будут доступны после загрузки ngAfterViewInit()
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log(this.header.nativeElement.textContent);
  }


}
