import {Enumify} from "enumify";


export class TaskRange extends Enumify {
  static range_10 = new TaskRange(10);
  static range_20 = new TaskRange(20);
  static range_50 = new TaskRange(50);
  static range_100 = new TaskRange(100);
  static _ = this.closeEnum(); // TypeScript: TaskRange.closeEnum()

  value: number;
  constructor(value: number) {
    super();
    this.value = value;
  }

  public checkValue(){

  }
}




