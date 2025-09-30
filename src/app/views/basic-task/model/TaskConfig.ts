import {TaskQMarkPosition} from '../params/TaskQMarkPosition';
import {TaskMathOperator} from '../params/TaskMathOperator';
import {TaskRange} from "../params/TaskRange";
import {TaskQuantity} from "../params/TaskQuantity";


export class TaskConfig {

  private _quantity: TaskQuantity ;
  private _range: TaskRange;
  private _qMarkPosition: TaskQMarkPosition;
  private _mathOperator: TaskMathOperator;

  public constructor(quantity: TaskQuantity, range: TaskRange, qMarkPosition: TaskQMarkPosition, mathOperator: TaskMathOperator) {
   this._quantity = quantity;
   this._range = range;
   this._qMarkPosition = qMarkPosition;
   this._mathOperator = mathOperator;
  }

  getListProperties(){
    return ['quantity', 'range','qMarkPosition', 'mathOperator'];
  }


  get quantity(): TaskQuantity {
    return this._quantity;
  }

  set quantity(value: TaskQuantity) {
    this._quantity = value;
  }

  get range(): TaskRange {
    return this._range;
  }

  set range(value: TaskRange) {
    this._range = value;
  }

  get qMarkPosition(): TaskQMarkPosition {
    return this._qMarkPosition;
  }

  set qMarkPosition(value: TaskQMarkPosition) {
    this._qMarkPosition = value;
  }

  get mathOperator(): TaskMathOperator {
    return this._mathOperator;
  }

  set mathOperator(value: TaskMathOperator) {
    this._mathOperator = value;
  }


}

