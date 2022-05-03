import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TaskConfig} from '../model/TaskConfig';
import {TaskQMarkPosition} from '../model/TaskQMarkPosition';
import {TaskMathOperator} from '../model/TaskMathOperator';

@Injectable({
  providedIn: 'root'
})
export class TaskConfigService {

  private taskOptions = new BehaviorSubject(new TaskConfig(4, 10, TaskQMarkPosition.right, TaskMathOperator.mathOperator_add, false));
  data$: Observable<TaskConfig> = this.taskOptions.asObservable();

  constructor() { }

  updateSetup(tasksOptions: TaskConfig): void{
    this.taskOptions.next(tasksOptions);
  }

  resetSetup(): void {
  this.taskOptions = new BehaviorSubject(new TaskConfig(4, 10, TaskQMarkPosition.right, TaskMathOperator.mathOperator_add, false));
  }
}
