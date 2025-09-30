import {UUID} from 'angular2-uuid';
import {TaskConfig} from "./TaskConfig";

export class TaskConfigStarted extends TaskConfig{

  private _configGuid: string |  UUID;
  private _dateCreated: Date;

  constructor(
    taskConfig: TaskConfig
  ) {
    super(taskConfig.quantity, taskConfig.range, taskConfig.qMarkPosition, taskConfig.mathOperator);
    this._configGuid = UUID.UUID();
    this._dateCreated = new Date();
  }


  get configGuid(){
    return this._configGuid;
  }
}

