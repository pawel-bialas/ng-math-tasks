import {UUID} from "angular2-uuid";
import {TaskQuantity} from "../params/TaskQuantity";
import {TaskRange} from "../params/TaskRange";
import {TaskQMarkPosition} from "../params/TaskQMarkPosition";
import {TaskMathOperator} from "../params/TaskMathOperator";

export class Task {

  private guidTaskConfig: UUID | undefined | null;
  private guid: UUID | undefined | null;
  public values:  Map<any, any> | undefined | null;
  public isCorrect: boolean | undefined | null;
  public userInputValueIndex: number | undefined | null;
  public userInputValue: number | undefined | null;




  public constructor(guidTaskConfig: UUID, guid: UUID, numbers: Map<any, any>, isCorrect: boolean, userInputValueIndex: number,
                     ) {
    this.guidTaskConfig = guidTaskConfig;
    this.guid = guid;
    this.values = numbers;
    this.isCorrect = isCorrect;
    this.userInputValueIndex = userInputValueIndex;
    this.userInputValue = userInputValueIndex;
  }

  public getGuidTaskConfig() {
    return this.guidTaskConfig;
  }

  public getGuid() {
    return this.guid;
  }

  public getNumbers() {
    return this.values;
  }

  public getUserInputValueIndex(){
    return this.userInputValueIndex;
  }
  public getIsCorrect(){
    return this.isCorrect;
  }
}
