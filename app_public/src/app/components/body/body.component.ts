import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  colors:String[];

  constructor() { }

  ngOnInit() {
    this.colors = ['#1B3576', '#0B44E0', '#06BDF5', '#99CD87', '#E6F262'];
  }

  onGenerate() {
    this.colors = ['#666563', '#C6553A', '#CEBB73', '#DDD9AE', '#7FA18E'];
  }
}
