import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  @Input() name: string = "";
  @Input() logo: string = "";
  @Input() isHover: boolean = false;
  @Output() isHoverChange = new EventEmitter<boolean>();
  
  public id: string = "App-";

  constructor() { }

  ngOnInit(): void {
    this.id += this.name;
  }

  onHover() {
    this.isHover = true;
    this.isHoverChange.emit(this.isHover);
  }

  onHoverOut() {
    this.isHover = false;
    this.isHoverChange.emit(this.isHover);
  }
}
