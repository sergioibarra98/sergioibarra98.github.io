import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public burger: boolean;

  constructor() {
    this.burger = true;
  }

  hideBurger() {
    if (this.burger == false) {
      this.burger = true;
    } else {
      this.burger = false;
    }
  }
}
