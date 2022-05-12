import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {TaskConfig} from "../model/TaskConfig";
import {TaskMathOperator} from "../model/TaskMathOperator";
import {Subscription} from "rxjs";
import {TaskConfigService} from "./task-config.service";

@Injectable({
  providedIn: 'root'
})
export class TaskCreateService implements OnInit, OnDestroy {

  //Object & properties
  taskConfig: TaskConfig | undefined;
  taskRangeMin: number = 0;


  //Subscriptions
  taskConfigSub: Subscription = new Subscription();


  constructor(private taskConfigService: TaskConfigService) {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.taskConfigSub.unsubscribe();
  }


  createTaskSet() {
    console.log('TaskCreateService createTask');
    this.taskConfigSub = this.taskConfigService.data$.subscribe(value => {
      this.taskConfig = value;
    });
    if (this.taskConfig) {
      if (this.taskConfig.mathOperator === TaskMathOperator.mathOperator_add) {
        console.log(this.provideTask(this.taskConfig.mathOperator));
      }
      if (this.taskConfig.mathOperator === TaskMathOperator.mathOperator_subtract){

      }
      if (this.taskConfig.mathOperator === TaskMathOperator.mathOperator_multiply){

      }
      if (this.taskConfig.mathOperator === TaskMathOperator.mathOperator_divide){

      }
    }
  }

  private provideTask(mathOperator: TaskMathOperator): any[] {
    let numbers: any[] = [];
    if (this.taskConfig){
      if (mathOperator === TaskMathOperator.mathOperator_add) {
          let range: number = Number(this.taskConfig.range);
          let number1 = Math.floor((Math.random() * range))
          let number2 = Math.floor((Math.random() * range));
          let number3 = number1 + number2;
          numbers = [number3, number2, number3];


      }
      if (mathOperator === TaskMathOperator.mathOperator_subtract) {

      }
      if (mathOperator === TaskMathOperator.mathOperator_divide) {

      }
      if (mathOperator === TaskMathOperator.mathOperator_multiply) {

      }
    }
    return numbers;
  }

  private validateTask(numbers: any[], mathOperator: TaskMathOperator) {
    let result = false;
    if (mathOperator === TaskMathOperator.mathOperator_add) {

    }
    if (mathOperator === TaskMathOperator.mathOperator_subtract) {

    }
    if (mathOperator === TaskMathOperator.mathOperator_divide) {

    }
    if (mathOperator === TaskMathOperator.mathOperator_multiply) {

    }
  }

}
