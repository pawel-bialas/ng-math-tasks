import { Injectable } from '@angular/core';
import {TaskConfig} from "../model/TaskConfig";
import {TaskMathOperator} from "../model/TaskMathOperator";

@Injectable({
  providedIn: 'root'
})
export class TaskCreateService {


  maxRange: number;
  minRange: number;

  constructor() {
    this.maxRange = 0;
    this.minRange = 0;
  }


  createTask(taskConfig: TaskConfig) {
    console.log('asdasdService');
    console.log(taskConfig);
    console.log(taskConfig.mathOperator);


    if (taskConfig.mathOperator === TaskMathOperator.mathOperator_add) {

      console.log(taskConfig.range);
      console.log(taskConfig.mathOperator);
      console.log(taskConfig.qMarkPosition);
      console.log(taskConfig.isReady);
      console.log(taskConfig.quantity);

    }


  }


}
