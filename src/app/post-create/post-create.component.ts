import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  public num_one : number
  public num_two : number
  constructor() {
    this.num_one = 0
    this.num_two = 0
  }


  ngOnInit(): void {
  }

}
