import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  @Input() name: string;
  @Input() logo: string;
  @Output() isHover = new EventEmitter();
  
  public id: string;
  public hover: boolean;

  constructor() { 
    this.name = "";
    this.logo = "";
    this.id = "";
    this.hover = false;
  }

  ngOnInit(): void {
    this.id = 'App-' + this.name;
  }

  launch(event:Event, value:boolean) {
    console.log(event);
    this.hover = value;
    this.isHover.emit(this.hover);
  }



}
