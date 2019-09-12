import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  colorSets:String[][] = [
    ['#1B3576', '#0B44E0', '#06BDF5', '#99CD87', '#E6F262'],
    ['#666563', '#C6553A', '#CEBB73', '#DDD9AE', '#7FA18E'],
    ['#7CAEC3', '#EBCCB7', '#F5F2E7', '#66ABB4', '#5A5B5B'],
    ['#E898C7', '#9F3232', '#841C2D', '#0E0C0C', '#312B15'],
    ['#A46A43', '#47260F', '#5D3F3B', '#938B90', '#B1A680'],
    ['#1D915B', '#ACC378', '#EDE9A1', '#DB8B33', '#AC4E3C'],
    ['#257893', '#0C6491', '#0C4863', '#303564', '#B77254'],
    ['#7E305B', '#FD4247', '#FAEBB5', '#D5D9DB', '#87C1C1'],
    ['#0D4F5F', '#324649', '#FBB05B', '#E06E3A', '#90383B'],
    ['#AABBAA', '#ECDCA7', '#DEC48D', '#B49C7D', '#806753']
  ];
  colors:String[];

  constructor() { }

  ngOnInit() {
    this.colors = ['#1B3576', '#0B44E0', '#06BDF5', '#99CD87', '#E6F262'];
  }

  onGenerate() {
    var randNum = Math.floor(Math.random() * 10);
    this.colors = this.colorSets[randNum];
  }
}
