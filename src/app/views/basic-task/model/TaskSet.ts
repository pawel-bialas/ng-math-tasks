import {UUID} from "angular2-uuid";
import {TaskConfig} from "./TaskConfig";
import {BasicTask} from "./BasicTask";

export class TaskSet {

  private readonly _config: TaskConfig;
  private readonly _tasks: BasicTask[]  = [];
  private readonly _dateCreated: Date;

  public constructor(
    taskConfig: TaskConfig,
    tasks: BasicTask[]
  ) {
      this._config = taskConfig;
      this._tasks = tasks;
      this._dateCreated = new Date();
  }


  get taskConfig(): TaskConfig {
    return this._config;
  }

  get tasks(): BasicTask[] {
    return this._tasks;
  }

  get dateCreated(): Date | undefined | null {
    return this._dateCreated;
  }
}
