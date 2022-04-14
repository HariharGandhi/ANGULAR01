import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpol',
  templateUrl: './interpol.component.html',
  styleUrls: ['./interpol.component.css']
})
export class InterpolComponent implements OnInit {
  private sub_one : string
  constructor() {
    this.sub_one = "English"
  }
  public get_subone() : string
  {
      return this.sub_one
  }
  ngOnInit(): void {
  }

}
