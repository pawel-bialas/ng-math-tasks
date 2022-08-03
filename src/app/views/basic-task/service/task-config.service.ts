import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TaskConfig} from '../model/TaskConfig';
import {TaskQMarkPosition} from '../params/TaskQMarkPosition';
import {TaskMathOperator} from '../params/TaskMathOperator';
import {TaskRange} from "../params/TaskRange";
import {TaskQuantity} from "../params/TaskQuantity";
import {UUID} from "angular2-uuid";

@Injectable({
  providedIn: 'root'
})
export class TaskConfigService {

  private taskOptions = new BehaviorSubject(new TaskConfig(TaskQuantity.quantity_4, TaskRange.range_10, TaskQMarkPosition.qMarkPosition_right, TaskMathOperator.mathOperator_add, false, UUID.UUID()));
  data$: Observable<TaskConfig> = this.taskOptions.asObservable();

  constructor() { }

  updateSetup(tasksOptions: TaskConfig): void{
    this.taskOptions.next(tasksOptions);

  }

  resetSetup(): void {
    let taskOptions = new TaskConfig(TaskQuantity.quantity_4, TaskRange.range_10, TaskQMarkPosition.qMarkPosition_right, TaskMathOperator.mathOperator_add, false,UUID.UUID());
    this.taskOptions.next(taskOptions)  }



}
