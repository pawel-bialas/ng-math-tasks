import {TaskQMarkPosition} from './TaskQMarkPosition';
import {TaskMathOperator} from './TaskMathOperator';
import {TaskRange} from "./TaskRange";
import {TaskQuantity} from "./TaskQuantity";

export class TaskConfig {

  public quantity: TaskQuantity ;
  public range: TaskRange;
  public qMarkPosition: TaskQMarkPosition;
  public mathOperator: TaskMathOperator;
  public isReady: boolean;

  public constructor(quantity: TaskQuantity, range: TaskRange, qMarkPosition: TaskQMarkPosition, mathOperator: TaskMathOperator, isReady: boolean) {
   this.quantity = quantity;
   this.range = range;
   this.qMarkPosition = qMarkPosition;
   this.mathOperator = mathOperator;
   this.isReady = isReady;
  }

  getListProperties(){
    return ['quantity', 'range','qMarkPosition', 'mathOperator'];
  }

  public getQuantity() {
    return this.quantity;
  }

  public getRange() {
    return this.range;
  }

  public getqMarkPosition() {
    return this.qMarkPosition;
  }

  public getMathOperator() {
    return this.mathOperator;
  }

  private getIsReady() {
    return this.isReady;
  }

}

