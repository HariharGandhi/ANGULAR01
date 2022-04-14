import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'click',
  templateUrl: './click.component.html',
  styles: [
  ]
})
export class ClickComponent implements OnInit {
  public count: number
  constructor() {
    this.count = 0
  }

  ngOnInit(): void {
  }

}
