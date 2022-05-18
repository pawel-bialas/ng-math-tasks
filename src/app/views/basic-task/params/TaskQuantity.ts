import {Enumify} from "enumify";


export class TaskQuantity extends Enumify {
  static quantity_4 = new TaskQuantity(4);
  static quantity_10 = new TaskQuantity(10);
  static quantity_20 = new TaskQuantity(20);
  static quantity_40 = new TaskQuantity(40);
  static _ = this.closeEnum(); // TypeScript: TaskQuantity.closeEnum()

  value: number;
  constructor(value: number) {
    super();
    this.value = value;
  }

}



