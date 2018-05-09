import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-exam',
  templateUrl: './pipe-exam.component.html',
  styleUrls: ['./pipe-exam.component.css']
})
export class PipeExamComponent implements OnInit {
  person = { name: 'Teo', age: 10 };
  now = new Date();
  people = [
    { name: 'Ti', age: 10, height: 150 },
    { name: 'Teo', age: 12, height: 120 },
    { name: 'Tun', age: 13, height: 130 },
    { name: 'Tuan', age: 17, height: 140 },
  ];
  constructor() { }

  ngOnInit() {
  }
}
