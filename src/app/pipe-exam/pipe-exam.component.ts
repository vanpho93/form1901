import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-exam',
  templateUrl: './pipe-exam.component.html',
  styleUrls: ['./pipe-exam.component.css']
})
export class PipeExamComponent implements OnInit {
  person = { name: 'Teo', age: 10 };
  now = new Date();

  constructor() { }

  ngOnInit() {
  }
}
