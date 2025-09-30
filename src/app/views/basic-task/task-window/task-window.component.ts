import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-window.component.html',
  styleUrls: ['./task-window.component.scss']
})
export class TaskWindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
