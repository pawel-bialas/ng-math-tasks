import {UUID} from "angular2-uuid";
import {TaskQuantity} from "../params/TaskQuantity";
import {TaskRange} from "../params/TaskRange";
import {TaskQMarkPosition} from "../params/TaskQMarkPosition";
import {TaskMathOperator} from "../params/TaskMathOperator";

export class BasicTask {

  private _guidTaskConfig: string | UUID;
  private _guid: string | UUID;
  private _values:  Map<any, any> | undefined | null;
  private _isCorrect: boolean | undefined | null;
  private _userInputValueIndex: number | undefined | null;


  get guidTaskConfig(): string | UUID {
    return this._guidTaskConfig;
  }

  set guidTaskConfig(value: string | UUID) {
    this._guidTaskConfig = value;
  }

  get guid(): string | UUID {
    return this._guid;
  }

  set guid(value: string | UUID) {
    this._guid = value;
  }

  get values(): Map<any, any> | undefined | null {
    return this._values;
  }

  set values(value: Map<any, any> | undefined | null) {
    this._values = value;
  }

  get isCorrect(): boolean | undefined | null {
    return this._isCorrect;
  }

  set isCorrect(value: boolean | undefined | null) {
    this._isCorrect = value;
  }

  get userInputValueIndex(): number | undefined | null {
    return this._userInputValueIndex;
  }

  set userInputValueIndex(value: number | undefined | null) {
    this._userInputValueIndex = value;
  }

  public constructor(guidTaskConfig: string | UUID, guid: string | UUID, numbers: Map<any, any> | undefined | null, isCorrect:  boolean | undefined | null, userInputValueIndex: number | undefined | null,
                     ) {
    this._guidTaskConfig = guidTaskConfig;
    this._guid = guid;
    this._values = numbers;
    this._isCorrect = isCorrect;
    this._userInputValueIndex = userInputValueIndex;
  }


}
