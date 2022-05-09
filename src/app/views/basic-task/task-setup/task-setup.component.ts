import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {TaskConfig} from "../model/TaskConfig";
import {TaskQMarkPosition} from "../model/TaskQMarkPosition";
import {TaskMathOperator} from "../model/TaskMathOperator";
import {TaskConfigService} from "../service/task-config.service";
import {TaskRange} from "../model/TaskRange";
import {TaskQuantity} from "../model/TaskQuantity";
import {TaskCreateService} from "../service/task-create.service";

@Component({
  selector: 'app-task-setup',
  templateUrl: './task-setup.component.html',
  styleUrls: ['./task-setup.component.scss']
})
export class TaskSetupComponent implements OnInit {


  //Display properties
  cols = 1;
  rowHeight = '300px';

  //Object properties
  taskConfig: TaskConfig = new TaskConfig(TaskQuantity.quantity_4, TaskRange.range_10, TaskQMarkPosition.qMarkPosition_right, TaskMathOperator.mathOperator_add, false);
  qMarkPosition = TaskQMarkPosition;
  mathOperator = TaskMathOperator;
  taskQuantity = TaskQuantity;
  taskRange = TaskRange;
  constructor(
              private responsive: BreakpointObserver, private taskConfigService: TaskConfigService, private taskCreateService: TaskCreateService) {
  }

  ngOnInit() {
            this.responsive.observe([
                Breakpoints.TabletPortrait,
                Breakpoints.TabletLandscape,
                Breakpoints.HandsetPortrait,
                Breakpoints.HandsetLandscape
            ])
                .subscribe(result => {

                    this.cols = 3;
                    this.rowHeight = "300px";


                    const breakpoints = result.breakpoints;

                    if (breakpoints[Breakpoints.TabletPortrait]) {
                        this.cols = 1;
                    }
                    else if (breakpoints[Breakpoints.HandsetPortrait]) {
                        this.cols = 1;
                        this.rowHeight = "230px";
                    }
                    else if (breakpoints[Breakpoints.HandsetLandscape]) {
                        this.cols = 1;
                    }
                    else if (breakpoints[Breakpoints.TabletLandscape]) {
                        this.cols = 2;
                    }

                });

  }

  resetButtons(){
    let buttonContainers = this.taskConfig.getPropertiesArray();
      // console.log('===============');
      // console.log(this.taskConfig);
      // console.log(this.taskConfig.getquantity());
      // console.log(this.taskConfig.getqMarkPosition());
      // console.log(this.taskConfig.getmathOperator());
      // console.log(this.taskConfig.getrange());
      // console.log(this.taskConfig.getPropertiesArray());
      // console.log('===============');
    for (let i = 0; i < buttonContainers.length; i++) {
      console.log(buttonContainers[i]);
      let buttonContainer = document.getElementById(buttonContainers[i]);
      if (buttonContainer !== null){
        let buttons = buttonContainer.getElementsByTagName('button');
        console.log(buttons.length);;
        console.log(buttons);
        for (let j = 0; j < buttons.length; j++) {
          let propStringCall = 'this.taskConfig.' + buttonContainers[i];
          // console.log('-----------');
          // console.log(propStringCall);
          // console.log(eval(propStringCall));
          // console.log(buttons[j].innerText);
          // console.log('-----------');
          if (eval(propStringCall) === buttons[j].innerText) {
            // console.log('=-=-=-=-=')
            console.log(buttons[j])
            // console.log('=-=-=-=-=')
          } else {
            console.log('notFound')
          }
        }
      }
    }

  }

  updateQuantity(quantity: number): void {
    this.taskConfig.quantity = quantity;
    this.taskConfigService.updateSetup(this.taskConfig);
  }

  updateRange(range: TaskRange): void {
    this.taskConfig.range = range;
    this.taskConfigService.updateSetup(this.taskConfig);
  }

  updateVariant(variant: TaskQMarkPosition): void {
    this.taskConfig.qMarkPosition = variant;
    this.taskConfigService.updateSetup(this.taskConfig);
  }

  updateOperator(operator: TaskMathOperator): void {
    this.taskConfig.mathOperator = operator;
    this.taskConfigService.updateSetup(this.taskConfig);
  }

  // updateProperty(propNameToken: string){
  //   for (let taskConfigKey in this.taskConfig ) {
  //     if (taskConfigKey === propNameToken) {
  //       // @ts-ignore
  //       this.taskConfig[taskConfigKey] = propNameToken;
  //     }
  //   }
  // }

  resetSetup(){
    this.resetButtons();
    this.taskConfigService.updateSetup(new TaskConfig(TaskQuantity.quantity_4, TaskRange.range_10, TaskQMarkPosition.qMarkPosition_right, TaskMathOperator.mathOperator_add, false));
  }

  createTask(){
   this.taskCreateService.createTask(this.taskConfig);
  }
}
