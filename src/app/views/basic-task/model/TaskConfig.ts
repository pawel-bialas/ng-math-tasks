import {TaskQMarkPosition} from '../params/TaskQMarkPosition';
import {TaskMathOperator} from '../params/TaskMathOperator';
import {TaskRange} from "../params/TaskRange";
import {TaskQuantity} from "../params/TaskQuantity";
import {UUID} from 'angular2-uuid';

export class TaskConfig {

  private _quantity: TaskQuantity ;
  private _range: TaskRange;
  private _qMarkPosition: TaskQMarkPosition;
  private _mathOperator: TaskMathOperator;
  private _guid: string | UUID;
  private _isReady: boolean;

  public constructor(quantity: TaskQuantity, range: TaskRange, qMarkPosition: TaskQMarkPosition, mathOperator: TaskMathOperator, isReady: boolean, guid: string) {
   this._quantity = quantity;
   this._range = range;
   this._qMarkPosition = qMarkPosition;
   this._mathOperator = mathOperator;
   this._isReady = isReady;
   this._guid = guid;
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

  get guid(): string | UUID {
    return this._guid;
  }

  set guid(value: string | UUID) {
    this._guid = value;
  }

  get isReady(): boolean {
    return this._isReady;
  }

  set isReady(value: boolean) {
    this._isReady = value;
  }
}

