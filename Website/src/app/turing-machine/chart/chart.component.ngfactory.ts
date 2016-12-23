/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './chart.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './chart.component.css.shim';
import * as import11 from 'ng2-charts/components/charts/charts';
import * as import12 from '@angular/core/src/linker/element_ref';
var renderType_ChartComponent_Host:import0.RenderComponentType = (null as any);
class _View_ChartComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ChartComponent_0_4:import3.ChartComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ChartComponent_Host0,renderType_ChartComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ts-chart',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ChartComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ChartComponent_0_4 = new import3.ChartComponent();
    this._appEl_0.initComponent(this._ChartComponent_0_4,[],compView_0);
    compView_0.create(this._ChartComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ChartComponent) && (0 === requestNodeIndex))) { return this._ChartComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._ChartComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ChartComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ChartComponent_Host === (null as any))) { (renderType_ChartComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_ChartComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const ChartComponentNgFactory:import9.ComponentFactory<import3.ChartComponent> = new import9.ComponentFactory<import3.ChartComponent>('ts-chart',viewFactory_ChartComponent_Host0,import3.ChartComponent);
const styles_ChartComponent:any[] = [import10.styles];
var renderType_ChartComponent:import0.RenderComponentType = (null as any);
class _View_ChartComponent0 extends import1.AppView<import3.ChartComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _BaseChartDirective_2_3:import11.BaseChartDirective;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ChartComponent0,renderType_ChartComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'style','display: block');
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'canvas',(null as any));
    this.renderer.setElementAttribute(this._el_2,'baseChart','');
    this._BaseChartDirective_2_3 = new import11.BaseChartDirective(new import12.ElementRef(this._el_2));
    this._text_3 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.BaseChartDirective) && (2 === requestNodeIndex))) { return this._BaseChartDirective_2_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = this.context.barChartData;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._BaseChartDirective_2_3.datasets = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['datasets'] = new import7.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.context.barChartLabels;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._BaseChartDirective_2_3.labels = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['labels'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.context.barChartOptions;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._BaseChartDirective_2_3.options = currVal_2;
      if ((changes === (null as any))) { (changes = {}); }
      changes['options'] = new import7.SimpleChange(this._expr_2,currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this.context.barChartType;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._BaseChartDirective_2_3.chartType = currVal_3;
      if ((changes === (null as any))) { (changes = {}); }
      changes['chartType'] = new import7.SimpleChange(this._expr_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.context.chartColors;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._BaseChartDirective_2_3.colors = currVal_4;
      if ((changes === (null as any))) { (changes = {}); }
      changes['colors'] = new import7.SimpleChange(this._expr_4,currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.context.barChartLegend;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._BaseChartDirective_2_3.legend = currVal_5;
      if ((changes === (null as any))) { (changes = {}); }
      changes['legend'] = new import7.SimpleChange(this._expr_5,currVal_5);
      this._expr_5 = currVal_5;
    }
    if ((changes !== (null as any))) { this._BaseChartDirective_2_3.ngOnChanges(changes); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._BaseChartDirective_2_3.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._BaseChartDirective_2_3.ngOnDestroy();
  }
}
export function viewFactory_ChartComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ChartComponent> {
  if ((renderType_ChartComponent === (null as any))) { (renderType_ChartComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.Emulated,styles_ChartComponent,{})); }
  return new _View_ChartComponent0(viewUtils,parentInjector,declarationEl);
}