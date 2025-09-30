import { v4 as uuidv4 } from 'uuid';
import {TaskSet} from "./TaskSet";

export class TaskSetStarted extends TaskSet{


  private _dateModified: Date | undefined | null;
  private _dateStarted: Date | undefined | null;
  private _taskSetGuid: string;


  constructor(
    taskSet: TaskSet,
  ) {
    super(taskSet.taskConfig, taskSet.tasks);
    this._taskSetGuid = uuidv4();
    this._dateModified = null;
    this._dateStarted = null;
  }

  get dateModified(): Date | undefined | null {
    return this._dateModified;
  }


  set dateModified(date: Date | undefined | null) {
    this._dateModified = date;
  }

  get dateStarted(): Date | undefined | null {
    return this._dateStarted;
  }


  set dateStarted(date: Date | undefined | null) {
    this._dateStarted = date;
  }


}


