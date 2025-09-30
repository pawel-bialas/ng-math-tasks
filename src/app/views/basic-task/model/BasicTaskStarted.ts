import { v4 as uuidv4 } from 'uuid';
import {BasicTask} from "./BasicTask";

export class BasicTaskStarted extends BasicTask {


  private readonly _taskGuid: string;
  private readonly _configGuid: string;
  private readonly _dateCreated: Date;
  private _userInputValue: number | null | undefined;
  private _dateModified: Date | null | undefined;

  constructor(
    task: BasicTask,
    configGuid: string) {
    super(task.values, task.isCorrect, task.userInputValueIndex);
    this._taskGuid = uuidv4();
    this._configGuid = configGuid;
    this._dateCreated = new Date();
    this._userInputValue = null;
    this._dateModified = null;
  }

  get taskGuid(): string {
    return this._taskGuid;
  }

  get configGuid(): string {
    return this._configGuid;
  }

  get dateCreated(): Date {
    return this._dateCreated;
  }

  get userInputValue(): number | null | undefined {
    return this._userInputValue;
  }

  set userInputValue(number: number | null | undefined) {
    this._userInputValue = number;
  }

  get dateModified(): Date | null | undefined {
    return this._dateModified;
  }

  set dateModified(date: Date | null | undefined) {
    this._dateModified = date;
  }



}



