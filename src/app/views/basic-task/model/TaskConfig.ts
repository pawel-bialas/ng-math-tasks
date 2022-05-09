import {TaskQMarkPosition} from './TaskQMarkPosition';
import {TaskMathOperator} from './TaskMathOperator';
import {TaskRange} from "./TaskRange";
import {TaskQuantity} from "./TaskQuantity";

export class TaskConfig {

  public quantity: string | TaskQuantity ;
  public range: string | TaskRange;
  public qMarkPosition: string | TaskQMarkPosition;
  public mathOperator: string | TaskMathOperator;
  public isReady: boolean;

  public constructor(quantity: TaskQuantity, range: TaskRange, qMarkPosition: TaskQMarkPosition, mathOperator: TaskMathOperator, isReady: boolean) {
   this.quantity = quantity;
   this.range = range;
   this.qMarkPosition = qMarkPosition;
   this.mathOperator = mathOperator;
   this.isReady = isReady;
  }

  getquantity(){
    return this.quantity;
  }

  getrange(){
    return this.range;
  }

  getqMarkPosition(){
    return this.qMarkPosition;
  }

  getmathOperator(){
    return this.mathOperator;
  }

  getPropertiesArray(){
    return ['quantity', 'range','qMarkPosition', 'mathOperator'];
  }

}

