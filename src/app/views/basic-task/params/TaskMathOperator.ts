


import {Enumify} from "enumify";


export class TaskMathOperator extends Enumify {
  static mathOperator_add = new TaskMathOperator('+');
  static mathOperator_subtract = new TaskMathOperator('-');
  static mathOperator_multiply = new TaskMathOperator('*');
  static mathOperator_divide = new TaskMathOperator('/');
  static _ = this.closeEnum(); // TypeScript: TaskMathOperator.closeEnum()

  value: string;
  constructor(value: string) {
    super();
    this.value = value;
  }

}
