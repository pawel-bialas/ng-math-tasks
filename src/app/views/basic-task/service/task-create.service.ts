import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {TaskConfig} from "../model/TaskConfig";
import {TaskMathOperator} from "../params/TaskMathOperator";
import {Subscription} from "rxjs";
import {TaskConfigService} from "./task-config.service";
import {TaskQuantity} from "../params/TaskQuantity";
import {TaskRange} from "../params/TaskRange";
import {TaskQMarkPosition} from "../params/TaskQMarkPosition";
import {isNull} from "@angular/compiler/src/output/output_ast";

@Injectable({
  providedIn: 'root'
})
export class TaskCreateService implements OnInit, OnDestroy {

  //Object & properties
  taskConfig: TaskConfig = new TaskConfig(TaskQuantity.quantity_4, TaskRange.range_10, TaskQMarkPosition.qMarkPosition_right, TaskMathOperator.mathOperator_add, false)

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
    console.log(this.provideAddTask(this.taskConfig.mathOperator))
  }

  private provideAddTask(mathOperator: TaskMathOperator): any[] {
    let numbers: number[] = [];
    if (this.taskConfig){
      if (mathOperator.value === TaskMathOperator.mathOperator_add.value) {
          let range: number = Number(this.taskConfig.range.value);
          let tempNumber = 0;
          while (numbers.length < 2) {

            tempNumber = Math.floor((Math.random() * range));
            if (tempNumber >= this.taskConfig.range.value / 5){
              numbers.push(tempNumber);
            }
          }
          numbers.push(numbers[0] + numbers[1]);


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

  private validateTask(numbers: number[], mathOperator: TaskMathOperator) {
    let result = false;
    if (mathOperator.value === TaskMathOperator.mathOperator_add.value) {

    }
    if (mathOperator.value === TaskMathOperator.mathOperator_subtract.value) {

    }
    if (mathOperator === TaskMathOperator.mathOperator_divide) {

    }
    if (mathOperator === TaskMathOperator.mathOperator_multiply) {

    }
  }

}
