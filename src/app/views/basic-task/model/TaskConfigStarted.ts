import { v4 as uuidv4 } from 'uuid';
import {TaskConfig} from "./TaskConfig";

export class TaskConfigStarted extends TaskConfig{

  private _configGuid: string;
  private _dateCreated: Date;

  constructor(
    taskConfig: TaskConfig
  ) {
    super(taskConfig.quantity, taskConfig.range, taskConfig.qMarkPosition, taskConfig.mathOperator);
    this._configGuid = uuidv4();
    this._dateCreated = new Date();
  }


  get configGuid(){
    return this._configGuid;
  }
}

