import {TaskQMarkPosition} from '../params/TaskQMarkPosition';
import {TaskMathOperator} from '../params/TaskMathOperator';
import {TaskRange} from "../params/TaskRange";
import {TaskQuantity} from "../params/TaskQuantity";
import {UUID} from 'angular2-uuid';

export class TaskConfig {

  public quantity: TaskQuantity ;
  public range: TaskRange;
  public qMarkPosition: TaskQMarkPosition;
  public mathOperator: TaskMathOperator;
  public guid: UUID;
  public isReady: boolean;

  public constructor(quantity: TaskQuantity, range: TaskRange, qMarkPosition: TaskQMarkPosition, mathOperator: TaskMathOperator, isReady: boolean, guid: UUID) {
   this.quantity = quantity;
   this.range = range;
   this.qMarkPosition = qMarkPosition;
   this.mathOperator = mathOperator;
   this.isReady = isReady;
   this.guid = guid;
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

  public getIsReady() {
    return this.isReady;
  }

  public getGuid(){
    return this.guid;
  }

}

