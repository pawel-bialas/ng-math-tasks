import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {TaskConfig} from "../model/TaskConfig";
import {TaskQMarkPosition} from "../model/TaskQMarkPosition";
import {TaskMathOperator} from "../model/TaskMathOperator";
import {TaskConfigService} from "../service/task-config.service";
import {TaskRange} from "../model/TaskRange";
import {TaskQuantity} from "../model/TaskQuantity";
import {TaskCreateService} from "../service/task-create.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-task-setup',
  templateUrl: './task-setup.component.html',
  styleUrls: ['./task-setup.component.scss']
})
export class TaskSetupComponent implements OnInit, OnDestroy, AfterViewInit {


  //Display properties
  cols = 1;
  rowHeight = '300px';

  //Object properties
  taskConfig: TaskConfig = new TaskConfig(TaskQuantity.quantity_4, TaskRange.range_10, TaskQMarkPosition.qMarkPosition_right, TaskMathOperator.mathOperator_add, false);
  qMarkPosition = TaskQMarkPosition;
  mathOperator = TaskMathOperator;
  taskQuantity = TaskQuantity;
  taskRange = TaskRange;

  //Subscriptions
  taskConfigSub: Subscription = new Subscription();

  //TemplateRefs
  @ViewChild('_mathOperator', {read: ElementRef})
  _mathOperator!: ElementRef;
  @ViewChild('_quantity', {read: ElementRef})
  _quantity!: ElementRef;
  @ViewChild('_range', {read: ElementRef})
  _range!: ElementRef;
  @ViewChild('_qMarkPosition', {read: ElementRef})
  _qMarkPosition!: ElementRef;

  constructor(
    private responsive: BreakpointObserver, private taskConfigService: TaskConfigService, private taskCreateService: TaskCreateService) {
  }

  ngAfterViewInit(): void {
    console.log('Values on ngAfterViewInit():');
    console.log("sample:", this._mathOperator.nativeElement);
    console.log("sample:", this._qMarkPosition.nativeElement);
    console.log("sample:", this._quantity.nativeElement);
    console.log("sample:", this._range.nativeElement);
    }

  ngOnDestroy(): void {
    this.taskConfigSub.unsubscribe();
    }

  ngOnInit() {
    this.taskConfigSub = this.taskConfigService.data$.subscribe(value => {
      this.taskConfig = value;
    });

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
        } else if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.cols = 1;
          this.rowHeight = "230px";
        } else if (breakpoints[Breakpoints.HandsetLandscape]) {
          this.cols = 1;
        } else if (breakpoints[Breakpoints.TabletLandscape]) {
          this.cols = 2;
        }

      });

  }

  resetButtons(){
    console.log('asd');
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

  resetSetup() {
    this.resetButtons();
    this.taskConfigService.updateSetup(new TaskConfig(TaskQuantity.quantity_4, TaskRange.range_10, TaskQMarkPosition.qMarkPosition_right, TaskMathOperator.mathOperator_add, false));
  }

  createTask() {
    this.taskCreateService.createTask(this.taskConfig);
  }
}
