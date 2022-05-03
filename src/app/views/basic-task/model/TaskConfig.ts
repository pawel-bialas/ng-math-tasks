import {TaskQMarkPosition} from './TaskQMarkPosition';
import {TaskMathOperator} from './TaskMathOperator';
import {TaskRange} from "./TaskRange";
import {TaskQuantity} from "./TaskQuantity";

export class TaskConfig {

  quantity: string | TaskQuantity ;
  range: string | TaskRange;
  qMarkPosition: string | TaskQMarkPosition;
  mathOperator: string | TaskMathOperator;
  isReady: boolean;

  public constructor(quantity: TaskQuantity, range: TaskRange, qMarkPosition: TaskQMarkPosition, mathOperator: TaskMathOperator, isReady: boolean) {
   this.quantity = quantity;
   this.range = range;
   this.qMarkPosition = qMarkPosition;
   this.mathOperator = mathOperator;
   this.isReady = isReady;
  }

}

