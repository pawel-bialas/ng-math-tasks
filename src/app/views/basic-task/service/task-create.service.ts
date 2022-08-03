import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {TaskConfig} from "../model/TaskConfig";
import {TaskMathOperator} from "../params/TaskMathOperator";
import {Subscription} from "rxjs";
import {TaskConfigService} from "./task-config.service";
import {TaskQuantity} from "../params/TaskQuantity";
import {TaskRange} from "../params/TaskRange";
import {TaskQMarkPosition} from "../params/TaskQMarkPosition";
import {UUID} from "angular2-uuid";
import {Task} from "../model/Task";

@Injectable({
  providedIn: 'root'
})
export class TaskCreateService implements OnInit, OnDestroy {

  //Object & properties
  taskConfig: TaskConfig = new TaskConfig(TaskQuantity.quantity_4, TaskRange.range_10, TaskQMarkPosition.qMarkPosition_right, TaskMathOperator.mathOperator_add, false, UUID.UUID())

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

    console.log(this.taskConfig);

    if (this.taskConfig.mathOperator.value === TaskMathOperator.mathOperator_add.value) {
      this.provideAddTaskSet(this.taskConfig.mathOperator, this.taskConfig.quantity, this.taskConfig.range, this.taskConfig.qMarkPosition);
    }
    if (this.taskConfig.mathOperator.value === TaskMathOperator.mathOperator_subtract.value) {

    }
    if (this.taskConfig.mathOperator.value === TaskMathOperator.mathOperator_divide.value) {

    }
    if (this.taskConfig.mathOperator.value === TaskMathOperator.mathOperator_multiply.value) {

    }


  }

  private provideAddTaskSet(mathOperator: TaskMathOperator, quantity: TaskQuantity, range: TaskRange, qMarkPosition: TaskQMarkPosition) {
    let tasks: Task[] = [];
    if (mathOperator === TaskMathOperator.mathOperator_add) {
      let userInputValueIndex: number = 3;

      while (tasks.length < quantity.value) {


        let numbers = new Map();
        numbers.set('number1', this.generateNumber());
        numbers.set('number2', this.generateNumber());
        numbers.set('result', (numbers.get('number1') + (numbers.get('number2'))));

        if (qMarkPosition.value === TaskQMarkPosition.qMarkPosition_right.value) {
          userInputValueIndex = 2;
        }
        if (qMarkPosition.value === TaskQMarkPosition.qMarkPosition_center.value) {
          userInputValueIndex = 1;
        }
        if (qMarkPosition.value === TaskQMarkPosition.qMarkPosition_left.value) {
          userInputValueIndex = 0;
        }
        let task = new Task(this.taskConfig.guid, UUID.UUID(), numbers, false, userInputValueIndex);
        let valid =  this.validateTaskSet(task, tasks)
        if (!valid) {
          continue;
        }
        tasks.push(task);
      }
    }

  }

  private validateTaskSet(newTask: Task, tasks: Task[]) {
    let valid = true;
    for (let task of tasks) {
      let currentNumbers = task.getNumbers();
      let newNumbers = newTask.getNumbers();

      if (newNumbers !== null && newNumbers !== undefined && currentNumbers  !== null && currentNumbers !== undefined) {
        let validNumbers = this.compareMaps(currentNumbers, newNumbers)
        if (!validNumbers) {
          valid = false;
        }
      }
    }
    return valid;
  }

  private compareMaps(map1: Map<any, any>, map2: Map<any, any>) {
    let testVal;
    if (map1.size !== map2.size) {
      console.log('validFalse');
      return false;
    }
    for (var [key, val] of map1) {
      testVal  = map2.get(key);
      if (testVal !== val || (testVal === undefined && !map2.has(key))) {
        console.log('validTrue');
        return true;
      }
    }
    console.log('validFalse');
    return false;
  }


  private validateTask(numbers: number[], mathOperator: TaskMathOperator) {

  }

  generateNumber() {
    let r = Math.floor(Math.random() * this.taskConfig.range.value) + 1;
    if (r <= this.taskConfig.range.value) {
      return r;
    } else {
      return null;
    }
  }


}
