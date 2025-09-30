import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {TaskConfig} from "../model/TaskConfig";
import {TaskMathOperator} from "../params/TaskMathOperator";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {TaskConfigService} from "./task-config.service";
import {TaskQuantity} from "../params/TaskQuantity";
import {TaskRange} from "../params/TaskRange";
import {TaskQMarkPosition} from "../params/TaskQMarkPosition";
import {BasicTask} from "../model/BasicTask";
import {TaskSet} from "../model/TaskSet";
import {TaskStartService} from "./task-start.service.";

@Injectable({
  providedIn: 'root'
})
export class TaskCreateService implements OnInit, OnDestroy {


  //Object & properties
  taskConfig: TaskConfig = new TaskConfig(TaskQuantity.quantity_4, TaskRange.range_10, TaskQMarkPosition.qMarkPosition_right, TaskMathOperator.mathOperator_add);
  multiplyValuesSet: any[] = [];
  divideValuesSet: any[] = [];

  //Subscriptions
  taskConfigSub: Subscription = new Subscription();


  constructor(private taskConfigService: TaskConfigService, private taskStartService: TaskStartService) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.taskConfigSub.unsubscribe();
  }

  updateTaskSet(taskSet: TaskSet): void{
    this.taskStartService.taskSetUpdate(taskSet);
  }

  taskSetStart(): void {
    this.taskStartService.taskSetStart();
  }



  createTaskSet() {

    this.taskConfigSub = this.taskConfigService.data$.subscribe(value => {
      this.taskConfig = value;
    });

    this.updateTaskSet(
    new TaskSet(
      this.taskConfig,
      this.provideTaskSet(
            this.taskConfig.mathOperator,
            this.taskConfig.quantity,
            this.taskConfig.range,
            this.taskConfig.qMarkPosition))
    );
    this.taskSetStart();
  }

  private provideTaskSet(mathOperator: TaskMathOperator, quantity: TaskQuantity, range: TaskRange, qMarkPosition: TaskQMarkPosition): BasicTask[] {
    let tasks: BasicTask[] = [];
    let userInputValueIndex = 3;


    while (tasks.length < quantity) {

      userInputValueIndex = this.setUserInputIndex(qMarkPosition)
      let values = this.createValues(mathOperator, range);
      let validTask = this.validateTask(mathOperator, range, values);
      if (!validTask) {
        continue;
      }

      let task = new BasicTask(values, false, userInputValueIndex);
      let validTaskSet = this.validateTaskSet(task, tasks)
      if (!validTaskSet) {
        continue;
      }
      tasks.push(task);
    }

    console.log(tasks);
    //.log('provideTaskSet return')
    return tasks;
  }



  private validateTaskSet(newTask: BasicTask, tasks: BasicTask[]) {
    let valid = true;
    for (let task of tasks) {
      let currentNumbers = task.values;
      let newNumbers = newTask.values;

      if (newNumbers !== null && newNumbers !== undefined && currentNumbers !== null && currentNumbers !== undefined) {
        let validNumbers = this.compareMaps(currentNumbers, newNumbers)
        if (!validNumbers) {
          valid = false;
        }
      }
    }
    //console.log('validateTaskSet return')
    return valid;
  }

  private compareMaps(map1: Map<any, any>, map2: Map<any, any>) {
    let testVal;
    if (map1.size !== map2.size) {
      return false;
    }
    for (var [key, val] of map1) {
      testVal = map2.get(key);
      if (testVal !== val || (testVal === undefined && !map2.has(key))) {
        return false;
      }
    }
    //console.log('compareMaps return')
    return true;
  }


  private validateTask(mathOperator: TaskMathOperator, taskRange: TaskRange, values: Map<any, any>) {
    let validate = true;

    if (values !== undefined && values !== null) {

      if (mathOperator === TaskMathOperator.mathOperator_add) {
        if (!((values.get('number1') + values.get('number2')) === values.get('result'))) {
          validate = false;
        }
      }
      if (mathOperator === TaskMathOperator.mathOperator_subtract) {
        if (!((values.get('number1') - values.get('number2')) === values.get('result'))) {
          validate = false;
        }
      }
      if (mathOperator === TaskMathOperator.mathOperator_multiply) {
        if (!((values.get('number1') * values.get('number2')) === values.get('result'))) {
          validate = false;
        }
        if (values.get('number1') === 1) {
          validate = false;
        }
        if (values.get('number2') === 1) {
          validate = false;
        }
      }
      if (mathOperator === TaskMathOperator.mathOperator_divide) {
        if (!((values.get('number1') / values.get('number2')) === values.get('result'))) {
          validate = false;
        }
        if (values.get('number1') === 1) {
          validate = false;
        }
        if (values.get('number2') === 1) {
          validate = false;
        }
      }

      if (validate) {
        if (values.get('result') <= 0) {
          validate = false;
        }
      }
      if (validate) {
        if (!(Number.isInteger(values.get('result')))) {
          validate = false;
        }
      }
      if (validate) {
        if ((values.get('result') < (taskRange / 2))) {
          validate = false;
        }
      }
      if (validate) {
        if ((values.get('result') > (taskRange * 2))) {
          validate = false;
        }
      }
    }
    //console.log('validateTask return')
    return validate;
  }

  generateRandomNumber(taskRange: TaskRange) {
    let r = Math.floor(Math.random() * taskRange) + 1;
    while (r > taskRange) {
      r = Math.floor(Math.random() * taskRange) + 1;
    }
    //console.log('generateRandomNumber return')
    return r;
  }

  generateRandomIndex(arrayLength: number) {
    //console.log('generateRandomIndex return')
    return Math.floor(Math.random() * arrayLength) + 1;
  }


  private createValues(mathOperator: TaskMathOperator, taskRange: TaskRange) {
    let values = new Map();
    if (mathOperator === TaskMathOperator.mathOperator_add || mathOperator === TaskMathOperator.mathOperator_subtract) {

      let number1: number;
      let number2: number;

      number1 = this.generateRandomNumber(taskRange);
      number2 = this.generateRandomNumber(taskRange);

      values.set('number1', number1);
      values.set('number2', number2);
      values.set('result', this.setResult(mathOperator, values.get('number1'), values.get('number2')));
    }


    if (mathOperator === TaskMathOperator.mathOperator_multiply) {
      values = this.provideMultiplyValues(taskRange);
    }
    if (mathOperator === TaskMathOperator.mathOperator_divide) {
      values = this.provideDivideValues(taskRange);
    }
    //console.log('createValues return')
    return values;
  }

  private setResult(mathOperator: TaskMathOperator, number1: number, number2: number) {

    let result: number;


    switch (mathOperator) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;

        break;
      case '*':
        result = number1 * number2;

        break;
      case '/':
        result = number1 / number2;
        break;

      default:
        result = 0;
    }
    //console.log('setResult return')
    return result;

  }

  private setUserInputIndex(qMarkPosition: TaskQMarkPosition) {
    let result = 3;
    if (qMarkPosition === TaskQMarkPosition.qMarkPosition_right) {
      result = 2;
    }
    if (qMarkPosition === TaskQMarkPosition.qMarkPosition_center) {
      result = 1;
    }
    if (qMarkPosition === TaskQMarkPosition.qMarkPosition_left) {
      result = 0;
    }
    //console.log('setUserInputIndex return')
    return result;
  }

  private provideMultiplyValues(taskRange: TaskRange) {
    this.multiplyValuesSet = [];
    let values = new Map();

    for (let i = 1; i <= taskRange; i++) {
      for (let j = 2; j <= 9; j++) {
        let option = new Map();
        option.set('number1', i);
        option.set('number2', j);
        option.set('result', this.setResult(TaskMathOperator.mathOperator_multiply, option.get('number1'), option.get('number2')));

        let valid = this.validateTask(TaskMathOperator.mathOperator_multiply, taskRange, option);
        if (!valid) {
          continue;
        }
        this.multiplyValuesSet.push(option);
      }

    }
    let index = this.generateRandomIndex(this.multiplyValuesSet.length);
    //console.log('provideMultiplyValues return')
    return this.multiplyValuesSet[index];
  }

  private provideDivideValues(taskRange: TaskRange) {
    let values = new Map();
    let valid = false;
    
    while (!valid) {
      let number2 = this.generateRandomNumber(taskRange);
      let result = this.generateRandomNumber(taskRange);
      let number1 = number2 * result;
      
      values.set('number1', number1);
      values.set('number2', number2);
      values.set('result', result);
      
      valid = this.validateTask(TaskMathOperator.mathOperator_divide, taskRange, values);
    }
    
    return values;
  }
}
