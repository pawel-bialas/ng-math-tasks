import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basic-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-task.component.html',
  styleUrls: ['./basic-task.component.scss']
})
export class BasicTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
