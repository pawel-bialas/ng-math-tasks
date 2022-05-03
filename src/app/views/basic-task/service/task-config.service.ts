import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TaskConfig} from '../model/TaskConfig';
import {TaskQMarkPosition} from '../model/TaskQMarkPosition';
import {TaskMathOperator} from '../model/TaskMathOperator';
import {TaskRange} from "../model/TaskRange";
import {TaskQuantity} from "../model/TaskQuantity";

@Injectable({
  providedIn: 'root'
})
export class TaskConfigService {

  private taskOptions = new BehaviorSubject(new TaskConfig(TaskQuantity.quantity_4, TaskRange.range_10, TaskQMarkPosition.qMarkPosition_right, TaskMathOperator.mathOperator_add, false));
  data$: Observable<TaskConfig> = this.taskOptions.asObservable();

  constructor() { }

  updateSetup(tasksOptions: TaskConfig): void{
    console.log(tasksOptions);
    this.taskOptions.next(tasksOptions);

  }

  resetSetup(): void {
  this.taskOptions = new BehaviorSubject(new TaskConfig(4, 10, TaskQMarkPosition.qMarkPosition_right, TaskMathOperator.mathOperator_add, false));
  }

  createTask(tasksOptions: TaskConfig){
    tasksOptions.isReady = true;
    this.taskOptions.next(tasksOptions);

  }
}
