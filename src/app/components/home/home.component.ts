import { Component, OnInit } from '@angular/core';
import tippy from 'tippy.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public hover:boolean = false;

  constructor() { 
  }

  ngOnInit(): void { 
    tippy('[data-tippy-content]', {
      placement: "bottom",
      arrow: false,
    });
  }

}
