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
    this.taskOptions.next(tasksOptions);

  }

  resetSetup(): void {
    let taskOptions = new TaskConfig(TaskQuantity.quantity_4, TaskRange.range_10, TaskQMarkPosition.qMarkPosition_right, TaskMathOperator.mathOperator_add, false);
    this.taskOptions.next(taskOptions)  }



}
