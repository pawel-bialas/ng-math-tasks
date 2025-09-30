import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TaskConfig} from '../model/TaskConfig';
import {TaskQMarkPosition} from '../params/TaskQMarkPosition';
import {TaskMathOperator} from '../params/TaskMathOperator';
import {TaskRange} from "../params/TaskRange";
import {TaskQuantity} from "../params/TaskQuantity";
import {TaskSet} from "../model/TaskSet";
import {TaskSetStarted} from "../model/TaskSetStarted";
import {BasicTask} from "../model/BasicTask";
import {TaskConfigStarted} from "../model/TaskConfigStarted";
import {BasicTaskStarted} from "../model/BasicTaskStarted";
import {TaskSolutionService} from "./task-solution.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TaskStartService implements OnInit, OnDestroy {

  //emitter
  private taskSetEmitter = new BehaviorSubject(new TaskSet(
        new TaskConfig(
              TaskQuantity.quantity_4,
              TaskRange.range_10,
              TaskQMarkPosition.qMarkPosition_right,
              TaskMathOperator.mathOperator_add), []));
  data$: Observable<TaskSet> = this.taskSetEmitter.asObservable();
  taskSet: TaskSet;





  constructor(private router: Router) {
    this.taskSet = new TaskSet(new TaskConfig(TaskQuantity.quantity_4, TaskRange.range_10, TaskQMarkPosition.qMarkPosition_right, TaskMathOperator.mathOperator_add), []);
  }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
  }

  taskSetUpdate(taskSet: TaskSet){
    this.taskSetEmitter.next(taskSet);
  }


  taskSetStart(){
    this.taskSetEmitter.subscribe(value => this.taskSet = value);

    let taskConfigStarted: TaskConfigStarted = new TaskConfigStarted(this.taskSet.taskConfig);
    let taskSetStarted = new TaskSetStarted(new TaskSet(
                            taskConfigStarted,
                            this.provideTasks(this.taskSet.tasks, taskConfigStarted.configGuid)));
    this.taskSetEmitter.next(taskSetStarted);
    let taskSolutionService = new TaskSolutionService(this, this.router);
    taskSolutionService.start();
  }



  private provideTasks(tasks: BasicTask[], configGuid: string): BasicTaskStarted[]{
    let res: BasicTaskStarted[] = [];
    for (let t of tasks) {
      res.push(new BasicTaskStarted(t,configGuid));
    }

    return res;
  }

}
