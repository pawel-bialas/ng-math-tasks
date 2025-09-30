import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {TaskConfig} from "../model/TaskConfig";
import {TaskQMarkPosition} from "../params/TaskQMarkPosition";
import {TaskMathOperator} from "../params/TaskMathOperator";
import {TaskConfigService} from "../service/task-config.service";
import {TaskRange} from "../params/TaskRange";
import {TaskQuantity} from "../params/TaskQuantity";
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
  taskConfig: TaskConfig = new TaskConfig(TaskQuantity.quantity_4, TaskRange.range_10, TaskQMarkPosition.qMarkPosition_right, TaskMathOperator.mathOperator_add);
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
    this.setButtons();
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

  setButtons(){

    let mathOperatorSection = this._mathOperator.nativeElement;
    let buttonsMathOperator = mathOperatorSection.getElementsByTagName('button');
    this.setButtonsSection(buttonsMathOperator, this.taskConfig.mathOperator);

    let rangeSection = this._range.nativeElement;
    let buttonsRange = rangeSection.getElementsByTagName('button');
    this.setButtonsSection(buttonsRange, this.taskConfig.range);

    let quantitySection = this._quantity.nativeElement;
    let buttonsQuantity = quantitySection.getElementsByTagName('button');
    this.setButtonsSection(buttonsQuantity, this.taskConfig.quantity);

    let qMarkPositionSection = this._qMarkPosition.nativeElement;
    let qMarkPositionQuantity = qMarkPositionSection.getElementsByTagName('button');
    this.setButtonsSection(qMarkPositionQuantity, this.taskConfig.qMarkPosition);
  }


  updateQuantity(quantity: TaskQuantity): void {
    this.taskConfig.quantity = quantity;
    this.taskConfigService.updateSetup(this.taskConfig);
    this.setButtons();
  }

  updateRange(range: TaskRange): void {
    this.taskConfig.range = range;
    this.taskConfigService.updateSetup(this.taskConfig);
    this.setButtons();

  }

  updateVariant(variant: TaskQMarkPosition): void {
    this.taskConfig.qMarkPosition = variant;
    this.taskConfigService.updateSetup(this.taskConfig);
    this.setButtons();
  }

  updateOperator(operator: TaskMathOperator): void {
    this.taskConfig.mathOperator = operator;
    this.taskConfigService.updateSetup(this.taskConfig);
    this.setButtons();
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
    this.taskConfigService.resetSetup();
    this.setButtons();
  }

  createTask() {
    this.taskCreateService.createTaskSet();
  }

  private setButtonsSection(buttons: HTMLCollection, value: any) {
    for (let i = 0; i < buttons.length; i++) {
      let span = buttons[i].getElementsByClassName('mat-button-wrapper');
      if (span[0].textContent) {
        if (span[0].textContent.trim() == value) {
          buttons[i].classList.add('selectedButton');
        } else {
          buttons[i].classList.remove('selectedButton');
        }
      }
    }


  }
}
