import {Enumify} from "enumify";


export class TaskQMarkPosition extends Enumify {
  static qMarkPosition_left = new TaskQMarkPosition('left');
  static qMarkPosition_center = new TaskQMarkPosition('center');
  static qMarkPosition_right = new TaskQMarkPosition('right');
  static _ = this.closeEnum(); // TypeScript: TaskQMarkPosition.closeEnum()

  value: string;
  constructor(value: string) {
    super();
    this.value = value;
  }

}
