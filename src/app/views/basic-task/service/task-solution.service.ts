import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TaskConfig} from '../model/TaskConfig';
import {TaskQMarkPosition} from '../params/TaskQMarkPosition';
import {TaskMathOperator} from '../params/TaskMathOperator';
import {TaskRange} from "../params/TaskRange";
import {TaskQuantity} from "../params/TaskQuantity";
import {TaskSet} from "../model/TaskSet";
import {TaskStartService} from "./task-start.service.";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TaskSolutionService implements OnInit, OnDestroy {

  //emitter
  private taskSolution = new BehaviorSubject(new TaskSet(new TaskConfig(TaskQuantity.quantity_4, TaskRange.range_10, TaskQMarkPosition.qMarkPosition_right, TaskMathOperator.mathOperator_add), []))
  data$: Observable<TaskSet> = this.taskSolution.asObservable();


  //Object & properties
  taskSet: TaskSet = new TaskSet(
    new TaskConfig(
      TaskQuantity.quantity_4,
      TaskRange.range_10,
      TaskQMarkPosition.qMarkPosition_right,
      TaskMathOperator.mathOperator_add), []);

  constructor(private taskStartService: TaskStartService, private router: Router) {
    taskStartService.data$.subscribe(value => this.taskSet = value)
  }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
  }

  updateSolution(taskSet: TaskSet){
    this.taskSolution.next(taskSet);
  }


  start(){
    console.log(this.taskSet)
    this.router.navigate(['/solution']).then(r => console.log(r));
    this.updateSolution(this.taskSet);
  }

}
