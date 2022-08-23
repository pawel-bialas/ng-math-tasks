import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {TaskConfig} from "../model/TaskConfig";
import {TaskMathOperator} from "../params/TaskMathOperator";
import {Subscription} from "rxjs";
import {TaskConfigService} from "./task-config.service";
import {TaskQuantity} from "../params/TaskQuantity";
import {TaskRange} from "../params/TaskRange";
import {TaskQMarkPosition} from "../params/TaskQMarkPosition";
import {BasicTask} from "../model/BasicTask";
import {GUID} from "../../../common/RandomGuid";

@Injectable({
  providedIn: 'root'
})
export class TaskCreateService implements OnInit, OnDestroy {

  //Object & properties
  taskConfig: TaskConfig = new TaskConfig(TaskQuantity.quantity_4, TaskRange.range_10, TaskQMarkPosition.qMarkPosition_right, TaskMathOperator.mathOperator_add, false, GUID)
  multiplyValuesSet: any[] = [];
  divideValuesSet: any[] = [];
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
    return this.provideTaskSet(this.taskConfig.mathOperator, this.taskConfig.quantity, this.taskConfig.range, this.taskConfig.qMarkPosition);


  }

  private provideTaskSet(mathOperator: TaskMathOperator, quantity: TaskQuantity, range: TaskRange, qMarkPosition: TaskQMarkPosition): BasicTask[] {
    let tasks: BasicTask[] = [];
    let userInputValueIndex = 3;

    while (tasks.length < quantity.value) {

      userInputValueIndex = this.setUserInputIndex(qMarkPosition)
      let values = this.createValues(mathOperator, range);
      let validTask = this.validateTask(mathOperator, range, values);
      if (!validTask) {
        continue;
      }
      let task = new BasicTask(GUID, GUID, values, false, userInputValueIndex);
      let validTaskSet = this.validateTaskSet(task, tasks)
      if (!validTaskSet) {
        continue;
      }
      tasks.push(task);
    }
    console.log(tasks);
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
    return valid;
  }

  private compareMaps(map1: Map<any, any>, map2: Map<any, any>) {
    let testVal;
    if (map1.size !== map2.size) {
      console.log('validFalse');
      return false;
    }
    for (var [key, val] of map1) {
      testVal = map2.get(key);
      if (testVal !== val || (testVal === undefined && !map2.has(key))) {
        return true;
      }
    }
    console.log('validFalse');
    return false;
  }


  private validateTask(mathOperator: TaskMathOperator, taskRange: TaskRange, values: Map<any, any>) {
    let validate = true;

    if (mathOperator.value === TaskMathOperator.mathOperator_add.value) {
      if (!((values.get('number1') + values.get('number2')) === values.get('result'))) {
        validate = false;
      }
    }
    if (mathOperator.value === TaskMathOperator.mathOperator_subtract.value) {
      if (!((values.get('number1') - values.get('number2')) === values.get('result'))) {
        validate = false;
      }
    }
    if (mathOperator.value === TaskMathOperator.mathOperator_multiply.value) {
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
    if (mathOperator.value === TaskMathOperator.mathOperator_divide.value) {
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
      if ((values.get('result') < (taskRange.value / 2))) {
        validate = false;
      }
    }
    if (validate) {
      if ((values.get('result') > (taskRange.value * 2))) {
        validate = false;
      }
    }
    return validate;
  }

  generateRandomNumber(taskRange: TaskRange) {
    let r = Math.floor(Math.random() * taskRange.value) + 1;
    while (r > taskRange.value) {
      r = Math.floor(Math.random() * taskRange.value) + 1;
    }
    return r;
  }

  generateRandomIndex(arraLength: number) {
    return Math.floor(Math.random() * arraLength) + 1;
  }


  private createValues(mathOperator: TaskMathOperator, taskRange: TaskRange) {
    let values = new Map();
    let number1: number;
    let number2: number;
    let index = -1;

    number1 = this.generateRandomNumber(taskRange);
    number2 = this.generateRandomNumber(taskRange);

    values.set('number1', number1);
    values.set('number2', number2);
    values.set('result', this.setResult(mathOperator, values.get('number1'), values.get('number2')));


    if (mathOperator.value === TaskMathOperator.mathOperator_multiply.value || mathOperator.value === TaskMathOperator.mathOperator_divide.value) {
      for (let i = 1; i <= taskRange.value; i++) {
        values = new Map();
        values.set('number1', i);
        values.set('number2', i);
        values.set('result', this.setResult(mathOperator, values.get('number1'), values.get('number2')));
        let valid = this.validateTask(mathOperator, taskRange, values);
        if (valid) {

          if (mathOperator.value === TaskMathOperator.mathOperator_divide.value) {
            this.divideValuesSet.push(values);
          }
          if (mathOperator.value === TaskMathOperator.mathOperator_multiply.value) {
            this.multiplyValuesSet.push(values);
          }
        }
      }
      if (mathOperator.value === TaskMathOperator.mathOperator_divide.value) {
        if (this.divideValuesSet.length > 0) {
          index = this.generateRandomIndex(this.divideValuesSet.length)
        }
      }
      if (mathOperator.value === TaskMathOperator.mathOperator_multiply.value) {
        if (this.multiplyValuesSet.length > 0) {
          index = this.generateRandomIndex(this.multiplyValuesSet.length)
        }
      }
    }

    if (index !== -1) {
      if (mathOperator.value === TaskMathOperator.mathOperator_multiply.value) {
        values = this.multiplyValuesSet[index];
      }
      if (mathOperator.value === TaskMathOperator.mathOperator_divide.value) {
        values = this.divideValuesSet[index];
      }

    }

    return values;
  }

  private setResult(mathOperator: TaskMathOperator, number1: number, number2: number) {

    let result: number;

    switch (mathOperator.value) {
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

    return result;

  }

  private setUserInputIndex(qMarkPosition: TaskQMarkPosition) {
    let result = 3;
    if (qMarkPosition.value === TaskQMarkPosition.qMarkPosition_right.value) {
      result = 2;
    }
    if (qMarkPosition.value === TaskQMarkPosition.qMarkPosition_center.value) {
      result = 1;
    }
    if (qMarkPosition.value === TaskQMarkPosition.qMarkPosition_left.value) {
      result = 0;
    }
    return result;
  }
}
